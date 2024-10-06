"use strict"
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const input = document.querySelector(".task-6-inp")

const createBtn = document.querySelector(".task-6-create-btn");

const destroyBtn = document.querySelector(".task-6-destroy-btn")

let amount = 0;

function getInputAmount() {
  amount = document.getElementById("number").value  
}

createBtn.addEventListener("click", getInputAmount);


const boxes = document.querySelector("#boxes")
boxes.style.backgroundColor = "";
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap"
boxes.style.gap = "8px"


const createBoxes = () => {

  if (amount <= 100 && amount > 0) {
    boxes.innerHTML = "";
    let size = 30;
    for (let i = 0; i < amount ; i++) {
      const newBox = document.createElement("div")
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      boxes.append(newBox);
      size += 10
      document.getElementById("number").value = ""
    }
  }
}

createBtn.addEventListener("click", createBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
  document.getElementById("number").value = "";
}

destroyBtn.addEventListener("click", destroyBoxes)