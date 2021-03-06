function solution(input) {
    const arr = input.reduce((acc, ele) => {
        acc.push(JSON.parse(ele).sort((a, b) => +b - +a));
        return acc;
    }, []);

    const sorted = arr.sort((a, b) => a.length - b.length);

    let output = new Set(sorted.map(x =>  `[${x.join(', ')}]`));

    output.forEach( el => console.log(el));
}

solution(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
     "[10, 1, -17, 0, 2, 13]",
     "[4, -3, 3, -2, 2, -1, 1, 0]"]
);

console.log();

solution(
    ["[7.14, 7.180, 7.339, 80.099]",
     "[7.339, 80.0990, 7.140000, 7.18]",
     "[7.339, 7.180, 7.14, 80.099]"]
)