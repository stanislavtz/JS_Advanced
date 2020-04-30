const add = (function () {
    let sum = 0;
    let result = (num) => {
            sum += num;
            result.valueOf = () => sum;
            return result;
        };
    return result;
})();

console.log(add(1)(5)(-2).valueOf());