function toggle() {
    const button = document.getElementsByTagName('span')[0];
    const p = document.getElementById('extra');
    if (button.textContent === 'More') {
        button.textContent ='Less';
        p.style.display = 'block'
    }
    else{
        button.textContent ='More';
        p.style.display = 'none'
    }
}