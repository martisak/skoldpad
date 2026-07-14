module.exports = {
    params: {
        designator: 'X',
        text: '',
        side: 'F',
        knockout: false,
        fontsize: 0.8,
        font: "Chakra Petch Medium"
    },
    body: p => `
        (footprint "lib:text"
        (layer "F.Cu")

        ${p.at /* parametric position */}

        (fp_text user "${p.text}" (at 0 0 ${p.r + 90}) (layer "${p.side}.Cu" ${p.knockout ? "knockout" : ""}) (effects (font face "${p.font}") (size ${p.fontsize} ${p.fontsize}) (thickness 0.15)) ${p.side === 'F' ? "" : "(justify mirror)"} ))
        (fp_text user "${p.text}" (at 0 0 ${p.r + 90}) (layer "${p.side}.Mask" ${p.knockout ? "knockout" : ""}) (effects (font face "${p.font}") (size ${p.fontsize} ${p.fontsize}) (thickness 0.15)) ${p.side === 'F' ? "" : "(justify mirror)"} ))
        )
        `

}

