function solution(input, str){
    return str === 'asc' ? input.sort((a, b) => a - b) : input.sort((a, b) => b - a)
}

console.log(solution([14, 7, 17, 6, 8], 'desc'))