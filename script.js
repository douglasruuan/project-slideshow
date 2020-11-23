let totalSlider = document.querySelectorAll('.slider--item').length;
let comecarSlider = 0;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlider})`
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

function paraAnterior() {
    comecarSlider--;
    if (comecarSlider < 0) {
        comecarSlider = totalSlider - 1;
    }
    atualizarMargin();
}

function paraProxima() {
    comecarSlider++;
    if (comecarSlider > (totalSlider - 1)) {
        comecarSlider = 0;
    }
    atualizarMargin();
}

function atualizarMargin() {
    let sliderItemTamanho = document.querySelector('.slider--item').clientWidth;
    let novaMargin = (comecarSlider * sliderItemTamanho);
    document.querySelector('.slider--width').style.marginLeft = `-${novaMargin}px`;
}
setInterval(paraProxima, 2000);