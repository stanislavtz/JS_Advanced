function produceJuice(input = []){
    const juiceData = [];
    const orderedJuiceData = [];
    input.forEach(element => {
        let [juiceName, quantity] = element.split(' => ');
        const juice = {name: juiceName, qtty: +quantity};

        if (!juiceData.includes(x => x.name === juice.name)) {
            juiceData.push(juice);
        }
        juice.qtty += +quantity;
        
        if (juice.qtty >= 1000) {
            juice.producedBottles = Math.floor(juice.qtty / 1000);
            if (!orderedJuiceData.find(x => x.name === juice.name)) {
                orderedJuiceData.push(juice);
            }
        }
    });

    orderedJuiceData.forEach(element => {
        if (element.producedBottles != null) {
            console.log(`${element.name} => ${element.producedBottles}`);
        }
    })
}

(produceJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
))