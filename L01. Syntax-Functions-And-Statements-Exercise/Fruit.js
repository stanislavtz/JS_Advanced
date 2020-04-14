function calculateMoney(fruitType, weight, price){
    let weightInKg = weight / 1000;
    let neededMoney = weightInKg * price;
    return `I need $${neededMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`
}