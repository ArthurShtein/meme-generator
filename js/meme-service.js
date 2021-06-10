
'use strict';

var gElCanvas
var gCtx;

var gImgs = [
    { id: 1, url: 'img/1.jpg' },
    { id: 2, url: 'img/2.jpg' },
    { id: 3, url: 'img/3.jpg' },
    { id: 4, url: 'img/4.jpg' },
    { id: 5, url: 'img/5.jpg' },
    { id: 6, url: 'img/6.jpg' },
    { id: 7, url: 'img/7.jpg' },
    { id: 8, url: 'img/8.jpg' },
    { id: 9, url: 'img/9.jpg' },
    { id: 10, url: 'img/10.jpg' },
    { id: 11, url: 'img/11.jpg' },
    { id: 12, url: 'img/12.jpg' },
    { id: 13, url: 'img/13.jpg' },
    { id: 14, url: 'img/14.jpg' },
    { id: 15, url: 'img/15.jpg' },
    { id: 16, url: 'img/16.jpg' },
    { id: 17, url: 'img/17.jpg' },
    { id: 18, url: 'img/18.jpg' },
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Text Line 1 ',
            size: 40,
            align: 'center',
            color: 'white',
            posY: 50
        },
        {
            txt: 'Text Line 2 ',
            size: 40,
            align: 'center',
            color: 'white',
            posY: 350
        }
    ]
}

function switchLine() {
    if (gMeme.selectedLineIdx === 0) {
        gMeme.selectedLineIdx += 1
    } else {
        gMeme.selectedLineIdx = 0
    }

    console.log(gMeme.selectedLineIdx)

}

function getText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    renderCanvas()
}

function changeSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function moveTxt(diff) {
    gMeme.lines[gMeme.selectedLineIdx].posY += diff
}

function getCurrLine() {
    return gMeme.lines
}

function getSelectedLine() {
    return gMeme.lines[gMeme.selectedLineIdx]
}


function getTxt(){
    gMeme.lines[gMeme.selectedLineIdx].txt
}

function changeAlign(val){
    gMeme.lines[gMeme.selectedLineIdx].align = val
}