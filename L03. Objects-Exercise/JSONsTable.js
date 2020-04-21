function solve(input) {
    let data = input.map(v => JSON.parse(v));

    let createTable = (content) => `<table>\n${content}</table>\n`

    let createRow = (content) => `\t<tr>\n${content}\t</tr>\n`

    let createData = (content) => `\t\t<td>${content}</td>\n`
    
    let result = data.reduce((acc, row) => {
        let tdContent = Object.values(row).reduce((ac, td) => {
                ac += createData(td);
                return ac;
        }, '');

        acc += createRow(tdContent);
        return acc;
    }, '')

    return createTable(result);
}

console.log(solve(
    ['{"name":"Pesho","position":"Promenliva","salary":100000}',
     '{"name":"Teo","position":"Lecturer","salary":1000}',
     '{"name":"Georgi","position":"Lecturer","salary":1000}']
))