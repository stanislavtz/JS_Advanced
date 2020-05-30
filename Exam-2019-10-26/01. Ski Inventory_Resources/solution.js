function solve() {
   const addBtn = document.querySelector('#add-new button');
   addBtn.addEventListener('click', addNewProduct);

   const filterBtn = document.querySelector('.filter button');
   const criteria = document.querySelector('#filter');
   filterBtn.addEventListener('click', filterByCriteria);

   const availableItems = document.querySelector('#products ul');
   availableItems.addEventListener('click', addToBasket);

   const buyButton = document.querySelector('#myProducts button')
   buyButton.addEventListener('click', buyProducts);

   let totalPrice = document.querySelectorAll('h1')[1];
   let currentPrice = 0;

   function buyProducts(e) {
      document.querySelector('#myProducts ul').textContent = '';
      totalPrice.textContent = `Total Price: 0.00`;
      currentPrice = 0;
   }

   function addToBasket(e) {
      if (e.target.localName === 'button') {
         const ul = document.querySelector('#myProducts ul');
         const li = document.createElement('li');
         const strong = document.createElement('strong');

         const item = e.target.parentElement.parentElement.firstChild;
         const qttyContent = e.target.parentElement.parentElement.firstChild.nextElementSibling;

         let qtty = Number(qttyContent.textContent.split(' ')[1]);

         qttyContent.textContent = `Available: ${--qtty}`;

         if (qtty < 1) {
            e.target.parentElement.parentElement.remove();
         }

         li.textContent = item.textContent;
         strong.textContent = e.target.previousSibling.textContent;

         li.appendChild(strong);
         ul.appendChild(li);

         currentPrice += Number(e.target.previousSibling.textContent);
         totalPrice.textContent = `Total Price: ${currentPrice.toFixed(2)}`;
      }
   }

   function filterByCriteria(e) {
      Array.from(availableItems.children).forEach(item => {
         if (item.firstChild.textContent.includes(criteria.value)) {
            item.style.display = 'block';
         } else {
            item.style.display = 'none';
         }
      });
   }

   function addNewProduct(e) {
      e.preventDefault();

      const tokens = document.querySelectorAll('#add-new input');
      const newItem = {
         name: tokens[0].value,
         qtty: Number(tokens[1].value),
         price: Number(tokens[2].value)
      }

      const productsList = document.querySelectorAll('#products span');

      if (newItem.name && newItem.qtty && newItem.price && ![...productsList].map(x => x.textContent).includes(newItem.name)) {

         const ul = document.querySelector('#products ul');
         const li = document.createElement('li');
         ul.appendChild(li);

         const span = document.createElement('span');
         span.textContent = newItem.name;
         li.appendChild(span);

         const strongQtty = document.createElement('strong');
         strongQtty.textContent = `Available: ${newItem.qtty}`;
         li.appendChild(strongQtty);

         const div = document.createElement('div');
         li.appendChild(div);

         const strongPrice = document.createElement('strong');
         strongPrice.textContent = `${newItem.price.toFixed(2)}`;
         div.appendChild(strongPrice);

         const addToList = document.createElement('button');
         addToList.textContent = "Add to Client's List";
         div.appendChild(addToList);

      } else if ([...productsList].map(x => x.textContent).includes(newItem.name)) {

         const index = [...productsList].map(x => x.textContent).indexOf(newItem.name);
         const element = productsList[index];

         element.nextSibling.textContent = `Available: ${newItem.qtty}`;
         element.nextSibling.nextSibling.firstChild.textContent = `${newItem.price.toFixed(2)}`;
      }

      tokens.forEach(t => t.value = null);
   }
}