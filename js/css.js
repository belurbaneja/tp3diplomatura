

document.getElementById('imgBanner').addEventListener("mouseover", (e) => {


    e.target.classList.add('helado')
    e.target.classList.add('helado2')
    e.target.src = './img/banner/banner2.webp'


})
document.getElementById('imgBanner').addEventListener("mouseout", (e) => {

    e.target.src = './img/banner/banner.png'
})
let currentIndex = 0;

    if(document.querySelector('.slider-list').scrollLeft==0){
Object.assign(document.querySelector('.whatIdoSS').getElementsByClassName('izq-btn')[0],{style:`
filter: opacity(0.20);
`})
} 

if(document.querySelector('.slider-list').scrollLeftMax==document.querySelector('.slider-list').scrollLeft){
    Object.assign(document.querySelector('.whatIdoSS').getElementsByClassName('der-btn')[0],{style:`
    filter: opacity(0.20);
    `})
    } 
document.querySelector('.slider-list').addEventListener("scroll",(e)=>{
 
    if(document.querySelector('.slider-list').scrollLeft==0){
Object.assign(document.querySelector('.whatIdoSS').getElementsByClassName('izq-btn')[0],{style:`
filter: opacity(0.20);
`})
}else{
    Object.assign(document.querySelector('.whatIdoSS').getElementsByClassName('izq-btn')[0],{style:`
    filter: opacity(1);
    `})
} 
if(document.querySelector('.slider-list').scrollLeftMax==document.querySelector('.slider-list').scrollLeft){
    Object.assign(document.querySelector('.whatIdoSS').getElementsByClassName('der-btn')[0],{style:`
    filter: opacity(0.20);
    `})
    }else{
        Object.assign(document.querySelector('.whatIdoSS').getElementsByClassName('der-btn')[0],{style:`
        filter: opacity(1);
        `})
    } 
})
const slides = document.querySelectorAll('.slider-item');

const nextSlide = () => {

    const disable = () => {
        for (const a of document.getElementsByClassName('slider-button')) {

            Object.assign(a, { disabled: true })

        }
    }
    disable()
    const moveBar = () => {
        if ((document.querySelector('.slider-list').scrollWidth / document.querySelector('.slider-list').children.length) > currentIndex) {
            document.querySelector('.slider-list').scrollLeft += 10;
            currentIndex += 10
        } else {
            currentIndex = 0
            clearTimeout(idSetint)
        }

    }
    idSetint = setInterval(moveBar, 16);
    const enable = () => {
        clearTimeout(idSetint)

        for (const a of document.getElementsByClassName('slider-button')) {

            Object.assign(a, { disabled: false })

        }
    }
    setTimeout(enable, 1110)
}

const prevSlide = () => {
    const disable = () => {
        for (const a of document.getElementsByClassName('slider-button')) {

            Object.assign(a, { disabled: true })

        }
    }
    disable()
    const moveBarM = () => {
        if ((document.querySelector('.slider-list').scrollWidth / document.querySelector('.slider-list').children.length) > currentIndex) {
            document.querySelector('.slider-list').scrollLeft += -10;
            currentIndex += 10
        } else {
            currentIndex = 0
            clearTimeout(idSetintM)
        }
    }
    idSetintM = setInterval(moveBarM, 16);
    const enableM = () => {
        clearTimeout(idSetintM)

        for (const a of document.getElementsByClassName('slider-button')) {

            Object.assign(a, { disabled: false })

        }
    }
    setTimeout(enableM, 1110)
}
document.querySelector('.slider-list').addEventListener("scroll", (e) => {



})




const modal = (a) => a.getElementsByClassName("modal");


const btn = document.getElementsByClassName('OpenMod');


const span = document.getElementsByClassName("close");

for (const a of Object.values(btn)) {
    a.addEventListener("click", (e) => {

        for (const a of document.getElementById('portfolio').getElementsByClassName('modal')) {
            a.style.display = "none";
        }

        e.target.parentElement.parentElement.nextElementSibling.style.display = "block";

    })
}

for (const a of Object.values(span)) {
    a.addEventListener("click", (e) => {
        if (e.target.tagName == 'SPAN') {
            e.target.parentElement.parentElement.style.display = "none";
        }
        if (e.target.tagName == 'H1') {
            e.target.parentElement.parentElement.parentElement.style.display = "none";
        }
    })
}

document.body.addEventListener('click', (e) => {

    if ((e.target.className == 'OpenMod')) {
        return
    } else if (e.target.className.indexOf('modal') != -1) {
        return
    } else {
        for (const a of document.getElementById('portfolio').getElementsByClassName('modal')) {
            a.style.display = "none";
        }
    }

})

const enviado = document.getElementById('EnviarSubmit');

const fDel = () => {
    document.getElementById('exito').outerHTML = ''
}

enviado.addEventListener("click", (e) => {
    const div = document.createElement('div');
    Object.assign(div, {
        id: 'exito',
        style: `
        display:flex;
        width:80vw;
        height:200px;
        z-index:10;
        margin: 10vh 10vw;
  text-align: center;
        border-radius: 2vw;
        flex-direction: column;
    background-color: rgba(0, 0, 0, 0.31);
    backdrop-filter: blur(1px);
        position: fixed;
        justify-content: center;
        padding: 20vh 0;
        margin:10vh 10vw;
`})
    div.innerHTML = `
<h1>Enviado exitosamente</h1>
<button onclick='fDel()' style=' background-color: rgba(10, 40, 125, 0.91);
backdrop-filter: blur(1px);'>Cerrar</button>
`
    document.body.appendChild(div)
});

