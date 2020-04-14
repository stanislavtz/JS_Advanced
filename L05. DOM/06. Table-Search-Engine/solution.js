function solve() {
   const $allElements = document.querySelectorAll('tbody tr');
   console.log($allElements);

   const $button = document.querySelector('button');
   const $input = document.getElementById('searchField');
   
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
