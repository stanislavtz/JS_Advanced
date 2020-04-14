function createTableOfPeople(input = []) {
    let data = input.map(v => JSON.parse(v));

    let createTable = (content) => `<table>\n${content}</table>\n`

    let createRow = (content) => `\t<tr>\n${content}\t</tr>\n`

    let createData = (content) => `\t\t<td>${content}</td>\n`
    
    let result = data.reduce((accRow, row) => {
        let tdContent = Object.values(row).reduce((tdAcc, td) => {
                return tdAcc + createData(td);
        }, '');

        return accRow + createRow(tdContent)
    }, '')

    return createTable(result);
}