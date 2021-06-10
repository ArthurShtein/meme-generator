

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
        var lines = getCurrLine()

        lines.forEach((line) => {
            drawText(line.txt , line.posY ,line.size , line.align)
        })
    }
}

function drawText(txt, y , size , align) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = `${size}px Impact`
    gCtx.textAlign = align

    x = gElCanvas.width / 2;

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
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
    elEditor = document.querySelector('.meme-container')
    elEditor.style.display = 'flex'

    elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'none'
    gMeme.selectedImgId = id
    renderCanvas()
}

function onChangeAlign(val) {
    changeAlign(val)
    renderCanvas()
}
function onSwitchLine() {
    switchLine()
}

function onMoveTxt(diff) {
    moveTxt(diff)
    renderCanvas()
}

function onChangeSize(diff) {
    changeSize(diff)
    renderCanvas()
}

function showGallery() {
    elEditor = document.querySelector('.meme-container')
    elEditor.style.display = 'none'

    elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'block'
}

function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}