function calculateTime(steps, footPrint, speed){
    let distanceInMeters = steps * footPrint;
    let countOfRests = Math.floor(distanceInMeters / 500);
    let timeWithoutRests = (distanceInMeters / (speed * 1000));
    let totalTime = timeWithoutRests * 60 + countOfRests;
    let totalTimeInSeconds = totalTime * 60;
    let result = new Date(null, null, null, null, null, Math.ceil(totalTimeInSeconds));

    return result.toTimeString().split(' ')[0];
}