function print(input){
    let step = +input.pop()
    let arr = [];    
    for (let i = 0; i < input.length; i += step) {
        arr.push(input[i]);
    }
    return arr.join('\n');
}