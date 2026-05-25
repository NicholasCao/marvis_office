#!/usr/bin/env python3
"""
向 agent spritesheet 新增自定义 name label（不破坏原有 frames）。

用法:
    python3 tools/gen_name_sprites.py

原理:
    读取现有 agent@2x.webp + JSON，在空白区域追加新 name frames，
    样式模仿原有标签：黑色粗体 + 白色描边，透明背景。

自定义:
    修改下方 NEW_NAMES 字典。key = 你要注册的 type 名，value = 显示文字。
"""

import json
import os
from PIL import Image, ImageDraw, ImageFont

# ============ 配置 ============

# 新增的 agent type → 显示名称
# key 会成为 spritesheet 里 "name_{key}.png" 的 frame 名
# 代码用 type 查找，所以 key 必须和 agent 的 type 一致
NEW_NAMES = {
    "main":               "Elon",
    "Marketing Agent":    "Mark",
    "Verify Agent":       "Turing",
    "Design Agent":       "Jobs",
    "KOL Agent":          "DaVinci",
    "Engineering Agent":  "Linux",
    "Monitoring Agent":   "Bezos",
}

# frame 画布大小（@2x 像素），与原有保持一致
FRAME_W = 224
FRAME_H = 36

# 字体
FONT_SIZE = 26
STROKE_WIDTH = 2  # 白色描边宽度

# 字体搜索（macOS 优先黑体）
FONT_PATHS = [
    "/System/Library/Fonts/STHeiti Medium.ttc",
    "/System/Library/Fonts/STHeiti Light.ttc",
    "/System/Library/Fonts/PingFang.ttc",
    "/Library/Fonts/Arial Unicode.ttf",
    "/usr/share/fonts/truetype/noto/NotoSansCJK-Bold.ttc",
]

# 路径
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
IMG_DIR = os.path.join(BASE_DIR, "..", "workbench", "assets", "img")

# ============ 逻辑 ============

def find_font():
    for p in FONT_PATHS:
        if os.path.exists(p):
            return ImageFont.truetype(p, FONT_SIZE)
    print("WARNING: 未找到中文粗体字体，使用默认")
    return ImageFont.load_default()


def render_label(text, font):
    """渲染白描边黑字标签，返回 (cropped_image, trim_x, trim_y)"""
    # 先画到 FRAME_W x FRAME_H 画布
    img = Image.new("RGBA", (FRAME_W, FRAME_H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # 测量文字
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (FRAME_W - tw) // 2
    y = (FRAME_H - th) // 2 - bbox[1]

    # 白色描边
    draw.text((x, y), text, font=font, fill=(0, 0, 0, 255),
              stroke_width=STROKE_WIDTH, stroke_fill=(255, 255, 255, 255))

    # 裁剪有效区域
    alpha = img.split()[3]
    content_bbox = alpha.getbbox()
    if not content_bbox:
        return img, 0, 0

    cropped = img.crop(content_bbox)
    return cropped, content_bbox[0], content_bbox[1]


def main():
    font = find_font()
    print(f"字体: {getattr(font, 'path', 'default')}")

    # 读取现有 spritesheet
    json_path = os.path.join(IMG_DIR, "agent@2x.webp.json")
    img_path = os.path.join(IMG_DIR, "agent@2x.webp")

    with open(json_path) as f:
        sheet_data = json.load(f)

    sheet_img = Image.open(img_path).convert("RGBA")
    sheet_w, sheet_h = sheet_img.size
    print(f"原 spritesheet: {sheet_w}x{sheet_h}, {len(sheet_data['frames'])} frames")

    # 删除之前生成的自定义 frames（以便用新参数重新生成）
    # 原始 frames 是 6 个内置 type 的，不动它们
    BUILTIN_NAMES = {"name_App Agent.png", "name_Browser Agent.png",
                     "name_Computer Agent.png", "name_File Agent.png", "name_Search Agent.png"}
    to_remove = [k for k in sheet_data["frames"] if k.startswith("name_") and k not in BUILTIN_NAMES]
    if to_remove:
        for k in to_remove:
            # 清除图片区域
            fr = sheet_data["frames"][k]["frame"]
            sheet_img.paste(Image.new("RGBA", (fr["w"], fr["h"]), (0,0,0,0)), (fr["x"], fr["y"]))
            del sheet_data["frames"][k]
        print(f"  已清除旧自定义 frames: {len(to_remove)} 个")

    # 找到空白起始位置（现有 frames 占用的最大 y+h）
    max_y = 0
    for fdata in sheet_data["frames"].values():
        fr = fdata["frame"]
        max_y = max(max_y, fr["y"] + fr["h"])

    # 新 frame 从 max_y + padding 开始
    PADDING = 4
    cur_x = PADDING
    cur_y = max_y + PADDING
    row_h = 0
    added = 0

    for type_key, display_text in NEW_NAMES.items():
        frame_key = f"name_{type_key}.png"

        cropped, trim_x, trim_y = render_label(display_text, font)
        cw, ch = cropped.size

        # 换行检查
        if cur_x + cw + PADDING > sheet_w:
            cur_x = PADDING
            cur_y += row_h + PADDING
            row_h = 0

        if cur_y + ch > sheet_h:
            print(f"  ERROR: spritesheet 空间不足，无法放置 {frame_key}")
            continue

        # 粘贴到 sheet
        sheet_img.paste(cropped, (cur_x, cur_y), cropped)

        # 记录 frame 元数据
        sheet_data["frames"][frame_key] = {
            "frame": {"x": cur_x, "y": cur_y, "w": cw, "h": ch},
            "rotated": False,
            "trimmed": True,
            "spriteSourceSize": {"x": trim_x, "y": trim_y, "w": cw, "h": ch},
            "sourceSize": {"w": FRAME_W, "h": FRAME_H},
        }

        print(f"  新增: {frame_key} ({display_text}) → {cw}x{ch} at ({cur_x},{cur_y})")
        cur_x += cw + PADDING
        row_h = max(row_h, ch)
        added += 1

    if added == 0:
        print("\n没有新增内容")
        return

    # 保存 @2x
    sheet_img.save(img_path, "WEBP", lossless=True)
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(sheet_data, f, ensure_ascii=False)
    print(f"\n已更新 @2x: {img_path} (+{added} frames)")

    # 同步生成 @1x
    gen_1x(sheet_img, sheet_data)

    print("\n完成！新 type 可直接使用。")


def gen_1x(sheet_2x, data_2x):
    """从 @2x 重新生成完整的 @1x 版本"""
    json_path_1x = os.path.join(IMG_DIR, "agent.webp.json")
    img_path_1x = os.path.join(IMG_DIR, "agent.webp")

    SHEET_1X_W = 2048
    SHEET_1X_H = 2048
    sheet_1x = Image.new("RGBA", (SHEET_1X_W, SHEET_1X_H), (0, 0, 0, 0))
    frames_1x = {}

    for fname, fdata in data_2x["frames"].items():
        fr = fdata["frame"]
        crop = sheet_2x.crop((fr["x"], fr["y"], fr["x"] + fr["w"], fr["y"] + fr["h"]))
        new_w = max(1, fr["w"] // 2)
        new_h = max(1, fr["h"] // 2)
        crop_1x = crop.resize((new_w, new_h), Image.LANCZOS)

        px = fr["x"] // 2
        py = fr["y"] // 2
        if px + new_w <= SHEET_1X_W and py + new_h <= SHEET_1X_H:
            sheet_1x.paste(crop_1x, (px, py), crop_1x)

        ss = fdata["spriteSourceSize"]
        src = fdata["sourceSize"]
        frames_1x[fname] = {
            "frame": {"x": px, "y": py, "w": new_w, "h": new_h},
            "rotated": fdata["rotated"],
            "trimmed": fdata["trimmed"],
            "spriteSourceSize": {"x": ss["x"] // 2, "y": ss["y"] // 2, "w": new_w, "h": new_h},
            "sourceSize": {"w": src["w"] // 2, "h": src["h"] // 2},
        }

    sheet_1x.save(img_path_1x, "WEBP", lossless=True)
    meta_1x = {
        "frames": frames_1x,
        "meta": {
            "app": "http://github.com/pixijs/assetpack",
            "version": "1.0",
            "image": "agent.webp",
            "format": "RGBA8888",
            "size": {"w": SHEET_1X_W, "h": SHEET_1X_H},
            "scale": 1,
            "related_multi_packs": [],
        },
    }
    with open(json_path_1x, "w", encoding="utf-8") as f:
        json.dump(meta_1x, f, ensure_ascii=False)
    print(f"已更新 @1x: {img_path_1x}")


if __name__ == "__main__":
    main()
