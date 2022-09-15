const numberInput = document.querySelector(".number-input");
const addButton = document.querySelector(".add-button");
const container = document.querySelector(".dynamic-divs");
const resetButton = document.querySelector(".reset");


addButton.addEventListener("click", () => {
    const length = +numberInput.value;
    for (let i = 1; i <= length; i++) {
      const div = document.createElement("div");
      div.innerHTML = i;
  
      container.appendChild(div);
    }
  });
  
  resetButton.addEventListener("click", () => {
    container.innerHTML = "";
  });