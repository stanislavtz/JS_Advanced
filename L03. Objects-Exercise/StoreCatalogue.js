function catalog(input){
  let parsedData = input.reduce((acc, productArgs) => {
    const currentProduct = {name: '', price: 0};
    let [name, price] = productArgs.split(' : ').map(x => x.trim());
    
    if (!acc[name[0]]) {
      acc[name[0]] = []
    }

    currentProduct.name = name;
    currentProduct.price = +price;
    acc[name[0]].push(currentProduct);

    acc[name[0]].sort((a, b) => a.name.localeCompare(b.name));

    return acc;
  }, {});

  Object.keys(parsedData).sort().map(x => {
    console.log(`${x}` + `\n${parsedData[x].map(e => ` ${e.name}: ${e.price}`).join('\n')}`)
  });
}

catalog(
  ['Banana : 2',
  'Rubic\'s Cube : 5',
  'Raspberry P : 4999',
  'Rolex : 100000',
  'Rollon : 10',
  'Rali Car : 2000000',
  'Pesho : 0.000001',
  'Barrel : 10']
  )