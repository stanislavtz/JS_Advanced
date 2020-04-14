function solve() {
    let button = document.getElementsByTagName('button')[0];
    let input = document.getElementsByTagName('input')[0];
    let lettersTagsCollection = document.getElementsByTagName('li'); 
    let index = -1;

    const alphabetList ="abcdefghijklmnopqrstuvwxyz".toUpperCase();

    [...lettersTagsCollection].forEach(e => {
        e.setAttribute('id', `${alphabetList[++index]}`);
    });
    
    
    button.addEventListener('click', () => {
        let text = input.value;
        if (text) {
            
            let firstLetter = text[0].toUpperCase();
            let currentLine = document.getElementById(`${firstLetter}`);
    
            let currentLineContent = currentLine.innerHTML;
            let name = text[0].toUpperCase() + text.substring(1).toLowerCase();
            if (currentLineContent.length > 0) {
                currentLine.innerHTML += `, ${name}`;
            }
            else{
                currentLine.innerHTML = `${name}`;
            }
    
            input.value = '';
        }
    });
}