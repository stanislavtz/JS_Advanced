function printMatrix(input){
    let firstDiagonal = 0;
    let secondDiagonal = 0;
   
    const matrix = input.map(m => m.split(' '));
   
    for (let i = 0; i < matrix.length; i++) {
        firstDiagonal += +matrix[i][i];
        secondDiagonal += +matrix[i][matrix.length -1 - i]
    }

    result = firstDiagonal === secondDiagonal ? newMatrix(matrix) : matrix;

    function newMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (j != i && j != matrix.length - 1 - i){
                    matrix[i][j] = firstDiagonal;
                }
            }
        }

        return matrix;
    }

    return result.map(element => element.join(' ')).join('\n');
}

console.log(printMatrix(
    ['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']

))