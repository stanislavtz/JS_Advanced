function attachEventsListeners() {
    const $buttons = document.querySelectorAll('input[type=button]');
    const inputs = document.querySelectorAll('input[type=text]');
    const $days = inputs[0];
    const $hours = inputs[1];
    const $minutes = inputs[2];
    const $seconds = inputs[3];

    [...$buttons].forEach(button => {
        button.addEventListener('click', timeConvert);
        function timeConvert(e) {
            if ($days.value) {
                $hours.value = $days.value * 24;
                $minutes.value = $days.value * 24 * 60;
                $seconds.value = $days.value * 24 * 3600;
            }
            else if($hours.value){
                $days.value = $hours.value / 24;
                $minutes.value = $hours.value * 60;
                $seconds.value = $hours.value * 3600;
            }
            else if($minutes.value){
                $days.value = $minutes.value / 24 / 60;
                $hours.value = $minutes.value / 60;
                $seconds.value = $minutes.value * 60;
            }
            else if($seconds.value){
                $days.value = $seconds.value / 24 / 3600;
                $hours.value = $seconds.value / 3600;
                $minutes.value = $seconds.value / 60;
            }
        }
    });
}