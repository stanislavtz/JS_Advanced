function solve() {
    let buttons = document.querySelectorAll('td button');
    
    buttons[0].addEventListener('click', () => {
        let size = [...document.querySelectorAll('tbody tr')].length;
        let cells = [...document.querySelectorAll('input')].map(e => e.value);
        const matrix = [];
        
        for (let i = 0; i < size; i++) {
           matrix.push(...[cells.slice(i * size, (i + 1) * size)]);
        }
    
        let rotatedMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            rotatedMatrix[i] = [];
            for (let j = 0; j < matrix[i].length; j++) {
                rotatedMatrix[i][j] = matrix[j][i];
            }
        }

        console.log(matrix, '\n', rotatedMatrix);

        let isSolved = true;
    
        for (let i = 0; i < size; i++) {
            let mySet = new Set(matrix[i]);
            console.log(mySet)
            if (mySet.size < 9) {
                isSolved = false;
                break;
            }
        }

        console.log(isSolved);
    
        if (isSolved) {
            for (let i = 0; i < size; i++) {
                let mySet = new Set(rotatedMatrix[i]);
                if (mySet.size != 9) {
                    isSolved = false;
                    break;
                }
            }
        }

        console.log(isSolved);


        if (!isSolved) {
            document.querySelector('table').style.border = "2px solid red";
            document.getElementById('check').style.color = 'red';
            document.getElementById('check').children[0].innerHTML = "ПРОБВАЙ ПАК!!!!";
        }
        else{
            document.querySelector('table').style.border = "2px solid green";
            document.getElementById('check').style.color = 'green';
            document.getElementById('check').children[0].innerHTML = "ТИ СИ ПОБЕДИТЕЛ";
        }
    });

    buttons[1].addEventListener('click', () => {
        [...document.querySelectorAll('input')].map(e => e.value = null);
        document.querySelector('table').style.border = null;
        document.getElementById('check').style.color = 'red';
        document.getElementById('check').children[0].innerHTML = "";
    })
}