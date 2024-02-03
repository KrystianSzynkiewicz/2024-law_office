const Btn = document.getElementById("nextSlide");
const Btn2 = document.getElementById("backSlide");

function paralaxFunction() {
  const element = document.getElementById("paralaxSlider");
  if (element.className == "paralax__slider") {
    element.className = "paralax__slider2";
  } else {
    element.className = "paralax__slider";
  }
}

function delay (foo) {
  setTimeout(foo, 4000);
};

Btn.addEventListener('click', function paralaxFunction() {
  const element = document.getElementById("paralaxSlider");
  if (element.className == "paralax__slider") {
    element.className = "paralax__slider2";
  } else if (element.className == "paralax__slider2") {
    element.className = "paralax__slider3";
  } else if (element.className == "paralax__slider3") {
    element.className = "paralax__slider";
  }

});

Btn2.addEventListener('click', function paralaxFunction() {
  const element = document.getElementById("paralaxSlider");
  if (element.className == "paralax__slider") {
    element.className = "paralax__slider3";
  } else if (element.className == "paralax__slider3") {
    element.className = "paralax__slider2";
  } else if (element.className == "paralax__slider2") {
    element.className = "paralax__slider";
  }

});

window.addEventListener('load', delay(paralaxFunction));


  