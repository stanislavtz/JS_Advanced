const solution = {
    add: function (...input){
        let [vA, vB] = input;
        return [vA[0] + vB[0], vA[1] + vB[1]];
    },

    multiply: function (...input){
        let [vA, scalar] = input;
        return [vA[0] *= scalar, vA[1] *= scalar];
    },

    length : function (...input){
        let [vector] = input
        return Math.sqrt(vector[0] ** 2 + vector[1] ** 2);
    },

    dot : function (...input){
        let [vA, vB] = input;
        return vA[0] * vB[0] + vA[1] * vB[1];
    },

    cross : function (...input){
        let [vA, vB] = input;
        return vA[0] * vB[1] - vA[1] * vB[0];
    }
}

console.log(solution.length([3, -4]))
console.log(solution.multiply([3.5, -2], 2))
// function vectorCalculations(...input){
    
//     console.log(solution.add(input))
//     console.log(solution.multiply(input))
//     console.log(solution.dot(input))
//     console.log(solution.cross(input))
// }
 
// vectorCalculations([3, 7], [1, 0])