function solve() {
   const inputs = document.querySelectorAll('section input');
   const [author, title, category] = inputs;
   const content = document.querySelector('#content');

   const articlesSection = document.querySelector('main section');
   const archiveSectionUl = document.querySelector('.archive-section ul');

   const createBtn = document.querySelector('button[class = "btn create"]');
   createBtn.addEventListener('click', createArticle);

   const archive = []

   function createArticle(e) {
      e.preventDefault();

      const article = document.createElement('article');

      const h1 = document.createElement('h1');
      h1.textContent = title.value;

      const s1 = document.createElement('strong');
      s1.textContent = category.value;
      const p1 = document.createElement('p');
      p1.textContent = 'Category: ';
      p1.appendChild(s1);

      const s2 = document.createElement('strong');
      s2.textContent = author.value;
      const p2 = document.createElement('p');
      p2.textContent = 'Creator: ';
      p2.appendChild(s2);

      const p3 = document.createElement('p');
      p3.textContent = content.value;

      const div = document.createElement('div');
      div.className = 'buttons';

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn delete';
      deleteBtn.textContent = 'Delete';
      
      const archiveBtn = document.createElement('button');
      archiveBtn.className = 'btn archive';
      archiveBtn.textContent = 'Archive';

      deleteBtn.addEventListener('click', deleteArticle);
      archiveBtn.addEventListener('click', archiveArticle);

      div.appendChild(deleteBtn);
      div.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);
      article.appendChild(div);

      articlesSection.appendChild(article);

      author.value = '';
      title.value = '';
      category.value = '';
      content.value = '';

      function deleteArticle(e) {
         e.target.parentElement.parentElement.remove();
      }

      function archiveArticle(e) {
         archiveSectionUl.textContent = '';

         const currentTitle = e.target.parentElement.parentElement.firstChild;

         const li = document.createElement('li');
         li.textContent = currentTitle.textContent;

         archive.push(li);
         const sorted = archive.sort((a, b) => a.textContent.localeCompare(b.textContent));

         sorted.forEach(element => {
            archiveSectionUl.appendChild(element);
         });

         e.target.parentElement.parentElement.remove();
      }
   }
}
