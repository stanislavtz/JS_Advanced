function solve(input) {
    const rows = input[0];
    const cols = input[1];
    const starCoordinates = {
        x: input[2],
        y: input[3]
    }

    const matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            matrix[row][col] = 
                Math.max(Math.abs(row - starCoordinates.x), Math.abs(col - starCoordinates.y)) + 1;
        }
    }

    return matrix.map(x => x.join(' ')).join('\n');
}