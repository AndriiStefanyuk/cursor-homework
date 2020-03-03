let contDiv = document.createElement("div");
console.log(contDiv);
contDiv.setAttribute("id", "cont");
contDiv.style.width = "250px";
contDiv.style.height = "250px";
contDiv.style.display = "flex";
contDiv.style.flexWrap = "wrap";
document.body.appendChild(contDiv);
console.log(contDiv);
let randomColor = function() {
  return Math.floor(Math.random() * 256);
};
function generateBlocks() {
  for (let i = 0; i < 25; i++) {
    let newDiv = document.createElement("div");
    console.log(newDiv);
    newDiv.style.width = "50px";
    newDiv.style.height = "50px";
    newDiv.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    cont.appendChild(newDiv);
  }
}

function generateBlocksInterval() {
  contDiv.innerHTML = "";
  generateBlocks();
}
generateBlocks();
setInterval(() => {
  generateBlocksInterval();
}, 1000);
