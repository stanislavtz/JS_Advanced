function addItem() {
    const itemText = document.querySelector('#newItemText');
    const itemValue = document.querySelector('#newItemValue');
    const menu = document.querySelector('#menu');

    let option = document.createElement(`option`);
    option.textContent = itemText.value;
    option.value = itemValue.value;
    menu.appendChild(option);

    itemText.value = '';
    itemValue.value = '';
}