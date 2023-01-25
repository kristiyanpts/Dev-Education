function create(words) {
  for (let word of words) {
    let newElem = document.createElement("div");
    let para = document.createElement("p");
    para.style.display = "none";
    para.textContent = word;
    newElem.appendChild(para);
    newElem.addEventListener("click", () => {
      para.style.dispay = "block";
    });
    let content = document.getElementById("content");
    content.appendChild(newElem);
  }
}
