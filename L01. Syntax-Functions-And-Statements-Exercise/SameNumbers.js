function checkNumber(input){
    const numCollection = String(input).split("");
    const numSet = new Set(numCollection);

    const areSame = numSet.size === 1 ? true: false;
    const sum = numCollection.reduce((a, b) => Number(a) + Number(b));

    return `${areSame}\n${sum}`;
}