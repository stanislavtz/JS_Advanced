function extract(input = []){
    let result = input.reduce((acc, element) => {
        if (acc[acc.length - 1] < element) {
            acc.push(element);
        }
        return acc;
    }, [input[0]]);
    
    return result.join('\n');
}