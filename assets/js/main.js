
window.addEventListener("scroll",() => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight) *4)
})

// slider images
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let slider = document.getElementById("swiper-wrapper");
let width = innerWidth;

var a = 0;

if(width > 991){
    next.addEventListener("click",function(){
        switch(a){
            case 0:
                slider.style.transform = "translate3d(-481px, 0px, 0px)";
    
                break;
            case 1:
                slider.style.transform = "translate3d(-584px, 0px, 0px)";
                break;
        }
        a++   
    })
    
    prev.addEventListener("click",function(){
        switch(a){
            case 1:
                slider.style.transform = "translate3d(-481px, 0px, 0px)";
                break;
            case 0:
                slider.style.transform = "translate3d(0px, 0px, 0px)";
                break;
        }
        a-- 
    })
}

if(width <= 991){
    next.addEventListener("click",function(){
        switch(a){
            case 0:
                slider.style.transform = "translate3d(-481px, 0px, 0px)";
                break;
            case 1:
                slider.style.transform = "translate3d(-962px, 0px, 0px)";
                break;
            case 2:
                slider.style.transform = "translate3d(-1048px, 0px, 0px)";
        }
        a++   
    })
    
    
    prev.addEventListener("click",function(){
        switch(a){
            case 2:
                slider.style.transform = "translate3d(-962px, 0px, 0px)";
            case 1:
                slider.style.transform = "translate3d(-481px, 0px, 0px)";
                break;
            case 0:
                slider.style.transform = "translate3d(0px, 0px, 0px)";
                break;
        }
        a-- 
    })
}

if(width <= 767){
    next.addEventListener("click",function(){
        switch(a){
            case 0:
                slider.style.transform = "translate3d(-481px, 0px, 0px)";
                break;
            case 1:
                slider.style.transform = "translate3d(-962px, 0px, 0px)";
                break;
            case 2:
                slider.style.transform = "translate3d(-1277px, 0px, 0px)";
        }
        a++   
    })
    
    
    prev.addEventListener("click",function(){
        switch(a){
            case 2:
                slider.style.transform = "translate3d(-962px, 0px, 0px)";
            case 1:
                slider.style.transform = "translate3d(-481px, 0px, 0px)";
                break;
            case 0:
                slider.style.transform = "translate3d(0px, 0px, 0px)";
                break;
        }
        a-- 
    })
}

if(width <= 479){
    next.addEventListener("click",function(){
        switch(a){
            case 0:
                slider.style.transform = "translate3d(-413px, 0px, 0px)";
                break;
            case 1:
                slider.style.transform = "translate3d(-826px, 0px, 0px)";
                break;
            case 2:
                slider.style.transform = "translate3d(-1239px, 0px, 0px)";
        }
        a++   
    })
    
    
    prev.addEventListener("click",function(){
        switch(a){
            case 2:
                slider.style.transform = "translate3d(-826px, 0px, 0px)";
            case 1:
                slider.style.transform = "translate3d(-413px, 0px, 0px)";
                break;
            case 0:
                slider.style.transform = "translate3d(0px, 0px, 0px)";
                break;
        }
        a-- 
    })
}

// slider
let sl_icon_right = document.querySelector(".slider-arrow.w-icon-slider-right");
let slide_out = document.querySelector(".slide_out");
let slide = document.querySelectorAll(".slide_manager.w-slide");
let dots = document.querySelectorAll(".w-slider-dot");
let active = 0;
let lengthslide = slide.length;

sl_icon_right.onclick = function(){
    if(active + 1 > lengthslide){
        active = 0;
    }else{
        active += 1;
    }
    nextslider(); 
}

let refreshslider = setInterval(() => {sl_icon_right.click()},3000)

function nextslider (){
    let checkLeft = slide[active].offsetLeft;
    slide_out.style.left = -checkLeft + "px";
    let lastActiveDot = document.querySelector(".w-slider-dot.w-active");
    lastActiveDot.classList.remove("w-active");
    dots[active].classList.add('w-active');
}

dots.forEach((dot,key) => {
    dot.addEventListener('click',function(){
        active = key;
        nextslider();
    })
})

