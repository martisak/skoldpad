// Panasonic EVQWGD001 horizontal rotary encoder -- syntax-modernized copy
// of ergogen's own built-in scrollwheel footprint
// (node_modules/ergogen/src/footprints/scrollwheel.js). Geometry is
// byte-identical to the built-in; only the KiCad 6+ syntax changed
// (footprint keyword, quoted layers, stroke blocks, and the 4 edge-cut
// fp_arc entries converted from the legacy start/end/angle form to the
// modern 3-point start/mid/end form -- verified numerically for both
// the front (def_pos='', def_neg='-') and reversed (def_pos='-',
// def_neg='') instantiations: negating the X coordinate of every field,
// start/mid/end alike, exactly reproduces the reversed case, so a single
// ${def_pos} prefix on each X value covers both without needing a
// separate angle-sign parameter (3-point arcs don't have an angle field).
// Ergogen's local-footprint injection overwrites the built-in entry with
// this file by name, so config.yaml's `what: scrollwheel` picks this up
// automatically.
//
//   __________________
//  (f) (t)         | |
//  | (1)           | |
//  | (2)           | |
//  | (3)           | |
//  | (4)           | |
//  |_( )___________|_|
//
// Nets
//    from: corresponds to switch pin 1 (for button presses)
//    to: corresponds to switch pin 2 (for button presses)
//    A: corresponds to pin 1 (for rotary)
//    B: corresponds to pin 2 (for rotary, should be GND)
//    C: corresponds to pin 3 (for rotary)
//    D: corresponds to pin 4 (for rotary, unused)
// Params
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible


module.exports = {
    params: {
      designator: 'S',
		  reverse: false,
      from: undefined,
      to: undefined,
      A: undefined,
      B: undefined,
      C: undefined,
      D: undefined
    },
    body: p => {
      const standard = `
        (footprint "RollerEncoder_Panasonic_EVQWGD001" (layer "F.Cu")
        ${p.at /* parametric position */}
        (fp_text reference "REF**" (at 0 0 ${p.r}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))
        (fp_text value "RollerEncoder_Panasonic_EVQWGD001" (at -0.1 9 ${p.r}) (layer "F.Fab") (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* corner marks */}
        (fp_line (start -8.4 -6.4) (end 8.4 -6.4) (stroke (width 0.12) (type solid)) (layer "Dwgs.User"))
        (fp_line (start 8.4 -6.4) (end 8.4 7.4) (stroke (width 0.12) (type solid)) (layer "Dwgs.User"))
        (fp_line (start 8.4 7.4) (end -8.4 7.4) (stroke (width 0.12) (type solid)) (layer "Dwgs.User"))
        (fp_line (start -8.4 7.4) (end -8.4 -6.4) (stroke (width 0.12) (type solid)) (layer "Dwgs.User"))
      `
      function pins(def_neg, def_pos) {
        return `
          ${'' /* edge cuts */}
          (fp_line (start ${def_pos}9.8 7.3) (end ${def_pos}9.8 -6.3) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))
          (fp_line (start ${def_pos}7.4 -6.3) (end ${def_pos}7.4 7.3) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))
          (fp_line (start ${def_pos}9.5 -6.6) (end ${def_pos}7.7 -6.6) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))
          (fp_line (start ${def_pos}7.7 7.6) (end ${def_pos}9.5 7.6) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))
          (fp_arc (start ${def_pos}7.4 7.3) (mid ${def_pos}7.487867965644 7.512132034356) (end ${def_pos}7.7 7.6) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))
          (fp_arc (start ${def_pos}9.5 7.6) (mid ${def_pos}9.712132034356 7.512132034356) (end ${def_pos}9.8 7.3) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))
          (fp_arc (start ${def_pos}7.7 -6.6) (mid ${def_pos}7.487867965644 -6.512132034356) (end ${def_pos}7.4 -6.3) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))
          (fp_arc (start ${def_pos}9.8 -6.3) (mid ${def_pos}9.712132034356 -6.512132034356) (end ${def_pos}9.5 -6.6000000000000005) (stroke (width 0.15) (type solid)) (layer "Edge.Cuts"))

          ${'' /* pins */}
          (pad S1 thru_hole circle (at ${def_neg}6.85 -6.2 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers "*.Cu" "*.Mask") ${p.from})
          (pad S2 thru_hole circle (at ${def_neg}5 -6.2 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers "*.Cu" "*.Mask") ${p.to})
          (pad A thru_hole circle (at ${def_neg}5.625 -3.81 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers "*.Cu" "*.Mask") ${p.A})
          (pad B thru_hole circle (at ${def_neg}5.625 -1.27 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers "*.Cu" "*.Mask") ${p.B})
          (pad C thru_hole circle (at ${def_neg}5.625 1.27 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers "*.Cu" "*.Mask") ${p.C})
          (pad D thru_hole circle (at ${def_neg}5.625 3.81 ${p.r}) (size 1.6 1.6) (drill 0.9) (layers "*.Cu" "*.Mask") ${p.D})

          ${'' /* stabilizer */}
          (pad "" np_thru_hole circle (at ${def_neg}5.625 6.3 ${p.r}) (size 1.5 1.5) (drill 1.5) (layers "*.Cu" "*.Mask"))
        `
    }
    if(p.reverse) {
      return `
        ${standard}
        ${pins('-', '')}
        ${pins('', '-')})
        `
    } else {
      return `
        ${standard}
        ${pins('-', '')})
        `
    }
  }
}
