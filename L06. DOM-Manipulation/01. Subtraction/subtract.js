function subtract() {
    const numbers = document.getElementsByTagName('input');

    const firstNum = numbers[0].value;
    const secondNum = numbers[1].value;
    const subtraction = +firstNum - +secondNum;
    
    const result = document.querySelector('div div');

    result.textContent = subtraction;
}