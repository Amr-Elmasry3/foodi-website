// Access To Elements We Will Use Them
let headr= document.querySelector(".headr");
let icon= document.querySelector(".icon");
let resrvation= document.querySelector(".main-button");
let firstSpan= document.querySelector(".first");
let lastSpan= document.querySelector(".last");
let links= document.querySelector(".links");
let allLinks= Array.from(document.querySelectorAll(".links li"));
let mainBtn= document.querySelector(".main-button");
let bookTable= document.querySelector(".book-table");
let up= document.querySelector(".up");
let allLists= Array.from(document.querySelectorAll(".list li"));
let allDivs= Array.from(document.querySelectorAll(".shop .contanier div"));

// Part Of Variables
let click= 0;

// Part Of Main Code
clickOnMainBtn();
window.onresize= function (){
  if (window.innerWidth <= 767){
    links.style.cssText= "height: 0 ; padding: 0";
    mainBtn.style.cssText= "right: -150px";
    firstSpan.style.cssText= "width: 50% ; transition: 0.4s";
    lastSpan.style.cssText= "width: 50% ; transition: 0.4s";
    clickOnMainBtn();
  }
  else {
    links.style.cssText= "height: fit-content ; padding: 0";
    mainBtn.style.cssText= "right: 0";
  }
}

resrvation.onclick= function (){
  location.href= "\#book-table";
}
bookTable.onclick= function (){
  location.href= "\#book-table";
}

let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


window.onscroll= function (){
  if (scrollY >= 400){
    up.style.cssText= "right: 20px ; transition: 0.4s";
    headr.style.cssText= "position: sticky ; top: 0 ; background-color: #0000004d";
  }
  else {
    up.style.cssText= "right: -60px ; transition: 0.4s";
    headr.style.cssText= "position: absolute ; top: 0 ; background-color: transparent";
  }
}

up.onclick= function (){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

allLinks.forEach((link) => {
  link.addEventListener("click", (eve) => {
    allLinks.forEach((link) => {
      link.classList.remove("active");
    })
    eve.currentTarget.classList.add("active");
  })
})

allLists.forEach((list) => {
  list.addEventListener("click", (eve) => {
    allLists.forEach((list) => {
      list.classList.remove("active2");
    })
    eve.currentTarget.classList.add("active2");
    allDivs.forEach((box) => {
      box.style.cssText= "display: none";
    })
    let goal= eve.currentTarget.dataset.name;
    allDivs.forEach((box) => {
      if (box.classList.contains(goal)){
        box.style.cssText= "display: block";
      }
    })
  })
})

// Part Of Functions
function clickOnMainBtn(){
  icon.onclick= function (){
    if (click === 0){
      links.style.cssText= "height: 295px ; padding: 15px ; transition: 0.4s";
      mainBtn.style.cssText= "right: 20px ; transition: 0.4s";
      firstSpan.style.cssText= "width: 100% ; transition: 0.4s";
      lastSpan.style.cssText= "width: 100% ; transition: 0.4s";
      click= 1;
    }
    else {
      links.style.cssText= "height: 0 ; padding: 0 ; transition: 0.5s";
      mainBtn.style.cssText= "right: -150px ; transition: 0.4s";
      firstSpan.style.cssText= "width: 50% ; transition: 0.4s";
      lastSpan.style.cssText= "width: 50% ; transition: 0.4s";
      click= 0;
    }
  }
}