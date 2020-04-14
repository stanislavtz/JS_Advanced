function addItem() {
    const $inputs = document.querySelectorAll('input')
    const itemText = $inputs[0];
    const itemValue = $inputs[1];
    const $menu = document.querySelector('#menu');

    let option = document.createElement(`option`);
    option.textContent = itemText.value;
    option.value = itemValue.value;
    $menu.appendChild(option);

    itemText.value = '';
    itemValue.value = '';
}