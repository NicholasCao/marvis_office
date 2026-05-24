# Marvis Office — 架构与依赖分析

## 概述

Marvis Office 是从 Marvis 桌面端（Vite + React + PixiJS）中提取的 **办公室场景独立运行版**。通过 `bypass.js` 跳过认证、原生桥接和后端依赖，使 PixiJS 办公室场景可在纯浏览器环境中独立运行，并暴露 `window.__office` API 供外部程序控制 Agent 行为。

## 目录结构

```
marvis_office/
├── index.html              # 入口页面
├── bypass.js               # 核心：环境模拟 + Agent 控制 API
├── server.py               # 静态文件服务器 (port 5175)
├── loading.webp             # 1x1 占位图（防止加载报错）
├── assets/                  # JS/CSS/字体/图标（19MB）
│   ├── index-wSLjxAso.js    # 主 bundle（14MB）— 入口
│   ├── index-DLJb5NgS.css   # 全量 CSS（2.4MB）
│   ├── index-CvPpuPlD.js    # 懒加载模块（1MB）
│   ├── react-vendor-*.js    # React 运行时（596KB）
│   ├── utils-vendor-*.js    # Zustand/Immer/Axios 等（273KB）
│   ├── [PixiJS chunks]      # 10个 PixiJS 按需加载模块
│   ├── markdown-vendor-*.js # Stub（空实现）
│   ├── report-vendor-*.js   # Stub（空实现）
│   └── [icons/fonts]        # Logo、头像、字体
└── workbench/               # PixiJS 办公室资源（44MB）
    ├── assets/
    │   ├── manifest.json    # PixiJS 资源清单
    │   ├── office.tmj       # Tiled 地图文件
    │   ├── assets.tsj       # Tiled tileset
    │   ├── img/             # 场景基础图（agent/workstation/loading）
    │   └── spritesheet/agent/ # 48种 Agent 动画精灵表（41MB）
    └── transcoders/ktx/     # KTX2 纹理解码器 WASM（912KB）
```

## 文件依赖关系

### 入口链路

```
index.html
  ├── bypass.js                      (同步加载，环境模拟)
  └── assets/index-wSLjxAso.js       (ES Module 入口)
        ├── assets/react-vendor-*.js  (React 18 运行时)
        ├── assets/utils-vendor-*.js  (工具库)
        │     └── react-vendor-*.js
        ├── assets/markdown-vendor-*.js (stub)
        └── assets/report-vendor-*.js   (stub)
```

### PixiJS 动态加载链（按需 import）

所有 PixiJS chunk 都从 `index-wSLjxAso.js` 导入公共符号：

```
index-wSLjxAso.js (PixiJS core)
  │
  ├── Filter-*.js
  │     └── index-wSLjxAso.js
  │
  ├── RenderTargetSystem-*.js
  │     ├── Filter-*.js
  │     └── index-wSLjxAso.js
  │
  ├── WebGLRenderer-*.js          ← 主渲染器
  │     ├── BufferResource-*.js
  │     ├── RenderTargetSystem-*.js
  │     └── index-wSLjxAso.js
  │
  ├── WebGPURenderer-*.js          ← 备用渲染器
  │     ├── BufferResource-*.js
  │     ├── RenderTargetSystem-*.js
  │     └── index-wSLjxAso.js
  │
  ├── CanvasRenderer-*.js          ← 回退渲染器
  │     ├── RenderTargetSystem-*.js
  │     ├── canvasUtils-*.js
  │     └── index-wSLjxAso.js
  │
  ├── BitmapFont-*.js
  │     └── index-wSLjxAso.js
  │
  ├── browserAll-*.js
  │     └── index-wSLjxAso.js
  │
  └── webworkerAll-*.js
        ├── Filter-*.js
        ├── canvasUtils-*.js
        └── index-wSLjxAso.js
```

### 运行时资源加载（HTTP fetch）

```
index-wSLjxAso.js
  → fetch /workbench/assets/manifest.json
    → fetch /workbench/assets/office.tmj        (Tiled 地图)
    → fetch /workbench/assets/assets.tsj         (Tileset 定义)
    → fetch /workbench/assets/img/*.webp         (场景图)
    → fetch /workbench/assets/img/*.webp.json    (精灵表元数据)
    → fetch /workbench/assets/spritesheet/agent/*.webp      (动画帧)
    → fetch /workbench/assets/spritesheet/agent/*.webp.json (动画元数据)
    → fetch /workbench/assets/spritesheet/agent/*.ktx2      (GPU 纹理)
    → fetch /workbench/transcoders/ktx/libktx.wasm          (KTX 解码器)
```

## bypass.js 功能分区

| Section | 功能 | 作用 |
|---------|------|------|
| 0 | 全局变量 Stub | `__XIAOBAO_AGENT_CSS__`, `jsRunningPerformanceNowResult` |
| 0b | 控制台过滤 | 抑制非关键 warn/error（toJSON, privilege, 定时器等） |
| 1 | Mock Cookies | logintype, openid, accesstoken 等登录态 |
| 2 | Mock localStorage | envInfo（设备信息） |
| 2a | CSS 注入 | 隐藏 sidebar、topbar、rightPanel，只保留办公室 |
| 2b | 跳过冷启动检查 | sessionStorage `startCheckerPassed` |
| 2c | IntersectionObserver | 替换为始终可见，确保画布初始化 |
| 3 | Jsbridge 模拟 | Proxy 实现原生桥接空操作 |
| 4 | 路由导航 | 轮询 `__TAB_ROUTERS__` 导航到 `/officeDashboard` |
| 5 | fetch 拦截 | 拦截外部 API（qq.com/ailauncher/beacon），mock /api/ 响应 |
| 5b | XHR 拦截 | 在 `open()` 冻结被拦截的 XHR（兼容 Aegis SDK 覆写） |
| 6 | WebSocket 模拟 | 阻止 WebSocket 连接错误 |
| 7 | Gateway 连接 | Mock connectionManager 使 sessionList 初始化完成 |
| **8** | **`__office` API** | **Agent 控制接口（见下方）** |

## `window.__office` API

游戏场景就绪后自动挂载，提供以下控制能力：

### 查询

```js
__office.agents()
// → [{name, type, slot, state, subState, x, y, gridCol, gridRow,
//     seatX, seatY, isInWorkstation, isMoving, currentTask, taskQueueLen}]

__office.getAgent(name)   // → 原始 agent 对象
```

### 移动

```js
__office.moveTo(name, x, y)     // A* 寻路行走，返回 true/false
__office.teleport(name, x, y)   // 瞬移
```

### 状态 / 动画

```js
__office.setState(name, subState)     // 设置子状态（自动处理 OFFSTAGE→可见）
__office.playAnim(name, anim, loop)   // 播放精灵动画
__office.stopAnim(name)               // 停止动画
```

### 气泡对话

```js
__office.speak(name, text, durationMs)  // 显示对话气泡
__office.stopSpeak(name)                // 隐藏气泡
```

### 任务生命周期

```js
__office.dispatch(sender, receiver, taskId, message)  // 派发任务
__office.start(agentName, taskId, message)             // 开始执行
__office.complete(taskId)                              // 完成任务
```

### 自主行为控制

```js
__office.pauseIdle()    // 暂停自主空闲决策
__office.resumeIdle()   // 恢复自主空闲决策
```

### 原始引用

```js
__office.scene   // PixiJS 场景对象
__office.game    // 游戏引擎对象
```

## Agent 系统

### 内置 Agent（6个）

| Name | Type | 说明 |
|------|------|------|
| Marvis | main | 主角 |
| App Agent | App Agent | 应用操作 |
| Computer Agent | Computer Agent | 电脑操作 |
| Browser Agent | Browser Agent | 浏览器操作 |
| File Agent | File Agent | 文件操作 |
| Search Agent | Search Agent | 搜索操作 |

### 状态机

```
StateCategory: DISPATCHING | GO_BACK | TASK_EXECUTING | IDLE | FINISH | STOP | LEAVING | OFFSTAGE

SubState: DISPATCHING | WORKING | STANDBY | SLACKING | SLEEPING | POOPING |
          RUNNING_TREADMILL | TALKING | ENTERING | LEAVING | OFFSTAGE | ...
```

### 可用动画（48种精灵表）

standby, working, sleeping, slacking (peek), pooping, running_treadmill, talking_on_seat, talking_on_stand, salute, cheer_main, cheer_sub, drink_coffee, fall_down, leaving, off_chair, walking_h, walking_up, fc_screen_working_*, fc_pooping, fc_coffee, fc_ticket, fc_sigh, fc_high_press, fc_leaving 等。

每种动画有 `@1x` 和 `@2x` 分辨率，以及 `_scarf` 变体（围巾版本）。

## 体积分析

| 类别 | 大小 | 占比 |
|------|------|------|
| 主 Bundle (index-wSLjxAso.js) | 14MB | 22% |
| CSS (index-DLJb5NgS.css) | 2.4MB | 4% |
| 其他 JS (vendors + PixiJS chunks) | 2.5MB | 4% |
| 图标/字体 | 0.5MB | 1% |
| 精灵表动画 | 41MB | 66% |
| 场景图/地图 | 1.1MB | 2% |
| KTX 解码器 | 0.9MB | 1% |
| **总计** | **~62MB** | |

### 进一步精简方向

1. **CSS 精简**：`index-DLJb5NgS.css`（2.4MB）包含大量非办公室的 UI 样式，可提取仅需的部分
2. **主 Bundle 瘦身**：`index-wSLjxAso.js`（14MB）包含完整应用逻辑（聊天、设置、文件管理等），办公室场景仅需其中一部分
3. **精灵表优化**：`_scarf` 变体和 `@2x` 可按需裁剪；48种动画可精简到常用的十几种
4. **KTX2 纹理**：如不需要 GPU 压缩纹理，可删除 `.ktx2` 文件和 transcoders（省 ~2MB）

## 启动方式

```bash
cd marvis_office
python3 server.py
# 打开 http://localhost:5175/
```

## 编程控制示例

```js
// 暂停自主行为
__office.pauseIdle()

// 查看所有 agent
__office.agents()

// 让 Marvis 说话
__office.speak('Marvis', '开始工作！', 3000)

// 派发任务
__office.dispatch('main', 'App Agent', 'task-1', '开始分析需求')

// 移动 agent
__office.moveTo('File Agent', 864, 480)

// 改变状态
__office.setState('Browser Agent', 'WORKING')
```
