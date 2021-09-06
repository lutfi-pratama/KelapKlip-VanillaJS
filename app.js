const lampOdd = document.querySelectorAll(".lamp__item:nth-child(odd)");
const lampEven = document.querySelectorAll(".lamp__item:nth-child(even)");

const handleLampsOdd = (lamps, speed) => {
  lamps.forEach(lamp => {
    if (lamp.classList.contains("lamp--red")) {
      lamp.style.animation = `red--animated--odd ${speed}ms ease-in-out infinite`;
    } else if (lamp.classList.contains("lamp--blue")) {
      lamp.style.animation = `blue--animated--odd ${speed}ms ease-in-out infinite`;
    } else {
      lamp.style.animation = `green--animated--odd ${speed}ms ease-in-out infinite`;
    }
  });
};

const handleLampsEven = (lamps, speed) => {
  lamps.forEach(lamp => {
    if (lamp.classList.contains("lamp--red")) {
      lamp.style.animation = `red--animated ${speed}ms ease-in-out infinite`;
    } else if (lamp.classList.contains("lamp--blue")) {
      lamp.style.animation = `blue--animated ${speed}ms ease-in-out infinite`;
    } else {
      lamp.style.animation = `green--animated ${speed}ms ease-in-out infinite`;
    }
  });
};

const lampActived = (cond, speed) => {
  if (!cond) {
    lampOdd.forEach(lamp => {
      lamp.style.animation = "";
    });
    lampEven.forEach(lamp => {
      lamp.style.animation = "";
    });
  } else {
    handleLampsOdd(lampOdd, speed);
    handleLampsEven(lampEven, speed);
  }
};

//! On Off Controller
let lampOn = document.querySelector(".control__on");
let lampOff = document.querySelector(".control__off");
let slider = document.querySelector(".slider__item");
let toggleOnce = true;

function handleOn() {
  if (toggleOnce) {
    lampOn.classList.toggle("on--active");
    lampOff.classList.toggle("off--deactive");
    lampActived(true, 1100); // start Active
    // slider config
    slider.value = 1100;
    handleSlider();

    toggleOnce = false;
    slider.disabled = false;
  }
}

function handleOff() {
  if (!toggleOnce) {
    lampOn.classList.toggle("on--active");
    lampOff.classList.toggle("off--deactive");
    // Slider config
    lampActived(false);

    toggleOnce = true;
    slider.disabled = true;
  }
}

slider.disabled = true;

//! Slider Controller

function handleSlider() {
  slider.oninput = function () {
    lampActived(true, this.value);
  };
}
