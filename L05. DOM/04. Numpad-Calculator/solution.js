function solve() {
    let pad = document.getElementsByClassName('keys')[0];
    let clear = document.getElementsByClassName('clear')[0];
    let expressionOut = document.getElementById('expressionOutput');
    expressionOut.innerHTML = '';
    
    let resultOut = document.getElementById('resultOutput');
    
    const expresionCollection = [];
    pad.addEventListener('click', (e) => {
        let currentSymbol = e.target.value;
        expresionCollection.push(currentSymbol != ' ' ? currentSymbol : '');
        console.log(currentSymbol);

        if (+currentSymbol || currentSymbol === '0' || currentSymbol === '.') {
            expressionOut.innerHTML += `${currentSymbol}`;
        }
        else if (currentSymbol === '=') {
            try {
                let res = eval(expressionOut.innerHTML);
                if(res || res === 0){
                    resultOut.innerHTML = res;
                }
            } catch (error) {
                resultOut.innerHTML = 'NaN';
            }
        }
        else{
            expressionOut.innerHTML += ` ${currentSymbol} `;
        }
    });

     clear.addEventListener('click', () => {
            expressionOut.innerHTML = '';
            resultOut.innerHTML = '';
            index = 0;
        });
}