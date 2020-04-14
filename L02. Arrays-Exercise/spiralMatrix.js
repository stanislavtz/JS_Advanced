function generateMatrix(n) {
    const total = n * n;
    const matrix = [];

    for (let i = 0; i < n; i++) {
        matrix.push([]);        
    }

    let x = 0;
    let y = 0;
    let step = 0;

    for (let i = 0; i < total;) {
        while (y + step < n) {
            i++;
            matrix[x][y] = i;
            y++;
        }
        y--;
        x++;

        while (x + step < n) {
            i++;
            matrix[x][y] = i;
            x++;
        }
        x--;
        y--;

        while (y >= step) {
            i++;
            matrix[x][y] = i;
            y--;
        }
        y++;
        x--;
        step++;

        while (x >= step) {
            i++;
            matrix[x][y] = i;
            x--;
        }
        x++;
        y++;
    }

    return matrix.map(x => x.join(' ')).join('\n');
}

console.log(generateMatrix(4))