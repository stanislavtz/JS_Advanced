function rotate(input){
    let coefitient = input.pop();
    for (let i = 1; i <= coefitient % input.length ; i++) {
        let ele = input.pop();
        input.unshift(ele);      
    }

    return input.join(' ')
}