function solve() {
   const addBtn = document.querySelector('#add-new button');
   addBtn.addEventListener('click', addNewProduct);

   const filterBtn = document.querySelector('#products .filter button');
   filterBtn.addEventListener('click', filterByCriteria);

   const avlbItemArea = document.querySelector('#products ul');
   avlbItemArea.addEventListener('click', addToBasket);

   const buyButton = document.querySelector('#myProducts button')
   buyButton.addEventListener('click', buyProducts);
   
   let totalPrice = document.querySelectorAll('h1')[1];
   let currentPrice = 0;

   function buyProducts(e) {
      document.querySelector('#myProducts ul').innerHTML = '';
      totalPrice.textContent = `Total Price: 0.00`;
      currentPrice = 0;
   }

   function addToBasket(e) {
      console.log(e)
      if(e.target.localName === 'button') {
         const ul = document.querySelector('#myProducts ul');
         const li = document.createElement('li');
         const strong = document.createElement('strong');

         const item = e.target.parentElement.parentElement.firstChild;
         const qttyContent = e.target.parentElement.parentElement.firstChild.nextElementSibling;

         let qtty = Number(qttyContent.textContent.split(' ')[1]);

         if(qtty > 1) {
            qttyContent.textContent = `Available: ${--qtty}`;
         } else {
            e.target.parentElement.parentElement.outerHTML = '';
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
      const criteria = e.target.previousElementSibling.value;
      const allItems = avlbItemArea.querySelectorAll('span');

      allItems.forEach(item => {
         item.parentElement.style.display = 'block';

         if (criteria && !item.textContent.toLowerCase().includes(criteria.toLowerCase())) {
            item.parentElement.style.display = 'none';
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

      if(newItem.name && newItem.qtty && newItem.price) {
         const ul = document.querySelector('#products ul');
         const li = document.createElement('li');
         ul.appendChild(li);
   
         const span = document.createElement('span');
         span.textContent = newItem.name;
         li.appendChild(span);
   
         const strongQtty = document.createElement('strong');
         strongQtty.textContent = `Available: ${newItem.qtty}`;
         li.appendChild(strongQtty);
   
         const div = document.createElement('div')
         li.appendChild(div);
   
         const strongPrice = document.createElement('strong');
         strongPrice.textContent = `${newItem.price.toFixed(2)}`;
         div.appendChild(strongPrice);
   
         const addToList = document.createElement('button');
         addToList.textContent = 'Add to Client\'s List';
         div.appendChild(addToList)
   
         tokens.forEach(t => t.value = null)
      }
   }
}