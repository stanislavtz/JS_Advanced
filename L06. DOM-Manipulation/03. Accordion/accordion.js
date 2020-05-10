function toggle() {
    const button = document.querySelector('span.button');
    const p = document.getElementById('extra');

    if (button.textContent === 'More') {
        button.textContent ='Less';
        p.style.display = 'block';
    }
    else{
        button.textContent ='More';
        p.style.display = 'none';
    }
}