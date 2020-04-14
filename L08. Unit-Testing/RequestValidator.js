function result(obj = {}){
    const inputKeys = Object.keys(obj);

    const properties = ['method', 'uri', 'version', 'message'];
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let spChar = ['<', '>', '\\', '&', '\'', '"',];


    properties.forEach(el => {
        if(!inputKeys.includes(el.toLowerCase())){
            if (el.toUpperCase() === 'URI') {
                throw new Error(`Invalid request header: Invalid ${el.toUpperCase()}`);
            };
            throw new Error(`Invalid request header: Invalid ${el[0].toUpperCase()}${el.substring(1)}`);
        }
    });

    inputKeys.forEach(el => {
        if (el === 'method') {
            if (!methods.includes(obj[el])) {
                let message = `Invalid request header: Invalid ${el[0].toUpperCase()}${el.substring(1)}`;
                throw new Error(message);
            }
        }
        else if (el === 'uri') {
            let re = /[A-Za-z.\*]+/;
            if (!re.test(obj[el]) || obj[el].split(' ').length > 1) {
                let message = `Invalid request header: Invalid ${el.toUpperCase()}`;
                throw new Error(message);
            }
        }
        else if (el === 'version') {
            if (!versions.includes(obj[el])) {
                let message = `Invalid request header: Invalid ${el[0].toUpperCase()}${el.substring(1)}`;
                throw new Error(message);
            }
        }
        else if (el === 'message') {
            spChar.forEach(char => {
                if (obj[el].includes(char)) {
                    let message = `Invalid request header: Invalid ${el[0].toUpperCase()}${el.substring(1)}`;
                    throw new Error(message);
                }
            });
        }
    });

    return obj;
}

let obj = {
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
};

//console.log(result(obj));
// expect(() => result(obj)).to.throw(Error).which.has.property('message', 'Invalid request header: Invalid URI');
// obj.uri = '';
// console.log(result(obj));

// expect(() => result(obj)).to.throw(Error).which.has.property('message', 'Invalid request header: Invalid URI');
obj.uri = 'gib ';
console.log(result(obj));

// expect(() => result(obj)).to.throw(Error).which.has.property('message', 'Invalid request header: Invalid URI');