function solve() {
   const $input = document.querySelector('#searchField');
   const $button = document.querySelector('#searchBtn');
   const $allElements = document.querySelectorAll('tbody tr');
   
   $button.addEventListener('click', search);
   function search(e){
      [...$allElements].forEach(line => {
         if (line.textContent.split(`${$input.value}`).length > 1) {
            line.setAttribute('class', 'select');
         }
         else{
            line.removeAttribute('class');
         }
      });

      $input.value = null;
   }
}