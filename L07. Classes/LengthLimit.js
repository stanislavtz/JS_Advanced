class Stringer{
    constructor(str, length){
        this.innerString = str;
        this.innerLength = length;
    };
    
    increase(length){
        this.innerLength += +length;
    }

    decrease(length){
        this.innerLength = this.innerLength - +length > 0 ? this.innerLength -= +length : 0;
    } 

    toString(){
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        }

        return `${this.innerString.slice(0, this.innerLength)}...`
    }
}