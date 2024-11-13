// JS to keep dither from breaking at different pixel ratios
const ditherImages = document.querySelectorAll('.ditherImage');

function setDitherImageSizesToPixelRatio() {
  let size = 8 / window.devicePixelRatio * (isPreview ? 2 : 1);
  console.log('new size ', size);
  Array.from(ditherImages).forEach(img => {
    img.setAttribute('width', size);
    img.setAttribute('height', size);
  })
}

setDitherImageSizesToPixelRatio();
window.addEventListener("resize", setDitherImageSizesToPixelRatio);