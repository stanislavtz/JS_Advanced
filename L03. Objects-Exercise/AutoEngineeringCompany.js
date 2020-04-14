function carPrdoduction(input = []){
    const carCatalog = {};
    input.forEach(element => {
        let [carBrand, carModel, qtty] = element.split(' | ');

        if (!carCatalog[carBrand]) {
            carCatalog[carBrand] = {};
        }

        if(!carCatalog[carBrand][carModel]){
            carCatalog[carBrand][carModel] = 0;
        }

        carCatalog[carBrand][carModel] += +qtty;
    });

    let result = '';
    for (const kkk in carCatalog) {
            result += `${kkk}\n`;
            for (const kk in carCatalog[kkk]) {
                if (carCatalog[kkk].hasOwnProperty(kk)) {
                    result += `###${kk} -> ${carCatalog[kkk][kk]}\n`
                }
            }
    }
    return result;
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