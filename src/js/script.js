const body = document.body;
const clipPath = document.querySelector('.clip-path-animation');
const svg = document.querySelector('.svg');
const svgJS = document.querySelector('.svg-js');
const svgCSS = document.querySelector('.svg-css');

clipPath.onclick = () => {
  body.classList.toggle("css");
}

svg.onclick = () => {
  svgJS.classList.toggle("visibility");
  svgCSS.classList.toggle("visibility");
}
