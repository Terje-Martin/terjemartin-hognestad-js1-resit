const pContainer = document.querySelector(".about");
const reverseButton = document.querySelector(".reverse-button");

reverseButton.addEventListener("click", () => {
    const pTags = pContainer.children;
    const newPTags = [...pTags];
    newPTags.reverse();
  
 
    pContainer.innerHTML = "";

    newPTags.forEach((pTag) => {
      pContainer.appendChild(pTag);
    });
  });