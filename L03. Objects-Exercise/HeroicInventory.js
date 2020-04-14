function register(input = []){

    let heroesData = input.reduce((acc, heroArgs) => {
        let [heroName, heroLevel, heroItems] = heroArgs.split(' / ').map(x => x.trim());
        acc.push({name: heroName, level: +heroLevel, items : heroItems ? heroItems.split(', ') : []});
        return acc;
    }, [])
    
    console.log(JSON.stringify(heroesData))
}