function compareSequences(input = []) {
    const arrays = input.reduce((acc, element, i) => {
        let arr = JSON.parse(element).sort((x, y) => y - x);
        acc.set(`[${arr.join(', ')}]`, arr.length);
        return acc;
    }, new Map());

    let output = [...arrays]
        .sort((x, y) => x[1] - y[1])
        .map(x => x[0])
       

    console.log(output.join('\n'))
}