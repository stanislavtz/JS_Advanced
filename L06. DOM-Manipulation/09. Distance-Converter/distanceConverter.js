function attachEventsListeners() {
    const divs = document.querySelectorAll('div');
    const fromDist = document.querySelector('#inputDistance');
    const toDist = document.querySelector('#outputDistance');
    const inputDistance = document.querySelector('#inputUnits');
    const outputDistance = document.querySelector('#outputUnits');
    
    divs[0].addEventListener('click', (e) => {
        let inMeters;
        if (e.target.id === "convert") {
            toDist.disabled = false;

            if (inputDistance.value === "km") {
                inMeters = +fromDist.value * 1000;
            }
            else if (inputDistance.value === "m") {
                inMeters = +fromDist.value;
            }
            else if (inputDistance.value === "cm") {
                inMeters = +fromDist.value * 0.01;
            }
            else if (inputDistance.value === "mm") {
                inMeters = +fromDist.value * 0.001;
            }
            else if (inputDistance.value === "mi") {
                inMeters = +fromDist.value * 1609.34;
            }
            else if (inputDistance.value === "yrd") {
                inMeters = +fromDist.value * 0.9144;
            }
            else if (inputDistance.value === "ft") {
                inMeters = +fromDist.value * 0.3048;
            }
            else if (inputDistance.value === "in") {
                inMeters = +fromDist.value * 0.0254;
            }


            if (outputDistance.value === "km") {
                toDist.value = inMeters / 1000;
            }
            else if (outputDistance.value === "m") {
                toDist.value = inMeters;
            }
            else if (outputDistance.value === "cm") {
                toDist.value = inMeters / 0.01;
            }
            else if (outputDistance.value === "mm") {
                toDist.value = inMeters / 0.001;
            }
            else if (outputDistance.value === "mi") {
                toDist.value = inMeters / 1609.34;
            }
            else if (outputDistance.value === "yrd") {
                toDist.value = inMeters / 0.9144;
            }
            else if (outputDistance.value === "ft") {
                toDist.value = inMeters / 0.3048;
            }
            else if (outputDistance.value === "in") {
                toDist.value = inMeters / 0.0254;
            }
        }
    });
}