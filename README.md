# Marvis Office

从 Marvis 桌面端（Vite + React + PixiJS）提取的**办公室场景独立运行版**。通过 `bypass.js` 跳过认证和后端依赖，使 PixiJS 办公室场景在纯浏览器中运行，并暴露 `window.__office` API 供外部控制。

## 快速启动

```bash
python3 server.py
# 打开 http://localhost:5175/
```

## 自定义 Agent 初始化

### 核心限制：type 是固定的

Agent 的 `type` 必须使用以下 6 个内置值之一，**不能自定义新 type**：

| type 值 | 角色 | 行为特征 |
|---------|------|---------|
| `"main"` | 主角（slot 0） | 始终在场，不会离场，不参与随机闲逛 |
| `"App Agent"` | 子 Agent | 会随机离场/入场，参与 idle 决策 |
| `"Computer Agent"` | 子 Agent | 同上 |
| `"Browser Agent"` | 子 Agent | 同上 |
| `"File Agent"` | 子 Agent | 同上 |
| `"Search Agent"` | 子 Agent | 同上 |

**原因**：type 深度绑定在场景逻辑中——idle 决策、任务派发、动画映射、离场判断都通过 type 做硬编码分支。传入未知 type 不会报错，但 agent 不会被正确初始化到场景中（不参与 idle、不会上跑步机、不会被 talk 邀请等）。

### 可自定义的部分

| 属性 | 含义 | 自由度 |
|------|------|--------|
| `name` | 显示名称 | 完全自由，任意中英文 |
| `color` | 围巾颜色 | 完全自由，0xRRGGBB 格式 |
| `description` | 描述文本 | 完全自由 |
| 数量 | Agent 总数 | 1~8 个，至少需要 1 个 type="main" |

### Demo：8 个自定义名称的 Agent

`custom.html`（已包含在项目中，直接打开 `http://localhost:5175/custom.html`）：

```html
<!doctype html>
<html lang="en" data-framework="browser" data-os="macos">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Custom Office</title>
  <script>
    window.__RUNTIME_FRAMEWORK__ = 'browser';
    window.__RUNTIME_OS__ = 'macos';

    // ① Agent 列表：type 必须用内置值，name/color 自由设置（最多 8 个）
    window.__OFFICE_AGENTS = [
      { name: "队长",  type: "main",           description: "项目总指挥", color: 0xFF6600 },
      { name: "前端",  type: "Browser Agent",  description: "前端开发",   color: 0x00AAFF },
      { name: "后端",  type: "Computer Agent", description: "后端开发",   color: 0x66FF00 },
      { name: "运维",  type: "App Agent",      description: "运维部署",   color: 0xFF00FF },
      { name: "测试",  type: "File Agent",     description: "质量保障",   color: 0xFFFF00 },
      { name: "数据",  type: "Search Agent",   description: "数据分析",   color: 0x00FFCC },
      { name: "设计",  type: "Browser Agent",  description: "UI/UX 设计", color: 0xFF8800 },
      { name: "产品",  type: "App Agent",      description: "产品经理",   color: 0x8866FF }
    ];

    // ② 点击 Agent 弹出的卡片（key 用 type 值，main 的 key 特殊为 "Main Agent"）
    window.__AGENT_CARDS = {
      "Main Agent":      { name: "队长", subtitle: "Leader",   description: "负责任务分发", skills: ["架构设计", "代码审查"] },
      "Browser Agent":   { name: "前端", subtitle: "Frontend", description: "UI 开发",     skills: ["React", "CSS"] },
      "Computer Agent":  { name: "后端", subtitle: "Backend",  description: "API 开发",    skills: ["Node.js", "SQL"] },
      "App Agent":       { name: "运维", subtitle: "DevOps",   description: "CI/CD 管理",  skills: ["Docker", "K8s"] },
      "File Agent":      { name: "测试", subtitle: "QA",       description: "自动化测试",   skills: ["Jest", "Cypress"] },
      "Search Agent":    { name: "数据", subtitle: "Data",     description: "数据分析",     skills: ["Python", "SQL"] }
    };
  </script>
  <script src="./bypass.js"></script>
  <script type="module" crossorigin src="./assets/index-wSLjxAso.js"></script>
  <link rel="modulepreload" crossorigin href="./assets/react-vendor-Bcb6ewdu.js">
  <link rel="modulepreload" crossorigin href="./assets/utils-vendor-D8_MVJCX.js">
  <link rel="stylesheet" crossorigin href="./assets/index-DLJb5NgS.css">
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

### 初始化流程说明

```
页面加载
  │
  ├─ window.__OFFICE_AGENTS = [...] (设置自定义列表)
  ├─ window.__AGENT_CARDS = {...}   (设置弹窗卡片)
  │
  ├─ bypass.js 执行 (mock 环境、注入 CSS、拦截网络)
  │
  ├─ index-wSLjxAso.js 执行 (React + PixiJS 初始化)
  │     ├─ React 渲染 WorkbenchPanel
  │     │     └─ 读取 window.__OFFICE_AGENTS || 默认 6 个
  │     ├─ PixiJS Game.init({ agents: [...] })
  │     │     ├─ 加载 spritesheet 资源
  │     │     ├─ 为每个 agent 创建精灵、设置围巾颜色
  │     │     ├─ main agent 始终保持在场
  │     │     └─ 其他 agent 随机 2 个在场，其余 OFFSTAGE
  │     └─ 挂载 window.__game
  │
  └─ bypass.js officePoll 检测到 __game.scene.agents
        └─ 挂载 window.__office API
```

### 运行时修改

场景加载后可以改 agent 的名称（影响 `findAgent` 查找）：

```js
var agent = __office.getAgent('Marvis');  // 通过原名或 type 查找
agent.agentName = '队长';                 // 之后可用 __office.getAgent('队长')
```

### 同一 type 复用

如果你需要多个"同类"agent，可以重复使用同一个 type：

```js
window.__OFFICE_AGENTS = [
  { name: "主管",   type: "main",          color: 0xFF0000 },
  { name: "员工A",  type: "App Agent",     color: 0x00FF00 },
  { name: "员工B",  type: "App Agent",     color: 0x0000FF },  // 同 type 不同名
  { name: "员工C",  type: "Browser Agent", color: 0xFFFF00 }
];
```

注意：同 type 的多个 agent 共享同一个 bubble key 和 pathfinding occupant slot，可能导致气泡冲突。建议每个 agent 使用不同 type。

## 内置 Agent（默认 6 个）

| Name | Type | 说明 |
|------|------|------|
| Marvis | main | 主角 |
| App Agent | App Agent | 应用操作 |
| Computer Agent | Computer Agent | 电脑操作 |
| Browser Agent | Browser Agent | 浏览器操作 |
| File Agent | File Agent | 文件操作 |
| Search Agent | Search Agent | 搜索操作 |

## `window.__office` API

场景就绪后自动挂载到 `window.__office`。

### 查询

```js
__office.agents()
// → [{name, type, slot, state, subState, x, y, gridCol, gridRow,
//     seatX, seatY, isInWorkstation, isMoving, currentTask, taskQueueLen}]

__office.getAgent(name)   // → 原始 agent 对象（可直接操作底层属性）
```

### 移动

```js
__office.moveTo(name, x, y)     // A* 寻路行走，返回 true/false
__office.teleport(name, x, y)   // 瞬移到指定坐标
```

### 状态 / 动画

```js
__office.setState(name, subState)     // 设置子状态（如 'WORKING', 'SLEEPING'）
__office.playAnim(name, anim, loop)   // 播放精灵动画（anim 名见下方列表）
__office.stopAnim(name)               // 停止动画
```

### 气泡对话

```js
__office.speak(name, text, durationMs)  // 显示对话气泡（默认 5000ms）
__office.stopSpeak(name)                // 隐藏气泡
```

### 任务生命周期

```js
__office.dispatch(sender, receiver, taskId, message)  // 派发任务
__office.start(agentName, taskId, message)             // 开始执行
__office.complete(taskId)                              // 完成任务
```

### 名称标签控制

```js
__office.hideNames()              // 隐藏所有 agent 名称标签
__office.showNames()              // 恢复显示所有名称标签
__office.setName(name, text)      // 替换为自定义文本（HTML 覆盖层）
__office.setName(name, text, { fontSize: '14px', color: '#FFD700' })  // 带样式
__office.clearName(name)          // 移除自定义文本，恢复原始 PNG 标签
```

**说明**：默认名称标签是预渲染的 PNG 精灵图（`name_main.png` 等），内容固定为英文 type 名。`setName` 通过 HTML 覆盖层实现自定义文本显示，支持中文和任意样式。`hideNames` 可以完全隐藏标签。

### 行为动作

```js
__office.action(name, behavior, opts)  // 通用接口，触发指定行为

// 快捷方法
__office.sleep(name)            // 回到工位睡觉
__office.slacking(name)         // 回到工位摸鱼（假装工作）
__office.treadmill(name)        // 走到跑步机跑步
__office.toilet(name)           // 走到马桶
__office.talk(name, target)     // 走到 target 旁边对话
__office.leave(name)            // 离场（走向出口，变为 OFFSTAGE）
__office.enter(name)            // 入场（从 OFFSTAGE 回到工位，播放 fall_down 动画）
__office.cheer(name)            // 播放庆祝动画
```

**说明**：行为动作会自动清理 agent 当前的 idle 状态并接管控制。每个行为包含完整的寻路、动画、状态转换逻辑。`treadmill` 和 `toilet` 有资源互斥（各只有 1 个位置），如果已被占用则行为会自动取消。

### 自主行为控制

```js
__office.pauseIdle()    // 暂停自主空闲决策（所有 agent 停止随机行为）
__office.resumeIdle()   // 恢复自主空闲决策
```

### 定时器清理

```js
__office.clearTimers()  // 清除残留的后台 setInterval（返回清除数量）
```

### 原始引用

```js
__office.scene   // PixiJS 场景对象
__office.game    // 游戏引擎对象
```

## `window.__chat` API

Store 就绪后自动挂载，提供 Token 消耗和对话数据访问。

### Token 消耗

```js
__chat.tokens()
// → { tokenMap: {id: totalTokens, ...}, tokenSavedMap: {id: savedTokens, ...}, wallet: {...} }

__chat.tokenFor(conversationId)
// → { total: number, saved: number }

__chat.wallet()
// → { uid, totalTokens, usedTokens, frozenTokens, remainingTokens, totalCost, status, savedTokens }
//    如果未拉取过则为 null
```

### 会话列表

```js
__chat.sessions()
// → [{id, title, status, createdAt, updatedAt, messageCount, lastMessagePreview}, ...]

__chat.sessionPagination()
// → { hasMore: bool, nextCursor, total }
```

### 对话详情

```js
__chat.conversationIds()
// → ['conv-id-1', 'conv-id-2', ...]  当前已加载的对话 ID

__chat.conversation(id)
// → { messages: [...], isRunning: bool, isHistoryLoaded: bool, hasMoreHistory: bool }
//    未加载则返回 null
```

### 数据拉取（异步）

```js
__chat.fetchAllTokenUsage()          // 批量拉取所有会话的 Token 消耗
__chat.fetchTokenUsage(id)           // 拉取单个会话的 Token 消耗
__chat.fetchWallet()                 // 拉取 Token 钱包余额
__chat.fetchSessionList(updatedAfter) // 拉取会话列表（可选时间戳过滤）
__chat.ensureConversation(id)        // 确保对话实例存在
__chat.loadHistory(id, limit)        // 加载对话历史消息（默认 50 条）
```

### 订阅变更

```js
var unsub = __chat.subscribe(function(state) {
  console.log('store changed', state.sessionList.tokenMap);
});
// 调用 unsub() 取消订阅
```

### 原始引用

```js
__chat.store   // Zustand store 对象（可调用 getState/subscribe/setState）
```

## Agent 随机行为逻辑分析

Agent 的空闲行为由 `IdleDecision` 系统控制，核心逻辑：

### 决策触发时机

1. **任务完成时** — Agent 完成所有任务后，播放 cheer 动画，然后进入 idle 决策
2. **行为时间到期** — 每个行为持续 **180 秒**（`Bv = 180`），到期后重新决策
3. **延迟初始决策** — Agent 初始化后等待 5 秒再触发第一次决策

### 决策流程（`runDecision`）

```
1. 检查前置条件（canRunDecision）:
   - 不在 talk 锁定中
   - 状态必须是 IDLE
   - 没有正在执行的任务

2. 检查 localStorage 调试覆盖:
   - 键名: workbench-decision-{agentType}
   - 可设为: enterSleep / enterSlacking / enterTalk / enterTreadmill / enterToilet / exitAction

3. 50% 概率离场判断:
   - 如果当前在场 agent > 3，有 50% 概率直接离场（LEAVING）
   - 如果在场 ≤ 3，跳过离场，保证场景不空

4. 构建候选行为列表（buildCandidates）:
   - "sleep"     — 如果没有其他 agent 已在 SLEEPING
   - "slacking"  — 如果没有其他 agent 已在 SLACKING/PRETEND_WORKING
   - "talk"      — 如果有可交谈的目标（IDLE 状态、在工位上、不在 talk 中）
   - "treadmill" — 如果跑步机没人占用
   - "toilet"    — 如果马桶没人占用

5. 从候选中排除上一次的行为，随机选一个
   - 如果没有可用候选，直接离场

6. 执行选中的行为
```

### 各行为详情

| 行为 | 动画 | 位置 | 互斥 |
|------|------|------|------|
| sleep | `sleeping` | 回到自己工位 | 全场同时只有 1 个 |
| slacking | `working`（假装工作） | 回到自己工位 | 全场同时只有 1 个 |
| treadmill | `running_treadmill` | 走到跑步机位置 | 物理占用（1个位置） |
| toilet | `pooping` | 走到马桶位置 | 物理占用（1个位置） |
| talk | `talking_on_stand` + `talking_on_seat` | 发起者走到目标旁 | 成对，含气泡对话 |
| leaving | `leaving` | 走向出口并消失 | 无 |

### Talk 对话子系统

- 发起者走到目标 agent 工位旁，面对面站立
- 双方分别播放 `talking_on_stand`（站立者）和 `talking_on_seat`（坐着者）
- 对话内容从预设队列中随机打乱取出
- 对话以固定轮次（step）推进，到 3 分钟自动结束
- 结束后双方各自触发新的 `runDecision`

### 离场与重新入场

- 离场时 agent 沿路径走向出口，到达后设为 `OFFSTAGE`（不可见）
- 可通过 `setState` API 强制将 OFFSTAGE 的 agent 传送回工位并设为可见

## 可用动画列表

standby, working, sleeping, slacking, pooping, running_treadmill, talking_on_seat, talking_on_stand, salute, cheer1_main, cheer1_sub, cheer2_sub, drink_coffee, fall_down, leaving, off_chair, walking_h, walking_up, fc_screen_working_main, fc_screen_working_search_or_browser_use, fc_screen_playing1, fc_screen_playing2, fc_pooping, fc_coffee, fc_ticket, fc_sigh, fc_high_press, fc_leaving, fc_walking_h

每种动画有 `@1x` / `@2x` 分辨率和 `_scarf` 变体。

## 状态机

```
StateCategory: DISPATCHING | GO_BACK | TASK_EXECUTING | IDLE | FINISH | STOP | LEAVING | OFFSTAGE

SubState: DISPATCHING | WORKING | STANDBY | SLACKING | SLEEPING | POOPING |
          RUNNING_TREADMILL | TALKING | ENTERING | LEAVING | OFFSTAGE | TASK_COMPLETE | PRETEND_WORKING
```

## 调试技巧

```js
// 强制某个 agent 的下次决策结果
localStorage.setItem('workbench-decision-App Agent', 'enterSleep')
// 可选值: enterSleep, enterSlacking, enterTalk, enterTreadmill, enterToilet, exitAction

// 暂停所有自主行为后手动控制
__office.pauseIdle()
__office.setState('Marvis', 'WORKING')
__office.speak('Marvis', '正在分析代码...', 5000)

// 清除后台定时器减少 CPU 占用
__office.clearTimers()
```

## 目录结构

```
marvis_office/
├── index.html              # 入口页面
├── bypass.js               # 环境模拟 + Agent 控制 API
├── server.py               # 静态文件服务器 (port 5175)
├── ARCHITECTURE.md         # 架构详细分析
├── assets/                 # JS/CSS/字体/图标
│   ├── index-wSLjxAso.js   # 主 bundle（~13MB，已精简）
│   ├── index-DLJb5NgS.css  # CSS（2.4MB）
│   ├── index-CvPpuPlD.js   # 懒加载模块（已清空，office 模式不需要）
│   ├── react-vendor-*.js   # React 运行时
│   ├── utils-vendor-*.js   # Zustand/Immer/Axios
│   └── [PixiJS chunks]     # 按需加载的渲染器模块
└── workbench/              # PixiJS 办公室资源
    ├── assets/
    │   ├── manifest.json   # 资源清单
    │   ├── office.tmj      # Tiled 地图
    │   ├── img/            # 场景图
    │   └── spritesheet/agent/ # Agent 动画精灵表
    └── transcoders/ktx/    # KTX2 纹理解码器 WASM
```
