function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const input = document.querySelector(".task-6-inp")

const createBtn = document.querySelector(".task-6-create-btn");

const destroyBtn = document.querySelector(".task-6-destroy-btn")

let inputValue = 0;

function getInputValue() {
  inputValue = document.getElementById("number").value
  console.log(inputValue);
  
}

createBtn.addEventListener("click", getInputValue);


const boxes = document.querySelector("#boxes")
boxes.style.backgroundColor = "";
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap"
boxes.style.gap = "8px"


const createBox = () => {

  if (inputValue <= 100 && inputValue > 0) {
    boxes.innerHTML = "";
    let size = 10;
    for (let i = 0; i < inputValue ; i++) {
      const newBox = document.createElement("div")
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      boxes.append(newBox);
      size += 10
    }
  }
}

createBtn.addEventListener("click", createBox);

function destroyBoxes() {
boxes.innerHTML = ""
}

destroyBtn.addEventListener("click", destroyBoxes)