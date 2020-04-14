function createSystemDatabase(input = []){
    let db = input.reduce((acc, str) => {
        let [systemName, componentName, subcomponentName] = str.split(' | ').map(x => x.trim()); 

        if (!acc[systemName]) {
            acc[systemName] = {[componentName] : [subcomponentName]};
            return acc;
        }

        if(!acc[systemName][componentName]){
            acc[systemName][componentName] = [subcomponentName];
            return acc;
        }

        acc[systemName][componentName].push(subcomponentName);
        return acc;
    }, {})

    //console.log(db)

    let sortedDb = Object.keys(db)
        .sort((x, y) => x.localeCompare(y))
        .sort((a, b) => 
            Object.keys(db[b]).length - Object.keys(db[a]).length)
           
    //console.log(sortedDb)

        
    sortedDb.forEach(element => {
        console.log(element);
        
        for (const key in db[element]) {
            const ele = db[element][key];
            console.log(`|||${key}\n||||||${ele.join('\n||||||')}`)
        }
    });
}

createSystemDatabase(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
)
