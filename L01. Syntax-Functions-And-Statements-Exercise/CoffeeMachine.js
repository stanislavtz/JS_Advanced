function calculateIncome(orders){
    let totalIncome = 0;
    
    const prices = {
        coffeCaffeine: 0.80,
        coffeDecaf: 0.90,
        tea: 0.80
    };

    const beverage = {
        typeOfDrink: '',
        price: 0,
        milk: false,
        sugar: false
    }

    orders.forEach(order => {
        const orderDetails = order.split(', ');
        let insertedCoins = Number(orderDetails[0]);
        let totalCosts = 0;

        beverage.typeOfDrink = orderDetails[1];

        if(beverage.typeOfDrink === 'coffee') {
            defineCoffeeParameters(orderDetails);   
        }
        else{
            defineTeaParameters(orderDetails);  
        }

        totalCosts = calculateBeverageTotalCosts(beverage, totalCosts);

        orderResult(totalCosts, insertedCoins);
    });

    function orderResult(totalCosts, insertedCoins) {
        let diff = insertedCoins - totalCosts;
        if (diff >= 0) {
            console.log(`You ordered ${beverage.typeOfDrink}. Price: $${totalCosts.toFixed(2)} Change: $${diff.toFixed(2)}`);
            totalIncome += totalCosts;
        }
        else {
            console.log(`Not enough money for ${beverage.typeOfDrink}. Need $${Math.abs(diff).toFixed(2)} more`);
        }
    }

    function calculateBeverageTotalCosts(beverage, totalCosts) {
        totalCosts += beverage.milk ? beverage.price + Number((beverage.price * 0.10).toFixed(1)) : beverage.price;
        totalCosts += beverage.sugar === 0 ? 0 : 0.10;

        return totalCosts;
    }

    function defineTeaParameters(orderDetails) {
        beverage.price = prices.tea;
        beverage.milk = orderDetails[2] == 'milk' ? true : false;
        beverage.sugar = beverage.milk ? orderDetails[3] : orderDetails[2];
    }

    function defineCoffeeParameters(orderDetails) {
        beverage.price = orderDetails[2] === 'caffeine' ? prices.coffeCaffeine : prices.coffeDecaf;
        beverage.milk = orderDetails[3] === 'milk' ? true : false;
        beverage.sugar = beverage.milk ? Number(orderDetails[4]) : Number(orderDetails[3]);
    }

    return `Income Report: $${totalIncome.toFixed(2)}`;
}