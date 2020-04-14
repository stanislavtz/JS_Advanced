function printInfo(...input){
    const obj = {}

    createObject();

    printSortedObject();

    function printSortedObject() {
        Object.entries(obj)
            .sort((a, b) => {
                const [typeA, qttyA] = a;
                const [typeB, qttyB] = b;
                return qttyB - qttyA;
            }).forEach(el => console.log(`${el[0]} = ${el[1]}`));
    }

    function createObject() {
        input.forEach(el => {
            console.log(`${typeof (el)}: ${el}`);

            if (!obj[typeof (el)]) {
                obj[typeof (el)] = 0;
            }
            
            ++obj[typeof (el)];
        });
    }
}

