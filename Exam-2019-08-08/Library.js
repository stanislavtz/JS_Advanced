class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type) {
        if (!Object.keys(this.subscriptionTypes).includes(type)) {
            throw new TypeError(`The type ${type} is invalid`);
        }

        const person = this._findSubscriber(subscriberName);
        if (!person) {
            const person = {
                name,
                type,
                books: []
            }

            this.subscribers.push(person);
        } else if (person.type !== type) {
            person.type = type;
        }

        return person;
    }

    unsubscribe(name) {
        if (!this.subscribers.map(p => p.name).includes(name)) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        const index = this.subscribers.map(p => p.name).indexOf(name);

        return this.subscribers.splice(index, 1);
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        const person = this._findSubscriber(subscriberName);
        if (!person) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        if (person.type === "normal") {

        } else if (person.type === "special") {

        } else if (person.type === "vip") {
            
        }
    }

    showInfo() {

    }

    _findSubscriber(name) {
        return this.subscribers.find(p => p.name === name);
    }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');
lib.subscribe('Peter', 'vip');

// lib.unsubscribe('John', 'special');
console.log(lib.subscribers)