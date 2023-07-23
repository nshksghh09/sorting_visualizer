"strict";
//creating  100 div elements and adding class to each one of them
document.getElementById("bar-section");
for (let i = 0; i < 100; i++) {
  let divForBars = document.createElement("div");
  divForBars.className = "bars";
  document.getElementById("bar-section").appendChild(divForBars);
  //   console.log("created");
}
function barSecn() {
  //----creating an array which contains 100 different positive integers----
  const arrBars = [];
  console.log("hello world");
  for (let i = 0; i < 100; i++) {
    let numbers = Math.trunc(Math.random() * 101);
    arrBars[i] = numbers;
  }

  //-----adding heights to all the bars equal to the respective elements of arrBars array------
  const bars = document.querySelectorAll(".bars");
  for (let i = 0; i < bars.length; i++) {
    bars[i].setAttribute(`style`, `height:${arrBars[i]}mm`);
  }
}
//------functionality of new Array button-----
document.querySelector(".new-array").addEventListener("click", barSecn);

//implementing the different sorting algorithms

//----swap function----
function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;
}

//---bubble sort algorithm---
document.querySelector(".bubble-sort").addEventListener("click", function () {
  for (let i = 100; i < 99; i--) {
    for (let j = 0; j < i - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        swap(arr[i], arr[i + 1]);
      }
    }
  }
});
