# Sköldpad 1.0

<p align="center">
    <img src="./images/logo.png" width="160">
</p>

A split, columnar-staggered keyboard built around a
[nice!nano](https://nicekeyboards.com/nice-nano/) MCU with a rotary encoder, laid out with
[ergogen](https://github.com/ergogen/ergogen) and routed in KiCad. It's based on/inspired by
[josukey](https://github.com/Narkoleptika/josukey) (MIT licensed), an ergogen-based Corne clone.

Firmware ([ZMK](https://zmk.dev/), with a custom keymap tuned for Swedish input and coding
symbols) lives in its own repo: **[martisak/zmk-config](https://github.com/martisak/zmk-config)**.

## Renders

<p align="center">
    <img src="./images/top.png" width="49%">
    <img src="./images/bottom.png" width="49%">
</p>
<p align="center">
    <img src="./images/shield.png" width="49%">
    <img src="./images/tank.png" width="49%">
</p>

## Prerequisites

* Node
* KiCad (to open/edit the PCB)

## Getting Started

```bash
git clone https://github.com/martisak/skoldpad.git
cd skoldpad
npm i
```

## Ergogen

The layout lives in `ergogen/config.yaml`.

### Build

Runs Ergogen and builds all of the output files (outlines, case, PCB skeleton) into `ergogen/output`.

```bash
npm run ergogen:build
```

### Watch

Watches `config.yaml` and the `footprints` directory and re-runs the build on changes.

```bash
npm run ergogen:watch
```

## KiCad

The hand-routed PCB lives at [`ergogen/kicad/skoldpad.kicad_pcb`](./ergogen/kicad/skoldpad.kicad_pcb)
(along with the schematic, 3D step model, and the custom `Signature.pretty` footprint library it
depends on) — open `ergogen/kicad/skoldpad.kicad_pro` in KiCad.

<p align="center">
    <img src="./images/schematic.png" width="100%">
</p>

## Firmware

Firmware and keymap are maintained separately at
[martisak/zmk-config](https://github.com/martisak/zmk-config):

```bash
git clone git@github.com:martisak/zmk-config.git
```

It's a [nice!nano](https://nicekeyboards.com/nice-nano/) ZMK build with its own keymap (not
based on Miryoku), tuned for the macOS Swedish layout — base layer plus NUM, FUNC, and
directional layers. Builds run in GitHub Actions on every push; grab the `.uf2` artifacts from
the latest successful run.

The PCB footprints support a [nice!view](https://nicekeyboards.com/nice-view) display — this
should work but hasn't been tested yet.

## Case

<p align="center">
    <img src="./images/case.png" width="60%">
</p>

The case is designed in [Shapr3D](https://app.shapr3d.com/p/ba8f4a1e-6f99-4bed-8f1e-6df41bfcee0b)
(viewable in 3D at that link) and 3D printed. STL files for both halves (top and bottom shells)
are in [`case/`](./case):

* [`case/left.stl`](./case/left.stl) / [`case/left_top.stl`](./case/left_top.stl)
* [`case/right.stl`](./case/right.stl) / [`case/right_top.stl`](./case/right_top.stl)

## Known Issues

* The two thumb keys should be rotated to accept a 1.5u keycap, as shown in the renders.
* nice!view support is untested — should work per the footprint, but not confirmed on hardware.

## Future Work

* Move to Choc v2 switches — currently on v1, which has a smaller center post than v2.
* Test compatibility with full-size MX switches.
* Test nice!view once one arrives (currently on order).

## License

Code (footprint generator scripts, build tooling) is [MIT](./LICENSE). The
hardware design (PCB, schematic, case, and ergogen layout) is
[CERN-OHL-P v2](./LICENSE-HARDWARE).

## Thanks

* <a href="https://github.com/ergogen/ergogen" target="_blank">Ergogen</a>
* <a href="https://discord.gg/nbKcAZB" target="_blank">Absolem Club Discord</a>
* <a href="https://github.com/tsteffek/Ergogen-V4-Migration-Guide" target="_blank">V4 Migration Guide</a>
* <a href="https://gitlab.com/Audijo/keyboard" target="_blank">Claw</a>
* <a href="https://github.com/MrCarney/mrkeyboard" target="_blank">MrKeyboard</a>
* <a href="https://github.com/foostan/crkbd" target="_blank">Corne keyboard</a>
* <a href="https://www.youtube.com/watch?v=dg2TT1OJlQs" target="_blank">Ben Vallack</a>
* <a href="https://github.com/zmkfirmware/zmk" target="_blank">ZMK</a>
* <a href="https://github.com/Narkoleptika/josukey" target="_blank">josukey</a> — the base this board started from
* <a href="https://sv.wikipedia.org/wiki/V%C3%A4sterg%C3%B6tlands_landskapsvapen" target="_blank">Västergötlands landskapsvapen</a> — inspiration for the logo
