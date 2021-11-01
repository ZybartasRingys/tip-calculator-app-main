const billInput = document.getElementById("bill-input");
const tipBtn = document.querySelectorAll(".tip");
const customTip = document.getElementById("custom-tips");
const people = document.getElementById("people-input");
const error = document.getElementById("error-msg");
const totalTips = document.getElementById("tips-amount");
const totalPerson = document.getElementById("person-amount");
// variables
let billValue = 0.0; //default saskaita
let tipValue = 0.15; // default tipsai
let peopleValue = 1; //

// eventai
billInput.addEventListener("input", setBillValue);
customTip.addEventListener("input", setCustomTipValue);
people.addEventListener("input", setPeopleValue);

// default Bill value

function setBillValue() {
  billValue = parseFloat(billInput.value);
  console.log(billValue);
  calculateTip();
}

// tips btns

tipBtn.forEach((btn) => {
  btn.addEventListener("click", btnClick);
});

function btnClick(event) {
  tipBtn.forEach((btn) => {
    // btn active classes
    btn.classList.remove("active");
    if (event.target.innerHTML == btn.innerHTML) {
      btn.classList.add("active");
      tipValue = parseFloat(btn.innerHTML) / 100;
      console.log(tipValue);
    }

    customTip.value = "";

    calculateTip();
  });
}

// custom tipsai

function setCustomTipValue() {
  tipValue = parseFloat(customTip.value / 100);

  //remove btn active on

  tipBtn.forEach((btn) => {
    btn.classList.remove("active");
  });

  if (customTip.value !== "") {
    calculateTip();
  }
}

// people value

function setPeopleValue() {
  peopleValue = parseFloat(people.value);

  if (peopleValue <= 0) {
    error.classList.toggle("active");
  } else {
    error.classList.remove("active");
  }

  calculateTip();
}

// calculate tips

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue * (tipValue + 1)) / peopleValue;
    totalTips.innerHTML = "$" + tipAmount.toFixed(2);
    totalPerson.innerHTML = "$" + total.toFixed(2);
  }
}
