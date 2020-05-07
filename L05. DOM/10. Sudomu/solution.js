function solve() {
    const buttons = document.querySelectorAll('td button');
    const checkBtn = buttons[0];
    const clearBtn = buttons[1];

    checkBtn.addEventListener('click', (e) => {
        let size = [...document.querySelectorAll('tbody tr')].length;
        let cells = [...document.querySelectorAll('input')].map(e => e.value);
        let set = new Set(cells);
        
        let isSolved = true;

        if (set.size !== 3) {
            isSolved = false; 
        }

        const matrix = [];
        for (let i = 0; i < cells.length; i += Math.sqrt(cells.length)) {
            matrix.push(cells.slice(i, i + Math.sqrt(cells.length)));
            
        }

        const rotatedMatrix = [];
        for (let i = 0; i < matrix.length; i++) {
            rotatedMatrix[i] = [];
            for (let j = 0; j < matrix[i].length; j++) {
                rotatedMatrix[i][j] = matrix[j][i];
            }
        }

        for (let i = 0; i < size; i++) {
            let mySet = new Set(matrix[i]);
            console.log(mySet)
            if (mySet.size !== 3) {
                isSolved = false;
                break;
            }
        }

        if (isSolved) {
            for (let i = 0; i < size; i++) {
                let mySet = new Set(rotatedMatrix[i]);
                if (mySet.size !== 3) {
                    isSolved = false;
                    break;
                }
            }
        }

        if (!isSolved) {
            document.querySelector('table').style.border = "2px solid red";
            document.getElementById('check').style.color = 'red';
            document.getElementById('check').children[0].textContent = "NOP! You are not done yet...";
        }
        else {
            document.querySelector('table').style.border = "2px solid green";
            document.getElementById('check').style.color = 'green';
            document.getElementById('check').children[0].textContent = "You solve it! Congratulations!";
        }
        checkBtn.disabled = true;
        clearBtn.disabled = false;
    });

    clearBtn.addEventListener('click', () => {
        [...document.querySelectorAll('input')].map(e => e.value = null);
        document.querySelector('table').style.border = null;
        document.getElementById('check').children[0].textContent = "";
        clearBtn.disabled = true;
        checkBtn.disabled = false;
    })
}