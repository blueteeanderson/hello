function randGen() {
  return Math.floor(Math.random() * 256);
}

function GetRGB() {
  let r = randGen();
  let g = randGen();
  let b = randGen();

  return `rgb(${r},${g},${b})`;
}
const hello = document.querySelectorAll(".letter");

let spin = setInterval(function () {
  for (let letter of hello) {
    letter.style.color = GetRGB();
  }
}, 500);
