function subtract() {
    const firstNum = document.querySelector('#firstNumber');
    const secondNum = document.querySelector('#secondNumber');
    const result = document.querySelector('div div');
    
    result.textContent = +firstNum.value - +secondNum.value;
}