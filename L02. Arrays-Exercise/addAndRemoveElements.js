function solution(input){
    const arr = input.reduce((a, el, i) => {
        el === 'add' ? a.push(i + 1) : a.pop();
        return a;
    }, []);

    return arr.length === 0 ? 'Empty' : arr.join('\n');
}