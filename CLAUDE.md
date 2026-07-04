# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Sköldpad 1.1 is a split, columnar-staggered mechanical keyboard hardware design: a nice!nano
(nRF52840) MCU, a rotary encoder, Kailh Choc switches, laid out with
[ergogen](https://github.com/ergogen/ergogen) and hand-routed in KiCad. The 3D-printed case is
designed separately in Shapr3D and exported as STL. Firmware (ZMK) lives in a separate repo,
`martisak/zmk-config` — this repo is hardware only (layout, PCB, case, BOM).

## Commands

```bash
npm i                  # install ergogen + tooling
npm run ergogen:build  # runs ergogen, writes outlines/case/PCB skeleton to ergogen/output/
npm run ergogen:watch  # re-runs ergogen:build on changes to config.yaml or footprints/
```

There is no lint/test suite — correctness is validated by running `ergogen:build` without
errors and by opening the KiCad project to check the routed board still matches the generated
footprint placement.

## Architecture

**Source of truth is `ergogen/config.yaml`.** It defines the physical layout in three
sections that all reference each other:

- `points.zones` — key positions per zone (`main` for the columnar-staggered main keys,
  `control`/thumb cluster, etc.), using stagger/spread/spacing expressed in `units` (kx/ky
  etc., defined at the top of the file). Each key's `col_net`/`row_net` sets its matrix
  position for the diode matrix.
- `outlines` — case/plate outlines derived from the `points`.
- `pcbs` — footprint placement (nice!nano, diodes, hotswap sockets, encoder, JST connector)
  bound to the `points` defined above, using the custom footprints in `ergogen/footprints/`.

Running `ergogen:build` regenerates everything under `ergogen/output/` (gitignored) from this
one file — outlines, case JSCAD, and a PCB skeleton. **The hand-routed board is not
regenerated**: `ergogen/kicad/skoldpad.kicad_pcb` is maintained separately in KiCad and only
needs its footprint *placement* re-synced from `ergogen/output/pcbs/` when `config.yaml`
changes key positions; routing (traces) must be redone by hand in KiCad after any resync.

Custom KiCad footprints not available upstream live in
`ergogen/kicad/Skoldpad.pretty/` (referenced via `ergogen/kicad/fp-lib-table`).

**Design is split across three files/tools that must stay in sync when the layout changes:**
`ergogen/config.yaml` (layout/matrix) → `ergogen/kicad/skoldpad.kicad_pcb` (routed board, KiCad)
→ Shapr3D case model (linked from README, not stored in-repo — only exported STLs in `case/`
are checked in). Changing key positions in `config.yaml` means re-syncing footprint placement
in KiCad and re-checking case clearance in Shapr3D by hand.

The PCB is designed once and fabricated twice (normal + mirrored) to produce a left/right pair
— the BOM in README.md is quantities *per half*.

## Licensing split

Code (footprint generator scripts in `ergogen/footprints/`, build tooling) is MIT
(`LICENSE`). The hardware design itself — ergogen layout, PCB/schematic, 3D model, case,
renders in `images/` — is CERN-OHL-P v2 (`LICENSE-HARDWARE`). Keep new files in the
correct category when adding license headers or discussing reuse.
