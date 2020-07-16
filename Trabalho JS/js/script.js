window.addEventListener('load', start);
let red;
let green;
let blue;
let rangeglobal = document.querySelectorAll('.range');
function start() {
  rangeglobal[0].addEventListener('input', conversao);
  rangeglobal[1].addEventListener('input', conversao);
  rangeglobal[2].addEventListener('input', conversao);
}

function conversao() {
  red = rangeglobal[0].value;
  green = rangeglobal[1].value;
  blue = rangeglobal[2].value;

  let valorrange = document.querySelectorAll('.valorrange');
  let paleta = document.querySelector('#paleta');
  let span = document.querySelector('#legenda');

  valorrange[0].value = red;
  valorrange[1].value = green;
  valorrange[2].value = blue;

  paleta.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  span.textContent = `rgb(${red}, ${green}, ${blue})`;
}
// };
// });
