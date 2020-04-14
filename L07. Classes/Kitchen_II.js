class Kitchen {
    menu = {};
    productsInStock = {};
    actionsHistory = [];

    constructor(budget) {
        this.budget = +budget;
    }

    loadProducts(products = []) {
        products.forEach(pInfo => {
            let name = pInfo.split(' ')[0];
            let qtty = +pInfo.split(' ')[1];
            let price = +pInfo.split(' ')[2];

            let isBudget = this.budget - price >= 0;
            let isAdded = false;

            if (isBudget) {
                if (!this.productsInStock[name]) {
                    this.productsInStock[name] = 0;
                }
                this.productsInStock[name] += qtty;
                this.budget -= price;
                isAdded = true;
            }
                
            let result = isAdded ? `Successfully loaded ${qtty} ${name}` : `There was not enough money to load ${qtty} ${name}`;

            this.actionsHistory.push(result);
        });

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts = [], price ) {
        if (!this.menu[meal]) {
            this.menu[meal] = {
                products: neededProducts, 
                price: price
            }
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        }

        return `The ${meal} is already in our menu, try something different.`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        const result = [];
        for (const key in this.menu) {
            const element = this.menu[key];
            result.push(`${key} - $ ${element.price.toFixed(2)}`);
        }

        return result.join('\n');
    }

    makeTheOrder(meal) {
        if (!Object.keys(this.menu).includes(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let canPrepareMeal = true;

        const currentMeal = this.menu[meal];
        currentMeal.products.forEach(product => {
            let pName = product.split(' ')[0];
            let pQtty = +product.split(' ')[1];

            if (!this.productsInStock[pName] || this.productsInStock[pName] - pQtty < 0) {
                canPrepareMeal = false;
            }
        });

        if (canPrepareMeal) {
            currentMeal.products.forEach(product => {
                let pName = product.split(' ')[0];
                let pQtty = +product.split(' ')[1];
                
                this.productsInStock[pName] -= pQtty;
            });
            
            this.budget += +currentMeal.price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentMeal.price}.`;
        }
        
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
    }
}


let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 10 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('froYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.9));
console.log(kitchen.addToMenu('froYo', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.9));

console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('sdf'));
console.log(kitchen.makeTheOrder('froYo'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('froYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.productsInStock);
