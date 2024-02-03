// BULB 

const about = document.getElementById('about');
const myPhoto = document.getElementById('myPhoto');
const aboutText = document.getElementById('about__text');
const bulb = document.getElementById('bulb');

let lastKnownScrollPosition = 0;
let ticking = false;

function switcher(scrollPos) {
    // console.log(scrollPos);
    if(scrollPos>750) {
        bulb.classList.remove('bulbOff');
        bulb.classList.add('bulbOn');
        about.classList.remove('about');
        about.classList.add('about2');
        aboutText.classList.remove('about__text');
        aboutText.classList.add('about__text2');
        myPhoto.classList.remove('myPhoto');
        myPhoto.classList.add('myPhoto2');
    }
    if(scrollPos<500) {
        bulb.classList.remove('bulbOn');
        bulb.classList.add('bulbOff');
        about.classList.remove('about2');
        about.classList.add('about');
        aboutText.classList.remove('about__text2');
        aboutText.classList.add('about__text');
        myPhoto.classList.remove('myPhoto2');
        myPhoto.classList.add('myPhoto');
    }
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      switcher(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

// POPUPS 

const product1 = document.getElementById('product1');
const product2 = document.getElementById('product2');
const product3 = document.getElementById('product3');
const product4 = document.getElementById('product4');

const popup1 = document.getElementById('popup1');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');
const popup4 = document.getElementById('popup4');

const exit = document.querySelector('.exit');

let popupVAR;

function disableScroll() {
  // Get the current page scroll position
  scrollTop =
  window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft =
  window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted,
      // set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}
function enableScroll() {
  window.onscroll = function() {};
}

function fadeUp () {
  popupVAR.classList.add('fade__up');
  setTimeout(()=>{
    popupVAR.classList.remove('fade__up');
  },1000);
};

function fadeDown () {
  popupVAR.classList.add('fade__down');
  setTimeout(()=>{
    popupVAR.classList.remove('fade__down');
  },1000);
  exit.classList.add('fade__down');
  setTimeout(()=>{
    exit.classList.remove('fade__down');
  },1000);
};

function turnOn () {
  fadeUp(popupVAR);
  disableScroll();
  popupVAR.classList.remove('deactive');
  exit.classList.remove('deactive');
};

function turnOff () {
  exit.addEventListener('click', ()=>{
    fadeDown(popupVAR);
    enableScroll();  
    setTimeout(()=>{
      popupVAR.classList.add('deactive');
      
      exit.classList.add('deactive');
    },1000)
  });
};

function popups () {
  
  product1.addEventListener('click', ()=>{
    popupVAR = popup1;
    turnOn(popupVAR);
    turnOff(popupVAR);    
  });
  product2.addEventListener('click', ()=>{
    popupVAR = popup2;
    turnOn(popupVAR);
    turnOff(popupVAR);  
  });
  product3.addEventListener('click', ()=>{
    popupVAR = popup3;
    turnOn(popupVAR);
    turnOff(popupVAR);  
  });
  product4.addEventListener('click', ()=>{
    popupVAR = popup4;
    turnOn(popupVAR);
    turnOff(popupVAR);  
  });
};
popups();
