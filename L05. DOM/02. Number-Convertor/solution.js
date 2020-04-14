function solve() {
    let dropDownMenuTo = document.querySelector('#selectMenuTo');

    // binary option created by innerHTML property.
    dropDownMenuTo.innerHTML += `<option value="binary">Binary</option>`;

    // hexadecimal option created step by step, usung commands.
    let hexadecimal = document.createElement("option");
    hexadecimal.setAttribute('value', 'hexadecimal');
    hexadecimal.innerHTML = 'Hexadecimal';
    dropDownMenuTo.appendChild(hexadecimal);

    let button = document.getElementsByTagName('button')[0];
    let input = document.querySelector('#input');
    let result = document.querySelector('#result');

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