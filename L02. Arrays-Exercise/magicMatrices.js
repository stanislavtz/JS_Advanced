function magicMatrix(input) {
    const rotatedInput = input[0].map((cal, i) => input.map(row => row[i]));
    const sumFirstRow = input[0].reduce((acc, value) => acc + value);

    function checkRowsSum(matrix, sumFirstRow) {
        let isMagic = true;

        for (let i = 0; i < matrix.length; i++) {
            let currentSum = matrix[i].reduce((a, v) => a + v);
            if (currentSum !== sumFirstRow) {
                isMagic = false;
                break;
            }
        }

        return isMagic;
    }

    return checkRowsSum(input, sumFirstRow) && checkRowsSum(rotatedInput, sumFirstRow) ? true : false;
}