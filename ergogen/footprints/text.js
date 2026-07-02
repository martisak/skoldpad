module.exports = {
    params: {
        designator: 'X',
        text: '',
        side: 'F',
        knockout: false,
        fontsize: 0.8,
        font: "Chakra Petch SemiBold"
    },
    body: p => `
        (module lib:text (layer F.Cu) (tedit 648E0265)

        ${p.at /* parametric position */}

        (fp_text user "${p.text}" (at 0 0 ${p.rot + 90}) (layer ${p.side}.Cu ${p.knockout ? "knockout" : ""}) (effects (font face "${p.font}") (size ${p.fontsize} ${p.fontsize}) (thickness 0.15)) ${p.side === 'F' ? "" : "(justify mirror)"} ))
        (fp_text user "${p.text}" (at 0 0 ${p.rot + 90}) (layer ${p.side}.Mask ${p.knockout ? "knockout" : ""}) (effects (font face "${p.font}") (size ${p.fontsize} ${p.fontsize}) (thickness 0.15)) ${p.side === 'F' ? "" : "(justify mirror)"} ))
        )
        `

}

