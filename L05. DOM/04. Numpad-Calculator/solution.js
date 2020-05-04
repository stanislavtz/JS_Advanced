function solve() {
    const buttons = [...document.querySelectorAll('button')];
    const numbers = buttons.filter(x => isNaN(x.value) === false);
    const operands = buttons.filter(x => isNaN(x.value) === true);
    const clearButton = operands.shift();

    const resultArea = document.querySelector('#resultOutput');
    const inputArea = document.querySelector('#expressionOutput');
    inputArea.textContent = '';

    numbers.forEach(button => button.addEventListener('click', numberAction));
    operands.forEach(button => button.addEventListener('click', symbolAction));
    clearButton.addEventListener('click', clear);

    function numberAction() {
        inputArea.textContent += +this.value;
    }

    function symbolAction() {
        if(this.value === '.') {
            inputArea.textContent += this.value;
        }
        else if (this.value === '=') {
            try {
                let result = eval(inputArea.textContent);
                resultArea.textContent = result;
            } catch (error) {
                resultArea.textContent = 'NaN';
            }
        }
        else {
            inputArea.textContent += ` ${this.value} `;
        }
    }

    function clear() {
        inputArea.textContent = '';
        resultArea.textContent = '';
    }
}


// function solve() {
//     let pad = document.querySelector('div[class="keys"]');
//     let clear = document.querySelector('button[class="clear"]');
//     let expressionOut = document.getElementById('expressionOutput');

//     expressionOut.textContent = '';

//     let resultOut = document.getElementById('resultOutput');
//     console.log(pad)

//     pad.addEventListener('click', (e) => {
//         console.log(e)
//         let currentSymbol = e.target.value;

//         if (+currentSymbol || currentSymbol === '0' || currentSymbol === '.') {
//             expressionOut.textContent += `${currentSymbol}`;
//         }
//         else if (currentSymbol === '=') {
//             try {
//                 let res = eval(expressionOut.textContent);
//                 if (res || res === 0) {
//                     resultOut.textContent = res;
//                 }
//             } catch (error) {
//                 resultOut.textContent = 'NaN';
//             }
//         }
//         else {
//             expressionOut.textContent += ` ${currentSymbol} `;
//         }
//     });

//     clear.addEventListener('click', () => {
//         expressionOut.textContent = '';
//         resultOut.textContent = '';
//     });
// }