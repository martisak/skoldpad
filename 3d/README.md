# 3D models

Referenced by `(model ...)` entries in `ergogen/kicad/skoldpad.kicad_pcb` via
`${KIPRJMOD}/../../3d/`. Ergogen's footprint generators don't attach these (the
choc switch/socket/keycap models are per-instance overrides added directly in
the board file; `mcu_nice_nano.js` supports a `mcu_3dmodel_filename` param but
it isn't set in `config.yaml`, so this MCU model is also a per-instance override).

| File | Part | Source | License |
|---|---|---|---|
| `SW_Kailh_Choc_V1.stp` | Kailh Choc v1 (PG1350) switch | [kiswitch/kiswitch](https://github.com/kiswitch/kiswitch) | MIT / CC-BY-SA (dual) |
| `SW_Hotswap_Kailh_Choc_v1.stp` | Kailh Choc v1 hotswap socket | [kiswitch/kiswitch](https://github.com/kiswitch/kiswitch) | MIT / CC-BY-SA (dual) |
| `MBK-1u.step` | MBK profile 1u keycap | [namnlos-io/choc_keycaps](https://github.com/namnlos-io/choc_keycaps), MBK folder, by Max Burger | CC BY-NC 4.0 |
| `MBK_Keycap_-_1.5u.step` | MBK profile 1.5u keycap | [namnlos-io/choc_keycaps](https://github.com/namnlos-io/choc_keycaps), MBK folder, by Max Burger | CC BY-NC 4.0 |
| `nice!nano v2.step` | nice!nano v2 MCU | [GrabCAD: nice!nano v2](https://grabcad.com/library/nice-nano-v2-1) | check GrabCAD page for terms before redistributing |

The choc/hotswap/keycap filenames match what the hand-routed board already
referenced (as absolute paths on another machine, `/Users/eisamar/devel/...`)
before this fix — same model family, just relocated under the repo and made
portable via `${KIPRJMOD}`.
