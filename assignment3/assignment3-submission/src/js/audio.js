// Data for the "HTML Audio" Page

var audio = {
    controls: true,
    source: [
        {
            src:
                'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3',
            type: 'audio/mpeg'
        },
        {
            src:
                'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg',
            type: 'audio/ogg'
        }
    ]
};

window.onload = function() {
    var display = '<audio controls>';

    for (var j = 0; j < audio.source.length; j++) {
        display +=
            '<source src="' +
            audio.source[j].src +
            '"' +
            'type="' +
            audio.source[j].type +
            '">';
    }

    display += '</audio>';
    document.querySelector('#audio').innerHTML = display;
};
