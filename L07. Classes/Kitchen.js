class Kitchen {
    menu = {};
    productsInStock = {};
    actionsHistory = [];

    constructor(budget) {
        this.budget = +budget;
    }

    loadProducts(products) {
        products.forEach((product) => {
            const [name, qtty, price] = product.split(' ');

            if (this.budget - +price < 0) {
                this.actionsHistory.push(`There was not enough money to load ${qtty} ${name}`);
            }
            else {
                if (!this.productsInStock[name]) {
                    this.productsInStock[name] = 0;
                }
                this.productsInStock[name] += +qtty;
                this.budget -= +price;
                this.actionsHistory.push(`Successfully loaded ${qtty} ${name}`);
            }
        });

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (this.menu[meal]) {
            return `The ${meal} is already in our menu, try something different.`
        }

        this.menu[meal] = {
            products: neededProducts,
            price: +price
        };
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`

    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        const result = [];
        for (const meal in this.menu) {
            result.push(`${meal} - $ ${this.menu[meal].price}\n`)
        }

        return result.join('');
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        const receipt = {};
        this.menu[meal].products.forEach(element => {
            const [name, qtty] = element.split(' ');
            if (!receipt[name]) {
                receipt[name] = 0;
            }
            receipt[name] += +qtty;
        });

        for (const name in receipt) {
            if (!this.productsInStock[name] || this.productsInStock[name] < receipt[name]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        for (const name in receipt) {
            this.productsInStock[name] -= receipt[name];
        }

        this.budget += this.menu[meal].price;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}


const kitchen = new Kitchen(1000);

console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder('frozenYaaaogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));