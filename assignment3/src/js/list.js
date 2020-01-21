// Data for the "HTML Lists" Page

var fruits = ['Apples', 'Oranges', 'Pears', 'Grapes', 'Pineapples', 'Mangos'];

var directory = [
    { type: 'file', name: 'file1.txt' },
    { type: 'file', name: 'file2.txt' },
    {
        type: 'directory',
        name: 'HTML Files',
        files: [
            { type: 'file', name: 'file1.html' },
            { type: 'file', name: 'file2.html' }
        ]
    },
    { type: 'file', name: 'file3.txt' },
    {
        type: 'directory',
        name: 'JavaScript Files',
        files: [
            { type: 'file', name: 'file1.js' },
            { type: 'file', name: 'file2.js' },
            { type: 'file', name: 'file3.js' }
        ]
    }
];

window.onload = function() {
    var display = '<ol>';
    for (var k = 0; k < fruits.length; k++) {
        display += '<li>' + fruits[k] + '</li>';
    }
    display += '</ol>';
    this.document.querySelector('#fruits').innerHTML = display;

    var displaylist = '<ul>';

    for (var i = 0; i < directory.length; i++) {
        if (directory[i].type === 'directory') {
            displaylist += '<li>' + directory[i].name + '<ul>';
            for (var j = 0; j < directory[i].files.length; j++) {
                displaylist += '<li>' + directory[i].files[j].name + '</li>';
            }
            displaylist += '</ul></li>';
        } else displaylist += '<li>' + directory[i].name + '</li>';
    }
    displaylist += '</ul>';
    this.document.querySelector('#directory').innerHTML = displaylist;
};
