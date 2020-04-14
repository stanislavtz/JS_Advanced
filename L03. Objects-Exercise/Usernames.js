function userNamesCatalog(input = []){
    const sorted = input.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length)

    const mySet = new Set(sorted)

    for (const iterator of mySet) {
        console.log(`${iterator}`)
    }
}