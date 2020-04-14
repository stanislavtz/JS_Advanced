class Extensible{
    constructor(){
        Extensible.prototype.id = Extensible.prototype.id === undefined ? 0 : Extensible.prototype.id + 1;
        this.id = Extensible.prototype.id;
    }

    extend(template) {
        for (const key in template) {
            const element = template[key];
            if (typeof element === 'function') {
                Extensible.prototype[key] = element;
            }
            else{
                this[key] = element;
            }
        }
    }
}
