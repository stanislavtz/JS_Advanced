let Extensible = (function () {
    let i = 0;

    class Extensible {
       constructor() {
           this.id = i++;
       }
        
        extend(template) {
            for (const key in template) {
                const element = template[key];
                if (typeof element === 'function') {
                    Extensible.prototype[key] = element;
                }
                else {
                    this[key] = element;
                }
            }
        }
    }

    return Extensible;
})()


// class Extensible {
//     constructor() {
//         Extensible.prototype.id = Extensible.prototype.id === undefined ? 0 : Extensible.prototype.id + 1;
//         this.id = Extensible.prototype.id;
//     }

//     extend(template) {
//         for (const key in template) {
//             const element = template[key];
//             if (typeof element === 'function') {
//                 Extensible.prototype[key] = element;
//             }
//             else {
//                 this[key] = element;
//             }
//         }
//     }
// }



let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);