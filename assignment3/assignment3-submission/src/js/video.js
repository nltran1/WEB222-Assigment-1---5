// Data for the "HTML Video" Page

var video = {
    controls: true,
    width: 320,
    height: 240,
    source: [
        {
            src:
                'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4',
            type: 'video/mp4'
        },
        {
            src:
                'https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg',
            type: 'video/ogg'
        }
    ]
};

window.onload = function() {
    var display =
        '<video width="' +
        video.width +
        '"' +
        '<height="' +
        video.height +
        '" controls>';

    for (var j = 0; j < video.source.length; j++) {
        display +=
            '<source src="' +
            video.source[j].src +
            '"' +
            'type="' +
            video.source[j].type +
            '">';
    }

    display += '</video>';
    document.querySelector('#video').innerHTML = display;
};
