function solve() {
    const input = document.querySelector('#input');
    const button = document.querySelector('button');
    const result = document.querySelector('#result');
    const dropDownMenuTo = document.querySelector('#selectMenuTo');

    dropDownMenuTo.innerHTML += 
        `<option value="binary">Binary</option>
         <option value="hexadecimal">Hexadecimal</option>`;

    button.addEventListener('click', () => {
        if(dropDownMenuTo.value === 'binary'){
            result.value = Number(input.value).toString(2);
        }
        else if(dropDownMenuTo.value === 'hexadecimal'){
            result.value = Number(input.value).toString(16).toUpperCase();
        }
        else{
            result.value = '';
        }
    });
}