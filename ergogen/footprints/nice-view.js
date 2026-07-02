module.exports = {
    params: {
        designator: 'nice-view',
        side: 'F',
        fontsize: 0.8,
        font: "Chakra Petch SemiBold",
        MOSI: undefined,
        SCK: undefined,
        VCC: {type: 'net', value: 'VCC'},
        GND: {type: 'net', value: 'GND'},
        CS: undefined
    },
    body: p => `
        (module lib:OLED_headers (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 

        ${'' /* footprint reference */}        
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font face "${p.font}") (size ${p.fontsize} ${p.fontsize}) (thickness 0.15))))
        (fp_text value OLED (at 0 0) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))

        ${'' /* pins */}
        (pad MOSI thru_hole oval (at 1.6 2.18 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.MOSI.str})
        (pad SCK thru_hole oval (at 1.6 4.72 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.SCK.str})
        (pad VCC thru_hole oval (at 1.6 7.26 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.VCC.str})
        (pad GND thru_hole oval (at 1.6 9.8 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.GND.str})
        (pad CS thru_hole rect (at 1.6 12.34 ${p.rot+270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
        ${p.CS.str})
        (fp_poly (pts (xy 14.478 -5.08) (xy 13.462 -5.08) (xy 13.462 -6.096) (xy 14.478 -6.096)) (layer B.Mask) (width 0.1))
        (fp_poly (pts (xy 11.938 -5.08) (xy 10.922 -5.08) (xy 10.922 -6.096) (xy 11.938 -6.096)) (layer B.Mask) (width 0.1))
        )
        `
}