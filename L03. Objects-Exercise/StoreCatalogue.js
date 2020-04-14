function catalog(input = []){
  let parsedData = input.reduce((acc, productArgs) => {
    let [name, price] = productArgs.split(' : ').map(x => x.trim());
    
    if (!acc[name[0]]) {
      acc[name[0]] = []
    }

    acc[name[0]].push(`${name}: ${price}`);
    acc[name[0]].sort();

    return acc;
  }, {});

  Object.keys(parsedData).sort().map(x => {
    console.log(x + `\n  ${parsedData[x].join('\n  ')}`)
  });
}

catalog([
  'Fridge : 1500',
  'Appricot : 20.4',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10'
])