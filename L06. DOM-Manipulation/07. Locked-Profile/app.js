function lockedProfile() {
    const $profiles = document.querySelectorAll('.profile');
    [...$profiles].forEach(profile => {
        const lockRadio = profile.querySelectorAll('input[value]')[0];
        const unlockRadio = profile.querySelectorAll('input[value]')[1];

        unlockRadio.addEventListener('click', () => {
            lockRadio.removeAttribute('checked')
            unlockRadio.setAttribute('checked', '');
        })

        lockRadio.addEventListener('click', () => {
            unlockRadio.removeAttribute('checked')
            lockRadio.setAttribute('checked', '');
        })
        
        const $button = profile.getElementsByTagName('button')[0];
        const hiddenField = profile.querySelector('div[id]');

        $button.addEventListener('click', action);
        function action(){
            if (unlockRadio.hasAttribute('checked')) {
                if ($button.textContent === 'Show more') {
                    hiddenField.style.display = 'block';
                    $button.textContent = 'Hide it';
                }
                else{
                    hiddenField.style.display = 'none';
                    $button.textContent = 'Show more';
                }
            }
        }
    });
}