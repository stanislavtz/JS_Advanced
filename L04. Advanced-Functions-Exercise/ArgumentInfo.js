function printInfo(...input) {

    function printSortedObject() {
        Object.entries(obj)
            .sort((a, b) => {
                return b[1] - a[1];
            })
            .forEach(el => output.push(`${el[0]} = ${el[1]}`));
    }

    function createObject() {
        input.forEach(el => {
            let type;

            if (typeof el === 'object' && Object.values(el).length) {
                type = typeof el;
                output.push(`${type}:`);
                
                Object.values(el).forEach(e => {
                    fillObjectData(typeof e);
                })
            }
            else {
                type = typeof el;
                output.push(`${type}: ${el}`);
                fillObjectData(type);
            }
        });
    }

    function fillObjectData(type) {
        if (!obj[type]) {
            obj[type] = 0;
        }
        obj[type]++;
    }

    const obj = {};
    const output = [];

    createObject();
    printSortedObject();

    output.forEach(e => console.log(e));
}

printInfo(42, 'cat', [], undefined, { name: "Pesho", age: 25, like: () => console.log("swimming")})