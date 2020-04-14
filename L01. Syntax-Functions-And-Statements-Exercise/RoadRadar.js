function speedLimit([speed, area]) {
    const limits = {
        'city': 50,
        'residential': 20,
        'interstate': 90,
        'motorway': 130
    }

    let diff = +speed - limits[area];

    if (diff <= 0) {
        return;
    }
    else if (diff <= 20) {
        return `speeding`;
    }
    else if (diff <= 40) {
        return `excessive speeding`;
    }
    
    return `reckless driving`;
}