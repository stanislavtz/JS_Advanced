const add = (function () {
    let sum = 0;
   
    return  function result(num){
        sum += num;
        result.toString = () => sum;
        
        return result;
    };
})();

console.log(add(1)(5)(-5).toString());