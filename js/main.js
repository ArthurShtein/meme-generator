

function init() {
    gElCanvas = document.getElementById('img-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderGallery()
}

function renderCanvas() {
    var img = new Image()
    img.src = gImgs[gMeme.selectedImgId - 1].url; 
    img.onload = () => {
        gCtx.drawImage(img, 0,0, gElCanvas.width, gElCanvas.height)
        gMeme.lines.forEach((idx) => {
            drawText(idx)
        })
    }
}

function renderGallery() {
    let elGallery = document.querySelector('.gallery-grid')
    let strHTML = ``
    gImgs.forEach(img => {
        strHTML += `<img class="img-card" onclick="onImgPick(${img.id})" src="img/${img.id}.jpg">`
    });
    elGallery.innerHTML = strHTML
}

function onImgPick(id) {
    elEditor = document.querySelector('.editor-container')
    elEditor.style.display = 'flex'

    elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'none'
    gMeme.selectedImgId = id
    renderCanvas()

}

function onChangeSize(diff) {
    changeSize(diff)
}

function onNewLine() {
    newMemeLine()
}