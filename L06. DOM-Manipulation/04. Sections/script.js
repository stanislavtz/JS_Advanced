function create(words) {
   const content = document.querySelector('#content');
   
   words.forEach(word => {
      const div = document.createElement('div');
      const p = document.createElement('p');

      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);

      content.appendChild(div);
   });

   content.addEventListener('click', (e) => {
      console.log(e)
      if(e.target.localName === "div")
      e.target.firstChild.style.display = 'block';
   });
}