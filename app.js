
const mobNav = document.querySelector(".nav__burger")
const mobNavList = document.querySelector(".nav__list")
const nav = document.querySelector(".hero__nav")
const navLinks = document.querySelectorAll('.nav__list a')
const loginBtn = document.querySelector(".login_btn")
const modalBg = document.querySelector(".modal-bg ")
const modalClose = document.querySelector(".modal__close ")
const signupLink = document.querySelector(".signup")

// for scrolling effect
window.addEventListener("scroll",fixedNav)
function fixedNav(){
    if (window.scrollY > nav.offsetTop &&  window.innerWidth > 778){
        nav.classList.add("active")
    }
    else{
        nav.classList.remove("active")
    }
}

// for active navbar 
navLinks.forEach((a)=>{
    a.addEventListener("click",()=>{
        removeActive()
        a.classList.add("active")
        mobNavList.classList.toggle("nav_open")
        mobNav.classList.toggle("toggle")
          
    })
})

function removeActive(){
    navLinks.forEach((a)=>{
        a.classList.remove("active")
    })
}

// for modal

if(loginBtn){
    loginBtn.addEventListener("click",()=>{
        modalBg.classList.add("modal_active")
    })
}
if (modalClose){

    modalClose.addEventListener("click",()=>{
        modalBg.classList.remove("modal_active")
    })
}

if (signupLink){
    
signupLink.addEventListener("click",()=>{
    modalBg.classList.remove("modal_active")
})
}



// mobnav

mobNav.addEventListener("click",()=>{
    console.log("workgin from gallery")
    mobNavList.classList.toggle("nav_open")
    mobNav.classList.toggle("toggle")
})



