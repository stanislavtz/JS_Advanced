/* 
    Solution, using Event Delegation.
*/

function lockedProfile() {
    const main = document.querySelector('#main');
    main.addEventListener('click', (e) => {
        const element = e.target;
        if (element.localName === 'button') {
            const lockRt = element.parentElement.querySelector('input[value="lock"]');
            const profileInfo = element.previousElementSibling;
            if (!lockRt.checked) {
                if (!profileInfo.style.display || profileInfo.style.display === "none") {
                    profileInfo.style.display = "block";
                    element.textContent = "Hide it";
                }
                else {
                    profileInfo.style.display = "none";
                    element.textContent = "Show more";
                }
            }
        }
    });
}

/* 
    Solution using Array collection of profiles
*/
// function lockedProfile() {
//     const profiles = document.querySelectorAll('.profile');
//     [...profiles].forEach(profile => {
//         const lockRadio = profile.querySelector('input[value="lock"]');
//         const unlockRadio = profile.querySelector('input[value="unlock"]');

//         unlockRadio.addEventListener('click', () => {
//             unlockRadio.setAttribute('checked', '');
//             lockRadio.removeAttribute('checked');
//         })

//         lockRadio.addEventListener('click', () => {
//             lockRadio.setAttribute('checked', '');
//             unlockRadio.removeAttribute('checked');
//         })

//         const button = profile.querySelector('button');
//         const hiddenField = profile.querySelector('div');

//         button.addEventListener('click', showMore);
//         function showMore(){
//             if (unlockRadio.hasAttribute('checked')) {
//                 if (button.textContent === 'Show more') {
//                     hiddenField.style.display = 'block';
//                     button.textContent = 'Hide it';
//                 }
//                 else{
//                     hiddenField.style.display = 'none';
//                     button.textContent = 'Show more';
//                 }
//             }
//         }
//     });
// }