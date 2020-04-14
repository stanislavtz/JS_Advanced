function print(input){
    let step = +input.pop();
    return input.reduce((ac, el, i) => {
        i % step === 0 ? ac.push(el) : null;
        return ac;
    }, []).join('\n');
}