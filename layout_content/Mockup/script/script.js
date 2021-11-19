const content = document.querySelector('.content')
const contentTop = document.querySelector('.content__top')
const contentTopBg = document.querySelector('.content__top_bg')
const contentTopLabel = document.querySelector('.content__top_label')
const contentBotBg = document.querySelector('.content__bottom_bg')
const carusel = document.querySelector('.carusel')
const btnNext = document.querySelector('.btn.next')
const btnPrev = document.querySelector('.btn.prev')

window.onload = function () {
    content.setAttribute('style', 'background-image:  url("./Twinings_Assets/peppermint-\ BG.jpg");')
}

const slides = [{
    img: './Twinings_Assets/peppermint-product.png',
    header: './Twinings_Assets/upper tagline - 1.png',
    label: './Twinings_Assets/peppermint-newBanner.png',
    contentBg: './Twinings_Assets/peppermint- BG.jpg',
    bg: `<div class="img"
    style="background-image: url('./Twinings_Assets/pepermint\ -\ elements/strawberry-1.png');width:34%;height:34.21% ;top:3.7% ;left:-16.11%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/pepermint\ -\ elements/strawberry-2.png');width:40%;height:41%;top:4.54%;left:59.5%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/pepermint\ -\ elements/pepermint-1.png');width:51% ;height:47%;top:37.6%;left:2.3%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/pepermint\ -\ elements/seed-2.png');width:10% ; height:9.47%;top:36.96% ;right: -5%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/pepermint\ -\ elements/seed-1.png');width:11% ; height:9.5%;top:67.57% ;right: 9.3%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/pepermint\ -\ elements/pepermint-2.png');width:43%; height:30%;top:82%;right: -13%;">
</div>`,
},
{
    img: './Twinings_Assets/raspberry-product.png',
    header: './Twinings_Assets/raspberry - tagline.png',
    label: './Twinings_Assets/raspberry-new.png',
    contentBg: './Twinings_Assets/raspberry - BG.jpg',
    bg: `<div class="img"
    style="background-image: url('./Twinings_Assets/raspberry\ -\ elements/Raspberry 1.png');width:33%;height:45%;top:-11%;left:-10%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/raspberry\ -\ elements/petal - 2.png');width:20.3%;height:19.3%;top:9.2%;left:13.6%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/raspberry\ -\ elements/Raspberry 2.png');width:27%;height:40%;top:0%;left:54%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/raspberry\ -\ elements/petal - 3.png');width:26%;height:28%;top:0%;left:83%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/raspberry\ -\ elements/petal - 4.png');width:22%;height:24%;top:23.5%;left:-11%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/raspberry\ -\ elements/Raspberry 3.png');width:32%;height:46%;top:12%;left:62%;z-index: 1;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/raspberry\ -\ elements/petal - 5.png');width:22%;height:17.8%;top:42.8%;left:67%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/raspberry\ -\ elements/Lemon.png');width:55%;height:59.5%;top:41.4%;left:-6.8%;">
</div>`,
},
{
    img: './Twinings_Assets/peach-product.png',
    header: './Twinings_Assets/peach - tagline.png',
    label: './Twinings_Assets/peach-newBanner.png',
    contentBg: './Twinings_Assets/peach - BG.jpg',
    bg: `<div class="img"
    style="background-image: url('./Twinings_Assets/peach\ -\ elements/peach.png');width:32.5%;height:41.5%;top:-2.7%;left:57.2%;">
</div>
<div class="img"
    style="background-image: url('./Twinings_Assets/peach\ -\ elements/orange.png');width:46%;height:46.5%;top:42.5%;left:-2%;">
</div>`,
}]

let ofset = 0
let flag = true

function createCards() {
    console.log(ofset)
    let step = ofset;
    for (let i = 0; i <= 1; i++) {
        let div = document.createElement('div')
        div.classList.add('carusel__card')
        if (i == 0) {
            step = (step + 1 == slides.length) ? 0 : step + 1
            div.setAttribute('style', `background-image:url(${slides[step].img});`, step = (step + 1 == slides.length) ? 0 : step + 1)
        }
        else { div.setAttribute('style', `background-image:url(${slides[step].img});left:-65%`) }
        carusel.appendChild(div)
    }
}
createCards()

function btnNextmove() {
    ofset = (ofset + 1 == slides.length) ? 0 : ofset + 1;
    let caruselSlides = carusel.querySelectorAll('.carusel__card')
    caruselSlides[0].style.left = "-100%"
    caruselSlides[1].style.left = "21.5%"
    setTimeout(function () { carusel.removeChild(caruselSlides[0]), carusel.removeChild(caruselSlides[2]) }, 500)
    createCards()
    contentBotBg.innerHTML = slides[ofset].bg
    content.setAttribute('style', `background-image:  url("${slides[ofset].contentBg}")`)
    contentTopLabel.setAttribute('style', `background-image:  url("${slides[ofset].label}")`)
    contentTopBg.setAttribute('style', `background-image:  url("${slides[ofset].header}")`)
    firstClick()
}

function btnPrevmove() {
    btnNext.removeEventListener('click', function () { btnNextmove() })
    ofset = (ofset - 1 == -1) ? slides.length - 1 : ofset - 1;
    let caruselSlides = carusel.querySelectorAll('.carusel__card')
    caruselSlides[2].style.left = "21.5%"
    caruselSlides[0].style.left = "100%"
    setTimeout(function () { carusel.removeChild(caruselSlides[0]), carusel.removeChild(caruselSlides[1]) }, 500)
    createCards()
    contentBotBg.innerHTML = slides[ofset].bg
    content.setAttribute('style', `background-image:  url("${slides[ofset].contentBg}")`)
    contentTopLabel.setAttribute('style', `background-image:  url("${slides[ofset].label}")`)
    contentTopBg.setAttribute('style', `background-image:  url("${slides[ofset].header}")`)
    firstClick()
}


btnNext.addEventListener('click', function () { btnNextmove() })
btnPrev.addEventListener('click', function () { btnPrevmove() })


let initialPoint;
let finalPoint;
carusel.addEventListener('touchstart', function (e) {
    e.preventDefault();
    e.stopPropagation();
    initialPoint = e.changedTouches[0];
});
carusel.addEventListener('touchend', function (e) {
    e.preventDefault();
    e.stopPropagation();
    finalPoint = e.changedTouches[0];
    let xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    if (xAbs > 20) {
        if (finalPoint.pageX > initialPoint.pageX) { btnPrevmove() }
        else { btnNextmove() }
    }
});

function firstClick() {
    if (flag === true) {
        document.querySelector('.content__top_label').classList.remove('load')
        document.querySelector('.content__top_bg').classList.remove('load')
        setTimeout(function () { document.querySelector('.content__top_bg').removeChild(document.querySelector('.content__top_text')), 500 })
    }
    flag = false;
}