import os
import math
from PIL import Image, ImageDraw, ImageFilter
import pymupdf

def create_kenya_icons():
    # 1. Render raw SVG flag at very high resolution
    svg_path = "kenyahub/public/kenya-flag.svg"
    doc = pymupdf.open(svg_path)
    flag_pix = doc[0].get_pixmap(dpi=400)
    flag_raw = Image.frombytes("RGB", [flag_pix.width, flag_pix.height], flag_pix.samples)

    # 2. Save optimized crisp in-app flag asset
    flag_app = flag_raw.resize((360, 240), Image.Resampling.LANCZOS)
    os.makedirs("mobile/assets", exist_ok=True)
    flag_app.save("mobile/assets/kenya-flag.png", "PNG", optimize=True)
    print("Created mobile/assets/kenya-flag.png (360x240)")

    # 3. Helper to create rounded rectangle flag with shadow
    def get_flag_element(w, h, corner_radius):
        flag_scaled = flag_raw.resize((w, h), Image.Resampling.LANCZOS).convert("RGBA")
        
        # Round corners mask
        mask = Image.new("L", (w, h), 0)
        draw = ImageDraw.Draw(mask)
        draw.rounded_rectangle([0, 0, w, h], radius=corner_radius, fill=255)
        
        flag_rounded = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        flag_rounded.paste(flag_scaled, (0, 0), mask)
        return flag_rounded

    # 4. Generate master 1024x1024 icon
    master_size = 1024
    master_im = Image.new("RGBA", (master_size, master_size), (20, 18, 16, 255))
    draw_master = ImageDraw.Draw(master_im)

    # Subtle radial gradient for obsidian background
    center = master_size / 2
    for r in range(int(master_size * 0.7), 0, -5):
        alpha = int(15 * (1 - r / (master_size * 0.7)))
        draw_master.ellipse([center - r, center - r, center + r, center + r], fill=(200, 150, 30, alpha))

    # Glowing aura ring (Kenya Green -> Gold -> Kenya Red)
    aura_radius = int(master_size * 0.38)
    aura_im = Image.new("RGBA", (master_size, master_size), (0, 0, 0, 0))
    aura_draw = ImageDraw.Draw(aura_im)
    
    # Outer glow ring with gradient approximation
    steps = 180
    for i in range(steps):
        angle_start = i * (360 / steps)
        angle_end = (i + 1.5) * (360 / steps)
        # Interpolate color: Green (0-120), Gold (120-240), Red (240-360)
        t = i / steps
        if t < 0.33:
            col = (0, 107, 63, 160) # Kenya green
        elif t < 0.66:
            col = (200, 150, 30, 200) # Gold
        else:
            col = (190, 33, 38, 160) # Kenya red
            
        aura_draw.arc(
            [center - aura_radius, center - aura_radius, center + aura_radius, center + aura_radius],
            start=angle_start,
            end=angle_end,
            fill=col,
            width=24
        )
    
    # Blur aura slightly for smooth glow
    aura_glow = aura_im.filter(ImageFilter.GaussianBlur(radius=8))
    master_im = Image.alpha_composite(master_im, aura_glow)
    master_im = Image.alpha_composite(master_im, aura_im)

    # Inner badge disk
    badge_radius = int(master_size * 0.35)
    badge_im = Image.new("RGBA", (master_size, master_size), (0, 0, 0, 0))
    badge_draw = ImageDraw.Draw(badge_im)
    badge_draw.ellipse(
        [center - badge_radius, center - badge_radius, center + badge_radius, center + badge_radius],
        fill=(12, 10, 8, 240),
        outline=(200, 150, 30, 100),
        width=4
    )
    master_im = Image.alpha_composite(master_im, badge_im)

    # Centered flag
    flag_w = int(master_size * 0.46)
    flag_h = int(flag_w * (2 / 3))
    flag_el = get_flag_element(flag_w, flag_h, corner_radius=16)

    # Shadow for flag
    shadow_pad = 20
    shadow = Image.new("RGBA", (flag_w + shadow_pad * 2, flag_h + shadow_pad * 2), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.rounded_rectangle([shadow_pad, shadow_pad + 8, flag_w + shadow_pad, flag_h + shadow_pad + 8], radius=16, fill=(0, 0, 0, 180))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=10))

    master_im.paste(shadow, (int(center - flag_w / 2 - shadow_pad), int(center - flag_h / 2 - shadow_pad)), shadow)
    master_im.paste(flag_el, (int(center - flag_w / 2), int(center - flag_h / 2)), flag_el)

    # Subtle inner border for flag
    flag_border = Image.new("RGBA", (master_size, master_size), (0, 0, 0, 0))
    fb_draw = ImageDraw.Draw(flag_border)
    fb_draw.rounded_rectangle(
        [center - flag_w / 2, center - flag_h / 2, center + flag_w / 2, center + flag_h / 2],
        radius=16,
        outline=(255, 255, 255, 60),
        width=2
    )
    master_im = Image.alpha_composite(master_im, flag_border)

    # Save master icon.png
    master_im.save("mobile/assets/icon.png", "PNG", optimize=True)
    print("Created mobile/assets/icon.png (1024x1024)")

    # 5. Generate Android densities
    densities = {
        "mdpi": {"legacy": 48, "foreground": 108},
        "hdpi": {"legacy": 72, "foreground": 162},
        "xhdpi": {"legacy": 96, "foreground": 216},
        "xxhdpi": {"legacy": 144, "foreground": 324},
        "xxxhdpi": {"legacy": 192, "foreground": 432},
    }

    # For adaptive foreground: transparent background, emblem within safe zone (~66% of canvas)
    # Master foreground at 1024x1024
    fg_master = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))
    # Scale emblem down so it sits comfortably in center 66% (radius ~ 280)
    scale_factor = 0.72
    emblem_w = int(master_size * scale_factor)
    emblem_h = int(master_size * scale_factor)
    # Crop emblem from master_im
    emblem_box = (
        int(center - aura_radius * 1.15),
        int(center - aura_radius * 1.15),
        int(center + aura_radius * 1.15),
        int(center + aura_radius * 1.15),
    )
    emblem_crop = master_im.crop(emblem_box)
    emblem_crop = emblem_crop.resize((int(1024 * 0.64), int(1024 * 0.64)), Image.Resampling.LANCZOS)
    
    fg_offset = int((1024 - emblem_crop.width) / 2)
    fg_master.paste(emblem_crop, (fg_offset, fg_offset), emblem_crop)

    for density, sizes in densities.items():
        dir_path = f"mobile/android/app/src/main/res/mipmap-{density}"
        os.makedirs(dir_path, exist_ok=True)

        # 1. ic_launcher.webp (legacy square)
        legacy_size = sizes["legacy"]
        legacy_im = master_im.resize((legacy_size, legacy_size), Image.Resampling.LANCZOS)
        legacy_im.save(os.path.join(dir_path, "ic_launcher.webp"), "WEBP", quality=95)

        # 2. ic_launcher_round.webp (legacy round)
        round_mask = Image.new("L", (legacy_size, legacy_size), 0)
        rm_draw = ImageDraw.Draw(round_mask)
        rm_draw.ellipse([0, 0, legacy_size, legacy_size], fill=255)
        round_im = Image.new("RGBA", (legacy_size, legacy_size), (0, 0, 0, 0))
        round_im.paste(legacy_im, (0, 0), round_mask)
        round_im.save(os.path.join(dir_path, "ic_launcher_round.webp"), "WEBP", quality=95)

        # 3. ic_launcher_foreground.webp (adaptive foreground)
        fg_size = sizes["foreground"]
        fg_im = fg_master.resize((fg_size, fg_size), Image.Resampling.LANCZOS)
        fg_im.save(os.path.join(dir_path, "ic_launcher_foreground.webp"), "WEBP", quality=95)

        print(f"Generated icons for {density}: legacy={legacy_size}x{legacy_size}, fg={fg_size}x{fg_size}")

    # 6. Generate splashscreen_logo.png for all drawable densities
    splash_densities = {
        "mdpi": 288,
        "hdpi": 432,
        "xhdpi": 576,
        "xxhdpi": 864,
        "xxxhdpi": 1152,
    }

    # Master splash graphic: transparent background with glowing emblem centered
    splash_master = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))
    # Resize emblem crop to 60% of canvas
    splash_emblem = emblem_crop.resize((int(1024 * 0.60), int(1024 * 0.60)), Image.Resampling.LANCZOS)
    s_offset = int((1024 - splash_emblem.width) / 2)
    splash_master.paste(splash_emblem, (s_offset, s_offset), splash_emblem)

    for density, sz in splash_densities.items():
        drawable_dir = f"mobile/android/app/src/main/res/drawable-{density}"
        os.makedirs(drawable_dir, exist_ok=True)
        splash_res = splash_master.resize((sz, sz), Image.Resampling.LANCZOS)
        splash_res.save(os.path.join(drawable_dir, "splashscreen_logo.png"), "PNG", optimize=True)
        print(f"Generated splashscreen_logo for {density}: {sz}x{sz}")

if __name__ == "__main__":
    create_kenya_icons()

