function produceJuice(array){
    const juices = {};
    const bottledJuices = {};
    let juiceTemplate = (name, bottles) => `${name} => ${bottles}`;

    array.forEach(element => {
        const [name, qtty] = element.split(' => ');

        if(!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }
        juices[name] += +qtty;

        let possibleBottles = juices[name] / 1000;
        if(possibleBottles >= 1) {
            if(!bottledJuices.hasOwnProperty(name)){
                bottledJuices[name] = 0;
            }

            bottledJuices[name] += Math.floor(possibleBottles);
            juices[name] -= Math.floor(possibleBottles) * 1000;
        }
    });

    for (const juice in bottledJuices) {
        console.log(juiceTemplate(juice, bottledJuices[juice]));
    }
}

produceJuice(
    ['Kiwi => 234',
     'Pear => 2345',
     'Watermelon => 3456',
     'Kiwi => 4567',
     'Pear => 5678',
     'Watermelon => 6789']
)