function createSystemDatabase(input) {
    let db = input.reduce((acc, str) => {
        let [systemName, componentName, subcomponentName] = str.split(' | ').map(x => x.trim());

        if (!acc[systemName]) {
            acc[systemName] = {};
        }

        if (!acc[systemName][componentName]) {
            acc[systemName][componentName] = [];
        }

        acc[systemName][componentName].push(subcomponentName);

        return acc;
    }, {})

    let sortedDb = Object.keys(db)
        .sort((x, y) => x.localeCompare(y))
        .sort((a, b) => Object.keys(db[b]).length - Object.keys(db[a]).length);

    sortedDb.forEach(systemName => {
        let sortedComponents = Object.keys(db[systemName])
            .sort((a, b) => db[systemName][b].length - db[systemName][a].length);

        console.log(systemName);
        for (const componentName of sortedComponents) {
            const subcomponents = db[systemName][componentName];
            console.log(`|||${componentName}\n||||||${subcomponents.join('\n||||||')}`)
        }
    });
}

createSystemDatabase([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreB | A24',
    'Lambda | CoreB | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
)
