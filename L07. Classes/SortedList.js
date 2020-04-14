class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }
    
    add (element) {
        this.collection.push(element);
        this.size = this.collection.length;
        return this.collection.sort((a, b) => a - b);
    }

    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1)
        }
        this.size = this.collection.length;
    }

    get(index) {
        if (index >= 0 && index < this.collection.length){
            return this.collection[index];
        }
    }
}