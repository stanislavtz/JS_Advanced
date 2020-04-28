const solution = (function () {
    function add(...input) {
        const [[vXa, vYa], [vXb, vYb]] = input;
        return [vXa + vXb, vYa + vYb];
    }

    function multiply(...input) {
        const [[vXa, vYa], multiplyer] = input;
        return [vXa * multiplyer, vYa * multiplyer];
    }

    function length(...input) {
        const [vXa, vYa] = input[0];
        return Math.sqrt(vXa ** 2 + vYa ** 2);
    }

    function dot(...input) {
        const [[vXa, vYa], [vXb, vYb]] = input;
        return vXa * vXb + vYa * vYb;
    }

    function cross(...input) {
        const [[vXa, vYa], [vXb, vYb]] = input;
        return vXa * vYb - vXb * vYa;
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([2, 3], [2, -1]));
console.log(solution.cross([3, 7], [1, 0]));