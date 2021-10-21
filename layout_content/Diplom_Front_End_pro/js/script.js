
let data = `[{
    "slides":["slide1.jpg", "slide2.jpg", "slide3.jpg"],
    "styles":[{"name":"Биомеханика",
            "photo":"style1.jpg",
            "description":"<span style='color:#33cccc'>Биомеханика</span> – один из сравнительно молодых и при этом наиболее оригинальных стилей тату. Возник он в 80-е годы 20 века благодаря работам швейцарского художника Гигера. Ориентируясь на оригинальные изображения, многие мастера тату начали создавать механико-реалистичные картины на теле, а особой популярности этот стиль тату, ставший олицетворением кибернетизации человечества, достиг в последние десятилетия с широким развитием компьютерных технологий. Стиль тату Биомеханика представляет органичное переплетение изображений механических деталей с кожным покровом. "
            },
            {"name":"Чикано",
            "photo":"style2.jpg",
            "description":"Что именно значение имели эти рисунки, с точностью сказать сегодня никто не может. Все что мы знаем – это то, что назывались они Чикано, но сами рисунки этого стиля почти не сохранились. Название происходит от одноименной этнической группы, проживавшей на территории США в 16-17 веках. Со временем представители этого этноса растворились среди прочего населения страны. Можно лишь сказать, что жили они на территории штатов Техас, Калифорния и Нью-Мексико. На заре американского общества люди еще не имели равных прав и свобод. "
            },
            {"name":"Нью Скул",
            "photo":"style3.jpg",
            "description":"<span style='color:#33cccc'>Нью Скул тату (New school)</span> – стиль довольно новый. Развиваться это направление начало примерно в середины 80-х, одновременно с рейв-движением и широко распространился по всему миру. Этот стиль не имеет каких-то жестких ограничений, а иногда даже немножко философский. Главными элементами Нью Скул татуировки является проявление как можно большей фантазии, юмора и абстракции. Нью Скул имеет в себе очень схожие элементы с граффити. Татуировки в стиле Нью Скул имеют множество разных направлений и разновидностей."
            },
            {"name":"Олд Скул",
            "photo":"style4.jpg",
            "description":"<span style='color:#33cccc'>Old School</span>, в переводе с английского «старая школа» – это популярный стиль татуировок, существовавший в Европе и Америке. Данный стиль появился в XIX веке, когда обычно на теле изображали рисунки якорей, лент, черепов и ангелов."}
            ],
    "masters":[{
        "Ваня":{
            "photo":"./content/master_Ivan.jpg",
            "style":"Биомеханика"
        },
        "Макс":{
            "photo":"./content/master_Max.jpg",
            "style":"Олд скул"
        },
        "Вова":{
            "photo":"./content/master_Vova.jpg",
            "style":"Нью Скул"
        }
    }]

    }]`

const logo = document.querySelector('.header__logo');
const headerBody = document.querySelector('.header__body');
const headerBodyBottomBg = document.querySelector('.header__body_bottom-bg');

window.addEventListener('scroll',()=>{
    let scroll = window.pageYOffset;
    if (scroll>1){logo.classList.add('scroll'),headerBody.classList.add('scroll'),
    headerBody.setAttribute('style','background:#161525'), headerBodyBottomBg.setAttribute('style','display: none')}
    else(logo.classList.remove('scroll'),headerBody.classList.remove('scroll'),headerBody.removeAttribute('style'),
    headerBodyBottomBg.removeAttribute('style'))
});

const slides = JSON.parse(data)[0].slides;

const sliderItems = document.querySelector('.slider__items')
const dots = document.querySelector('.slider__dots')
const active = 0;

slides.forEach(function(el,i){
    let dot = document.createElement('li')
    dot.classList.add('dot')
    if(i==0){dot.classList.add('active')}
    dot.setAttribute('data-dot-nam',i)
    dots.appendChild(dot)
    let div = document.createElement('div')
    div.classList.add('slider__item')
    div.setAttribute('style',`background-image: url('./content/${slides[i]}');`)
    if(i==0){div.classList.add('active')}
    sliderItems.appendChild(div)
    let img = document.createElement('img')
    img.classList.add('image')
    img.src = `./content/${slides[i]}`
    div.appendChild(img)
    
});

const sliderItem = document.querySelectorAll('.slider__item')
const dot = document.querySelectorAll('.dot')

dot.forEach(function(el){
  el.addEventListener('click',function(e){
    clearDot()
    let _this = e.target;
    _this.classList.add('active');
    let dotNam = _this.getAttribute('data-dot-nam')
    let active;

    sliderItem.forEach(function(el,i){
        if(el.classList.contains('active'))active=i;
    })
    if(dotNam!=active){
        sliderItem[dotNam].classList.add('active')
        sliderItem[active].classList.remove('active');}
})
}) 

let clearDot = function(){
    for(var i=0;i<dot.length;i++){
    if(dot[i].classList.contains('active')){dot[i].classList.remove('active')}}
}

const signUpContainer = document.querySelector('.signUp__container')
const signUpLabel = document.querySelector('.signUp__label')

signUpLabel.addEventListener('click',()=>{
    signUpContainer.classList.toggle('active')
})


let styles = JSON.parse(data)[0].styles;
const stylesSliderPhoto = document.querySelector('.styles__slider_photo')
const photoDescription_header = document.querySelector('.styles__slider_photoDescription-header')
const text = document.querySelector('.styles__slider_photoDescription .text')
const button_up = document.querySelector('.button_up')
const button_down = document.querySelector('.button_down')
let i = 0;

button_up.addEventListener('click',()=>{
    i++;
    if(i>styles.length-1){i=0};
    sliderStyle(i)
})
button_down.addEventListener('click',()=>{
    i--;
    if(i<0){i=styles.length-1};
    sliderStyle(i)
})
let sliderStyle = (i)=>{
    stylesSliderPhoto.setAttribute('style',`background-image:url("./content/${styles[i].photo}")`);
    photoDescription_header.innerText = styles[i].name;
    text.innerHTML = styles[i].description;
}


const mastersItems = document.querySelector('.masters__items')

let masters = JSON.parse(data)[0].masters

let mastersItemCreate =(name,photo,style,i)=>{
    let item = document.createElement('div')
    item.classList.add('masters__item')
    if(i==1){item.innerHTML = `<div class="masters__item_photo" style="background-image:url(${photo})"></div>
                        <div class="masters__item_info active">
                                <span>${name}</span>
                                <span>${style}</span>
                        </div>`}
    else(item.innerHTML = `<div class="masters__item_photo" style="background-image:url(${photo})"></div>
    <div class="masters__item_info">
            <span>${name}</span>
            <span>${style}</span>
    </div>`)      
    mastersItems.appendChild(item);
}

Object.keys(masters[0]).forEach((el,i)=>{
    let photo = masters[0][el].photo;
    let name = el;
    let style = masters[0][el].style
    mastersItemCreate(name,photo,style,i)
})

const mastersItem = document.querySelectorAll('.masters__item')
const mastrsItemInfo = document.querySelectorAll('.masters__item_info')

mastersItem.forEach(el => {
    el.addEventListener('click',()=>{
    if(!el.querySelector('.masters__item_info').classList.contains('active')){
        clearActive();
        el.querySelector('.masters__item_info').classList.add('active')}
    })
});

let clearActive = ()=>{
    mastrsItemInfo.forEach(el=>{
        if(el.classList.contains('active')){el.classList.remove('active')}
    })
}


let portfolioGalery = ['ph1.jpg','ph2.jpg','ph3.jpg','ph4.jpg','ph5.jpg','ph6.jpg','ph7.jpg','ph8.jpg',]
const galery = document.querySelector('.portfolio__items')
const portfolioFade = document.querySelector('.portfolio__fade_body') 
const portfolioFadeImg = document.querySelector('.portfolio__fade_img')

generatorGalery = ()=>{
    portfolioGalery.forEach((el)=>{
        let photoItem = document.createElement('div');
        photoItem.classList.add('portfolio__item');
        photoItem.setAttribute('style',`background-image: url('./content/portfolio/${el}')`);
        galery.appendChild(photoItem);
        photoItem.addEventListener('click',(e)=>{
            let url = e.srcElement.style.backgroundImage.split('"')[1]
            portfolioFadeImg.setAttribute('src',url)
            portfolioFade.classList.add('active')
        })
    })
    portfolioFade.addEventListener('click',()=>{
        portfolioFade.classList.toggle('active')})
}

generatorGalery()


