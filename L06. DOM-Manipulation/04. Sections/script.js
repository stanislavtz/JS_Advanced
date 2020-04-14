function create(words) {
   words.forEach(element => {
      const currentEl = document.createElement('div');
      const currentP = document.createElement('p');

      currentP.textContent = element;
      currentP.style.display = 'none'

      currentEl.appendChild(currentP);
      
      currentEl.addEventListener('click', showParagraph);
      function showParagraph(){
         return currentP.style.display = 'block';
      }

      document.getElementById('content').appendChild(currentEl);
   });
}