let displayNumber;

document.getElementById("reset").onclick = () => {
  document.getElementById("myH1").textContent = 0;
};

document.getElementById("increase").onclick = () => {
  displayNumber = document.getElementById("myH1").textContent;
  displayNumber = Number(displayNumber);
  displayNumber++;
  document.getElementById("myH1").textContent = displayNumber;
};

document.getElementById("decrease").onclick = () => {
  displayNumber = document.getElementById("myH1").textContent;
  displayNumber = Number(displayNumber);
  displayNumber--;
  document.getElementById("myH1").textContent = displayNumber;
};
