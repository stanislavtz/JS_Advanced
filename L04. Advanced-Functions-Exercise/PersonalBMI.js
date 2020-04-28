function personData(...input) {
    const [name, age, weight, height] = input;
    const heigthM = height / 100;
    const BMI = Math.round(weight / heigthM ** 2, 1);

    const personalInfo = {
        age,
        weight,
        height
    };

    const status = (function () {
        if (BMI < 18.5) {
            return 'underweight';
        }
        else if (BMI < 25) {
            return 'normal';
        }
        else if (BMI < 30) {
            return 'overweight'
        }
        return 'obese';
    })();

    const person = {
        name,
        personalInfo,
        BMI,
        status
    }

    if (status === 'obese') {
        person.recommendation = 'admission required';
    }

    return person;
}

console.log(personData('Peter', 29, 75, 182));