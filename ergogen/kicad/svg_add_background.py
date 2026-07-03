#!/usr/bin/env python3
"""Insert a solid background rect into a KiCad-exported SVG (which ships transparent)."""
import re
import sys


def main():
    if len(sys.argv) != 4:
        print(f"usage: {sys.argv[0]} <input.svg> <output.svg> <bg-color>", file=sys.stderr)
        sys.exit(1)
    src_path, dst_path, bg = sys.argv[1:4]

    src = open(src_path, encoding="utf-8").read()
    tag_end = src.index(">", src.index("<svg")) + 1
    head, rest = src[:tag_end], src[tag_end:]

    m = re.search(r'viewBox="[\d.]+ [\d.]+ ([\d.]+) ([\d.]+)"', head)
    if not m:
        raise SystemExit("no viewBox found in SVG")
    width, height = m.group(1), m.group(2)

    rect = f'<rect x="0" y="0" width="{width}" height="{height}" fill="{bg}" />\n'
    open(dst_path, "w", encoding="utf-8").write(head + rect + rest)


if __name__ == "__main__":
    main()
