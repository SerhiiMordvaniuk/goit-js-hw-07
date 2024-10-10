"use strict"
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBtn = document.querySelector(".task-6-create-btn")
const destroyBtn = document.querySelector(".task-6-destroy-btn")
const boxes = document.querySelector("#boxes")

boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.gap = "8px"

let amount = 0;

function getInputAmount() {
  amount = document.getElementById("number").value  
  
  }

createBtn.addEventListener("click", getInputAmount);


function createBoxes() {

  boxes.innerHTML = "";

  if (amount > 0 && amount <= 100) {
    let size = 30;
    let boxlist = [];
    for (let i = 0; i < amount; i++) {
      const colorBox = document.createElement("div");
      colorBox.style.width = `${size}px`;
      colorBox.style.height = `${size}px`;
      colorBox.style.backgroundColor = getRandomHexColor();

      boxlist.push(colorBox);

      size +=10
    }
    boxes.append(...boxlist)
  }

  document.getElementById("number").value = "" 
};

createBtn.addEventListener("click", createBoxes)

function destroyBoxes() {
  document.getElementById("number").value = "" 
  boxes.innerHTML = ""
}

destroyBtn.addEventListener("click", destroyBoxes)
