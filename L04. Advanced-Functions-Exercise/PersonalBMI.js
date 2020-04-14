function createPerson(...input){
    const person = {};
    const [name, age, weight, height] = input
    const heigthM = height / 100;
    person.name = name;
    person.personalInfo = {
        age,
        weight,
        height
    }
    person.BMI = Math.round(weight / heigthM ** 2, 1);
    person.status = status();
    if (person.status === 'obese') {
        person.recommendation = 'admission required';
    }

    function status (){
        const value = person.BMI;

        if (value < 18.5) {
            return "underweight";
        }
        else if(value < 25){
            return 'normal';
        }
        else if(value < 30){
            return 'overweight';
        }
        else{
            return 'obese'
        }
    }

    return person;
}

console.log(createPerson("Peter", 29, 75, 182))
console.log(createPerson('Honey Boo Boo', 9, 57, 137))