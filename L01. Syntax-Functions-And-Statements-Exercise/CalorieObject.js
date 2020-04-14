function caloriesInfo(input){
    const products = {};
    for (let i = 0; i < input.length; i+=2) {
        products[input[i]] = +input[i+1];
    }

    return products;
}