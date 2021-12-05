const container = document.querySelector('.container')
const content = document.querySelector('.content')
let contentTopBg = document.querySelectorAll('.content__top_bg')
const contentBotBg = document.querySelectorAll('.content__bottom_bg')
const carusel = document.querySelector('.carusel')
const btnNext = document.querySelector('.btn.next')
const btnPrev = document.querySelector('.btn.prev')


const slides = [{
    img: './Twinings_Assets/peppermint-product.png',
    contentBg: './Twinings_Assets/peppermint- BG.jpg',
},
{
    img: './Twinings_Assets/raspberry-product.png',
    contentBg: './Twinings_Assets/raspberry - BG.jpg',
},
{
    img: './Twinings_Assets/peach-product.png',
    contentBg: './Twinings_Assets/peach - BG.jpg',
}]

window.onload = function () {
    content.setAttribute('style', `background-image:  url("./Twinings_Assets/peppermint-\ BG.jpg");`)
    if ((window.innerWidth / window.innerHeight) <= 0.567) {
        container.setAttribute('style', `width:${window.innerWidth}px;height:${window.innerHeight}px`)
    }
    else { container.setAttribute('style', `width:${window.innerHeight * 0.567}px;height:${window.innerHeight}px`) }
}


let ofset = 0
let flag = true

function createCards() {
    let step = ofset;
    for (let i = 0; i <= 1; i++) {
        let div = document.createElement('div')
        div.classList.add('carusel__card');
        (i == 0) ? (step = (step + 1 == slides.length) ? 0 : step + 1, div.setAttribute('style', `background-image:url(${slides[step].img})`), step = (step + 1 == slides.length) ? 0 : step + 1) : div.setAttribute('style', `background-image:url(${slides[step].img});left:-60%`)
        carusel.appendChild(div)
    }
}
createCards()

function btnNextmove() {
    btnNext.removeEventListener('click', btnNextmove)
    carusel.removeEventListener('touchend', swipe)
    let prevIndex = ofset;
    ofset = (ofset + 1 == slides.length) ? 0 : ofset + 1;
    let caruselSlides = carusel.querySelectorAll('.carusel__card')
    caruselSlides[0].style.left = "-60%"
    caruselSlides[1].style.left = "21.5%"
    setTimeout(function () { carusel.removeChild(caruselSlides[0]), carusel.removeChild(caruselSlides[2]), btnNext.addEventListener('click', btnNextmove), carusel.addEventListener('touchend', swipe) }, 750)
    createCards()
    contentBotBg[prevIndex].classList.remove('active')
    contentBotBg[ofset].classList.add('active')
    content.setAttribute('style', `background-image:  url("${slides[ofset].contentBg}")`)
    loadTopBg("next")
    firstClick()
}

function btnPrevmove() {
    btnPrev.removeEventListener('click', btnPrevmove)
    carusel.removeEventListener('touchend', swipe)
    let prevIndex = ofset;
    ofset = (ofset - 1 < 0) ? slides.length - 1 : ofset - 1;
    let caruselSlides = carusel.querySelectorAll('.carusel__card')
    caruselSlides[2].style.left = "21.5%"
    caruselSlides[0].style.left = "105%"
    setTimeout(function () { carusel.removeChild(caruselSlides[0]), carusel.removeChild(caruselSlides[1]), btnPrev.addEventListener('click', btnPrevmove), carusel.addEventListener('touchend', swipe) }, 750)
    createCards()
    contentBotBg[prevIndex].classList.remove('active')
    contentBotBg[ofset].classList.add('active')
    content.setAttribute('style', `background-image:  url("${slides[ofset].contentBg}")`)
    loadTopBg("prev")
    firstClick()
}

btnNext.addEventListener('click', btnNextmove)
btnPrev.addEventListener('click', btnPrevmove)


let initialPoint = null;
let finalPoint = null;
carusel.addEventListener('touchstart', function (e) {
    e.preventDefault();
    e.stopPropagation();
    initialPoint = e.changedTouches[0];
});

let swipe = function (e) {
    e.preventDefault();
    e.stopPropagation();
    finalPoint = e.changedTouches[0];
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    if (xAbs > 20) {
        if (finalPoint.pageX > initialPoint.pageX) { btnPrevmove() }
        else { btnNextmove() }
    }
}

carusel.addEventListener('touchend', swipe)

function firstClick() {
    if (flag === true) {
        document.querySelector('.content__top_bg.load').style.opacity = "0"
    }
    flag = false;
}

function loadTopBg(move) {
    let ofsetNext = null
    let ofsetPrev = null
    if (move == "next") {
        ofsetNext = (ofset + 1 > contentTopBg.length - 1) ? 0 : ofset + 1;
        ofsetPrev = (ofset == 0) ? contentTopBg.length - 1 : ofset
    }
    if (move == "prev") {
        ofsetPrev = (ofset + 1 == contentTopBg.length - 1) ? 1 : ofset + 2
        ofsetNext = ofset + 1
    }
    contentTopBg[ofsetNext].classList.add('active')
    contentTopBg[ofsetPrev].classList.remove('active')
}