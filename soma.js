var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var enegativo = false;

function checaNegativo() {
    if (currentNumber <= -1 ) {
        enegativo = true;
        currentNumberWrapper.style.color = "red";
    }
}
function checaPositivo() {
    if (currentNumber >= 0) {
        enegativo = false;
        currentNumberWrapper.style.color = "black";
    }
}
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    checaPositivo();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    checaNegativo();
}
function zeraContador() {
    currentNumber = 0;
    currentNumberWrapper.innerHTML = 0;
    enegativo = false;
    currentNumberWrapper.style.color = "black";
}

