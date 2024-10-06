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
  if (amount > 0 && amount <= 100) {
      boxes.innerHTML = "";
    let size = 30;
    let boxlist = [];
      for (let i = 0; i < amount; i++) {
        let arr = []
        arr.width = size;
        arr.height = size;
        boxlist.push(arr)
        size += 10
        document.getElementById("number").value = ""
      }
    boxlist.flatMap(box => {
      const newBox = document.createElement("div")
      newBox.style.width = `${box.width}px`;
      newBox.style.height = `${box.height}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      boxes.append(newBox);
    }
    )
    }
};

createBtn.addEventListener("click", createBoxes)

function destroyBoxes() {
  document.getElementById("number").value = "" 
  boxes.innerHTML = ""
}

destroyBtn.addEventListener("click", destroyBoxes)
