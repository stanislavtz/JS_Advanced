class Rat {
    constructor(name) {
        this.name = name;
        this.rats = []
    }

    unite(input) {
        if(input instanceof Rat) {
            this.rats.push(input)
        }
    }

    getRats() {
        return this.rats;
    }

    toString(){
        let result = `${this.name}${this.rats.map(r => `\n##${r.name}`).join('')}`;
        return result;
    }
}