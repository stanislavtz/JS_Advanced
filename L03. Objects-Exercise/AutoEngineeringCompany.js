function carPrdoduction(input){
    const catalog = input.reduce((acc, element) => {
        const [brand, model, qtty] = element.split(' | ').map(x => x.trim());
        
        if(!acc.hasOwnProperty(brand)) {
            acc[brand] = {};
        }

        if(!acc[brand].hasOwnProperty(model)) {
            acc[brand][model] = 0;
        }

        acc[brand][model] += +qtty;

        return acc
    }, {});

    let result = '';
    for (const brand in catalog) {
            result += `${brand}\n`;
            for (const model in catalog[brand]) {
                result += `###${model} -> ${catalog[brand][model]}\n`
            }
    }
    return result.trim();
}

console.log(carPrdoduction([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Audi | Q7 | 1000',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]))