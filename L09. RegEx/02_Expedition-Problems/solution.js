function solve() {
    const key = document.getElementById('string').value;
    const text = document.getElementById('text').value;
    const result = document.getElementById('result');
    let message = text.split(key).map(x=>x.trim())[1];
    
    let re = /(?<dir>(north|east)).*?(?<wholePart>(\d{2})).*?,[^,].*?(?<decimalPart>(\d{6}))/gmi;

    let longitudes = [];
    let latitudes = [];

    let temp = re.exec(text);
    while (temp) {
        if(temp[1].toLowerCase() === 'east'){
            latitudes.push(temp);
        }
        else{
            longitudes.push(temp);
        }

        temp = re.exec(text);
    }

    let longitudeArgs = longitudes.pop();
    let latitudeArgs = latitudes.pop();

    let longitude = `${longitudeArgs[3]}.${longitudeArgs[5]} N`;
    let latitude = `${latitudeArgs[3]}.${latitudeArgs[5]} E`;
    const output = `
    <p>${longitude}</p>
    <p>${latitude}</p>
    <p>Message: ${message}</p>`;

    result.innerHTML = output;
}