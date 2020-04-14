function calculate(input){
    let num = +input.shift();
    input.forEach(action => {
        switch(action) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num = (num * 0.80).toFixed(1); break;
        }  
        
        console.log(num);
    });
}