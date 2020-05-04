function solve() {
    const button = document.getElementsByTagName('button')[0];
    const input = document.getElementsByTagName('input')[0];
    const lettersList = document.getElementsByTagName('li'); 
    
    catalogLettersInitialize();
    
    button.addEventListener('click', () => {
        const catalog = generateCatalog(lettersList);    
        let text = input.value;
        if (text) {
            let firstLetter = text[0].toUpperCase();
            let name = firstLetter + text.substring(1).toLowerCase();
            let currentLine = document.getElementById(`${firstLetter}`);

            catalog[firstLetter].push(name);
            currentLine.textContent = catalog[firstLetter].join(', ');
            input.value = '';
        }
    });

    function generateCatalog(list) {
        return [...list].reduce((acc, element) => {
            if (!acc[element.id]) {
                acc[element.id] = [];
            }
            if (element.textContent) {
                acc[element.id].push(element.textContent);
            }
            return acc;
        }, {});
    }

    function catalogLettersInitialize() {
        let index = 65;
        [...lettersList].forEach(line => {
            line.setAttribute('id', `${String.fromCharCode(index++)}`);
        });
    }
}