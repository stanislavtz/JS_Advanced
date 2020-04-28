const manager = (function solve() {

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const receipts = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    function report() {
        let result = Object.keys(stock).reduce((acc, element) => {
            acc.push(`${element}=${stock[element]}`);
            return acc;
        }, []);

        return result.join(' ');
    };

    function restock(args) {
        let [, product, qtty] = args;
        stock[product] += +qtty;
        return 'Success';
    };

    function prepare(args) {
        let [, food, qtty] = args;
        let canPrepare = true;
        let currentReceipt = Object.entries(receipts[food]);

        for (const element of currentReceipt) {
            let [ingredient, qt] = element;
            
            if(stock[ingredient] < +qt * +qtty) {
                canPrepare = false;
                return `Error: not enough ${ingredient} in stock`;
            }
        };

        if (canPrepare) {
            currentReceipt.forEach(element => {
                let [ingredient, qt] = element;

                stock[ingredient] -= +qt * +qtty;
            });

            return "Success";
        }
    }

    function solution(input) {
        const args = input.split(' ');

        if (args[0] === 'report') {
            return report();
        }
        else if (args[0] === 'restock') {
            return restock(args);
        }
        else if (args[0] === 'prepare') {
            return prepare(args);
        }
    }

    return solution;
})();

console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));  