class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new TypeError('The budget cannot be a negative number');
        }

        this._budget = value;
    }

    shopping(product) {
        const type = product[0];
        const price = +product[1];

        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }

        if(!this.products.includes(type)) {
            this.products.push(type);
        }

        this.budget -= price;

        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        const name = recipe.recipeName;
        const products = recipe.productsList;
        
        if(products.length < 1) {
            return;
        }

        for (const product of products) {
            if (!this.products.includes(product)) {
                throw new Error('We do not have this product');
            }
        }

        this.dishes.push({ name, products });

        return `${name} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.map(d => d.name).includes(dish)) {
            throw new Error(`We do not have this dish`);
        }

        if (this.guests[name]) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = '';
        const guestsNames = Object.keys(this.guests);

        guestsNames.forEach(name => {
            const dish = this.dishes.filter(d => d.name === this.guests[name]);
            result += `${name} will eat ${this.guests[name]}, which consists of ${dish[0].products.join(', ')}\n`
        });

        return result.trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');


console.log(dinner.showAttendance());
