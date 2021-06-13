'use strict';

var gElCanvas
var gCtx;

var gImgs = [
    { id: 1, url: 'img/1.jpg', keyWords: ['trump']},
    { id: 2, url: 'img/2.jpg', keyWords: ['funny', 'animals','dog']},
    { id: 3, url: 'img/3.jpg',keyWords: ['funny', 'animals','dog']},
    { id: 4, url: 'img/4.jpg',keyWords: ['funny', 'animals','cat']},
    { id: 5, url: 'img/5.jpg' , keyWords: ['funny', 'kids']},
    { id: 6, url: 'img/6.jpg' ,keyWords: ['funny']},
    { id: 7, url: 'img/7.jpg' ,keyWords: ['funny', 'kids']},
    { id: 8, url: 'img/8.jpg' ,keyWords: ['funny']},
    { id: 9, url: 'img/9.jpg' ,keyWords: ['funny', 'kids']},
    { id: 10, url: 'img/10.jpg' ,keyWords: ['funny','obama']},
    { id: 11, url: 'img/11.jpg' ,keyWords: ['funny']},
    { id: 12, url: 'img/12.jpg' ,keyWords: ['funny']},
    { id: 13, url: 'img/13.jpg' ,keyWords: ['funny']},
    { id: 14, url: 'img/14.jpg' ,keyWords: ['funny']},
    { id: 15, url: 'img/15.jpg' ,keyWords: ['funny']},
    { id: 16, url: 'img/16.jpg' ,keyWords: ['funny']},
    { id: 17, url: 'img/17.jpg' ,keyWords: ['funny','putin']},
    { id: 18, url: 'img/18.jpg' ,keyWords: ['funny']},
];

var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Edit text',
            size: 40,
            align: 'center',
            font: 'Impact',
            color: 'white',
            posY: 50
        },
        {
            txt: 'Edit text',
            size: 40,
            align: 'center',
            font: 'Impact',
            color: 'white',
            posY: 350
        }
    ]
}

function searchTxt(val) {
    var filteredImg = gImgs.filter(img => {
        var str = img.keyWords + '';
        if (str.includes(val))
        return img;
    })
    return filteredImg;
}

function switchLine() {

    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    } else {
        gMeme.selectedLineIdx++
    }
}

function deleteLine(){
    var currLineIdx = gMeme.selectedLineIdx
    gMeme.lines.splice(currLineIdx, 1)
    
    if (gMeme.selectedLineIdx === 0) return;
    gMeme.selectedLineIdx--
}


function addNewLine() {
    var newLine = {
        txt: 'New line',
        size: 40,
        align: 'center',
        font: 'Impact',
        color: 'white',
        posY: 200
    }
    gMeme.lines.push(newLine)
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
    var txt = gMeme.lines[gMeme.selectedLineIdx].txt
    return txt;
}

function changeAlign(val){
    gMeme.lines[gMeme.selectedLineIdx].align = val
}

function selectFont(val) {
    gMeme.lines[gMeme.selectedLineIdx].font = val
}

function setColor(val){
    gMeme.lines[gMeme.selectedLineIdx].color = val
}