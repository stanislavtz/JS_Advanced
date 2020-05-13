class Rat {
    constructor(name) {
        this.name = name;
        this.ratsCollection = [];
    }

    unite(input) {
        if(input instanceof Rat) {
            this.ratsCollection.push(input)
        }
    }

    getRats() {
        return this.ratsCollection;
    }

    toString(){
        let result = `${this.name}${this.ratsCollection.map(r => `\n##${r.name}`).join('')}`;
        return result;
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
