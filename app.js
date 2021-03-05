// MAIN PAGE SLIDE SHOW

const leftArrow = document.getElementById("left-arrow"), rightArrow = document.getElementById("right-arrow")
const slides = document.querySelectorAll(".slides")

leftArrow.addEventListener("click", changeSlides)
rightArrow.addEventListener("click", changeSlides)

document.addEventListener("DOMContentLoaded", autoChange)


// FUNCTION TO CHANGE SLIDES AUTOMATICALLY
function autoChange(){
    setInterval(() => {
        slideNum++
        if(slideNum > slides.length){
            slideNum = 1 
            document.querySelector(`.slide-${slideNum}`).classList.add("fade-in")
            document.querySelector(`.slide-${slideNum}`).classList.remove("fade-out")
            document.querySelector(`.slide-${slides.length}`).classList.add("fade-out")
            document.querySelector(`.slide-${slides.length}`).classList.remove("fade-in")
        }
        else{
            document.querySelector(`.slide-${slideNum}`).classList.add("fade-in")
            document.querySelector(`.slide-${slideNum}`).classList.remove("fade-out")
            document.querySelector(`.slide-${slideNum-1}`).classList.add("fade-out")
            document.querySelector(`.slide-${slideNum-1}`).classList.remove("fade-in")
        }
    }, 10000)
}

// FUNCTION TO CHANGE SLIDES
let slideNum = 1

function changeSlides(e){
    let target = e.target
    if (target.classList.contains("fa-arrow-left")){
        slideNum--
        if(slideNum < 1){
            slideNum = 3
            document.querySelector(`.slide-${slideNum}`).classList.add("fade-in")
            document.querySelector(`.slide-${slideNum}`).classList.remove("fade-out")
            document.querySelector(`.slide-1`).classList.add("fade-out")
            document.querySelector(`.slide-1`).classList.remove("fade-in")
        }
        else{
            document.querySelector(`.slide-${slideNum}`).classList.add("fade-in")
            document.querySelector(`.slide-${slideNum}`).classList.remove("fade-out")
            document.querySelector(`.slide-${slideNum+1}`).classList.add("fade-out")
            document.querySelector(`.slide-${slideNum+1}`).classList.remove("fade-in")
        }
    }else{
        slideNum++
        if(slideNum > slides.length){
            slideNum = 1 
            document.querySelector(`.slide-${slideNum}`).classList.add("fade-in")
            document.querySelector(`.slide-${slideNum}`).classList.remove("fade-out")
            document.querySelector(`.slide-${slides.length}`).classList.add("fade-out")
            document.querySelector(`.slide-${slides.length}`).classList.remove("fade-in")
        }
        else{
            document.querySelector(`.slide-${slideNum}`).classList.add("fade-in")
            document.querySelector(`.slide-${slideNum}`).classList.remove("fade-out")
            document.querySelector(`.slide-${slideNum-1}`).classList.add("fade-out")
            document.querySelector(`.slide-${slideNum-1}`).classList.remove("fade-in")
        }
    }
}

// SCROLL EVENT FUNCTIONS


window.addEventListener("scroll", ()=>{
    if (window.scrollY > 200){
        document.querySelector(".about-left-side").classList.add("show")
        document.querySelector(".about-right-side").classList.add("show")
    }
    if(window.scrollY > 150){
        document.querySelector(".nav-list").classList.add("stay-up")
    }
    else{
        document.querySelector(".nav-list").classList.remove("stay-up")
    }
})

// CONTACT-US LABEL MOVE UP


const inputs = document.querySelectorAll(".input")

inputs.forEach(input => {
    input.addEventListener("focus", moveLabelUp)
    input.addEventListener("blur", moveLabelDown)
})

function moveLabelUp(e){
    let target = e.target
    let label = target.previousElementSibling
    label.classList.add("up")
}

function moveLabelDown(e){
    let target = e.target
    let label = target.previousElementSibling
    if(target.value == ''){
        label.classList.remove("up")
    }
}

// RESPONSIVE NAVBAR 

const menu = document.querySelector(".hamburger-menu")

menu.addEventListener("click", showMenu)

function showMenu(){
    document.querySelector(".nav-list").classList.toggle("xout")
    document.querySelector(".line-1").classList.toggle("xout")
    document.querySelector(".line-2").classList.toggle("xout")
    document.querySelector(".line-3").classList.toggle("xout")
}
