function solve(input) {
    const coords = {
        x1: Number(input[0]),
        y1: Number(input[1]),
        x2: Number(input[2]),
        y2: Number(input[3]),
        x0: 0,
        y0: 0
    }

    function validatePoints(x1, y1, x2, y2) {
        let result = Math.sqrt((Math.abs(x1 - x2)) ** 2 + (Math.abs(y1 - y2)) ** 2);
        return result % 1 === 0 ? 'valid' : 'invalid';
    }

    let outPut = `
         {${coords.x1}, ${coords.y1}} to {${coords.x0}, ${coords.y0}} is ${validatePoints(coords.x1, coords.y1, coords.x0, coords.y0)}\n` + 
        `{${coords.x2}, ${coords.y2}} to {${coords.x0}, ${coords.y0}} is ${validatePoints(coords.x2, coords.y2, coords.x0, coords.y0)}\n` +
        `{${coords.x1}, ${coords.y1}} to {${coords.x2}, ${coords.y2}} is ${validatePoints(coords.x1, coords.y1, coords.x2, coords.y2)}
        `;

    return outPut.trim();
}