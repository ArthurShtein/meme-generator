function init() {
    gElCanvas = document.getElementById('img-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderGallery()
}

function renderCanvas() {
    var img = new Image()
    img.src = gImgs[gMeme.selectedImgId - 1].url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        var lines = getCurrLine()

        lines.forEach((line) => {
            onFocusLine()
            drawText(line.txt, line.posY, line.size, line.align, line.font, line.color)
        })
    }
}

function drawText(txt, y, size, align, font, color) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = `${color}`
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = align

    x = gElCanvas.width / 2;

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}

function renderGallery() {
    let elGallery = document.querySelector('.gallery-container')
    let strHTML = ``
    gImgs.forEach(img => {
        strHTML += `<img id=${img.id} class="img-card" onclick="onImgPick(${img.id})" src="img/${img.id}.jpg">`
    });
    elGallery.innerHTML = strHTML
}

function onDeleteLine() {
    deleteLine()
    renderCanvas()
}

function onImgPick(id) {
    elEditor = document.querySelector('.meme-container')
    elEditor.style.display = 'flex'

    elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'none'

    elGalleryDetails = document.querySelector('.gallery-details')
    elGalleryDetails.style.display = 'none'

    gMeme.selectedImgId = id
    renderCanvas()
}

function onSearchTxt(val) {
    val = val.toLowerCase()
    var elImgCards = document.querySelectorAll('.img-card')
    for (var i = 0; i < elImgCards.length; i++) {
        var img = elImgCards[i]
        img.setAttribute('hidden', true)
    }
    var filteredImgs = searchTxt(val);
    for (var i = 0; i < filteredImgs.length; i++) {
        var img = filteredImgs[i]
        var elFiltered = document.getElementById(img.id)
        elFiltered.removeAttribute('hidden')
    }
}

function onAddNewLine() {
    addNewLine();
    renderCanvas();
}

function onChangeAlign(val) {
    changeAlign(val);
    renderCanvas();
}


function onSwitchLine() {
    switchLine();
    var elInput = document.querySelector('.txtinput');
    elInput.value = (getTxt()) ? getTxt() : '';
    onFocusLine();
    renderCanvas();
}

function onFocusLine() {

    var currLine = gMeme.lines[gMeme.selectedLineIdx];
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.strokeRect(gElCanvas.width / 17, currLine.posY - 45, 330, 60);

}

function onMoveTxt(diff) {
    moveTxt(diff)
    renderCanvas()
}

function onChangeSize(diff) {
    changeSize(diff)
    renderCanvas()
}

function onSelectFont(val) {
    console.log(val);
    selectFont(val)
    renderCanvas()
}
function onSetColor(val) {
    setColor(val)
    renderCanvas()
}

function showGallery() {
    elEditor = document.querySelector('.meme-container')
    elEditor.style.display = 'none'


    elGalleryDetails = document.querySelector('.gallery-details')
    elGalleryDetails.style.display = 'block'

    elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'grid'
}

function downloadImg(elLink) {
    var imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}
