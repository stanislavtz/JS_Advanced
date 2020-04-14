class Kitchen {
    menu = [];
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
        const mealReceipt = {};

        neededProducts.forEach(element => {
            let pName = element.split(' ')[0];
            let pQtty = +element.split(' ')[1];
            mealReceipt[pName] = pQtty;
        });

        class Meal {
            constructor(name, mealReceipt, price){
                this.name = name;
                this.mealReceipt = mealReceipt;
                this.price = +price;
            }
        }

        const currentMeal = new Meal(meal, mealReceipt, price);

        const searchedMeal = this.menu.find(m => m.name === currentMeal.name);
        if (searchedMeal) {
            return `The ${currentMeal.name} is already in our menu, try something different.`
        }
        this.menu.push(currentMeal);
        return `Great idea! Now with the ${currentMeal.name} we have ${this.menu.length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        if (this.menu.length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }
        return `${this.menu.map(m => `${m.name} - $ ${m.price.toFixed(2)}`).join('\n')}`;
    }

    makeTheOrder(meal) {
        let currentMeal = this.menu.find(m => m.name === meal);
        if (!currentMeal) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        const receipt = currentMeal.mealReceipt;
        let canMakeMeal = true;
        for (const key in receipt) {
            if (!Object.keys(this.productsInStock).includes(key) || this.productsInStock[key] - receipt[key] < 0) {
                canMakeMeal = false;
                break;
            }
        }

        if (!canMakeMeal) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        for (const key in this.productsInStock) {
            this.productsInStock[key] -=  receipt[key];
        }

        this.budget += currentMeal.price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentMeal.price}.`;
    }
}


let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 10 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('fronYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.9));

console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('sdf'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.productsInStock);
