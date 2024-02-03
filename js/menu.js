const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.getElementById('mobile__menu');

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');

let menuOpen = false;


function fadeUpM () {
    mobileMenu.classList.add('fade__up');
    setTimeout(()=>{
      mobileMenu.classList.remove('fade__up');
    },1000);
  };
  
  function fadeDownM () {
    mobileMenu.classList.add('fade__down');
    setTimeout(()=>{
      mobileMenu.classList.remove('fade__down');
    },1000);
  };

function turnOffMenu () {
    fadeDownM();
    setTimeout (()=>{
        mobileMenu.classList.add('deactive');
    }, 1000)
    menuBtn.classList.remove('open');
        menuOpen = false;
};
function turnOnMenu () {
    fadeUpM();
    mobileMenu.classList.remove('deactive');
    menuBtn.classList.add('open');
};

function menuSwitch () {
    menuBtn.addEventListener('click', ()=> {
        if (mobileMenu.classList == 'deactive') {
            turnOnMenu();
        } else {
            turnOffMenu();
        }
    })
};
setTimeout (()=> {
    menuSwitch();
}, 4000)

function linksAction () {
    link1.addEventListener('click', ()=>{
        turnOffMenu();
    })
    link2.addEventListener('click', ()=>{
        turnOffMenu();
    })
    link3.addEventListener('click', ()=>{
        turnOffMenu();
    })
    link4.addEventListener('click', ()=>{
        turnOffMenu();
    })
    link5.addEventListener('click', ()=>{
        turnOffMenu();
    })
}
linksAction();
