function solution(){
    const stock = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 }
    
    const receipts = {
        'apple': { 'carbohydrate': 1, 'flavour': 2 },
        'lemonade': { 'carbohydrate': 10, 'flavour': 20 },
        'burger': { 'carbohydrate': 5, 'fat': 7, 'flavour': 3 },    
        'eggs': { 'protein': 5, 'fat': 1, 'flavour': 1 },    
        'turkey': { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10 }        
    };

    return function prepareFood(input){
        const args = input.split(' ');

        function report(){
           let result = Object.keys(stock).reduce((acc, element) => {
                acc.push(`${element}=${stock[element]}`)
                return acc;
            }, []);
            
            return result.join(' ')
        }

        function restock(){
            let product = args[1];
            let qtty = +args[2];
            stock[product] += qtty;
            return 'Success';
        }

        function prepare(){
            let food = args[1];
            let qtty = +args[2];
            let canPrepare = true;
            let currentProduct;
            let foodProducts = Object.keys(receipts[food]);
            for (let i = 0; i < foodProducts.length; i++) {
                const product = foodProducts[i];

                if (stock[product] < receipts[food][product] * qtty) {
                    canPrepare = false;
                    currentProduct = product
                    break;
                }
            }

            if(canPrepare) {
                foodProducts.forEach(product => {
                    stock[product] -= receipts[food][product] * qtty;
                });
                return 'Success';
            }
            
            return `Error: not enough ${currentProduct} in stock`;
        }

        if(args[0] === 'report'){
            return report();
        }
        else if(args[0] === 'restock'){
            return restock();
        }
        else if(args[0] === 'prepare'){
            return prepare();
        }
    }
}

let manager = solution();

console.log(manager("restock carbohydrate 10"));  
console.log(manager("restock flavour 10"));  
console.log(manager("prepare apple 1"));  
console.log(manager("restock fat 10"));  
console.log(manager("prepare burger 1"));  
console.log(manager("report"));  
manager("restock flavour 10");  
manager("prepare apple 1");  
manager("restock fat 10");
manager("prepare burger 1");  
manager("report");  