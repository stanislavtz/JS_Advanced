function solve() {
   const $products = document.getElementsByClassName('product');
   const $textArea = document.getElementsByTagName('textarea')[0];
   const productList = [];

   let totalCost = 0;
   $textArea.textContent = '';

   Array.from($products).forEach(product => {
      const productTitle = product.querySelector('.product-title');
      const productPrice = product.querySelector('.product-line-price');

      const name = productTitle.textContent;
      const price = productPrice.textContent;

      const $button = product.querySelector('.add-product');
      $button.addEventListener('click', () => {
         $textArea.textContent += `Added ${name} for ${price} to the cart.\n`;

         if (!productList.includes(name)) {
            productList.push(name);
         }
         
         totalCost += +price;
      })
   });
   
   const $allButtons = document.getElementsByTagName('button');
   const $checkOut = document.querySelector('.checkout');

   $checkOut.addEventListener('click', disableButtons);
   
   function disableButtons() {
      result = productList.join(', ')
      $textArea.textContent += `You bought ${result} for ${totalCost.toFixed(2)}.`;
      Array.from($allButtons).forEach(button => {
         button.disabled = true;
      });
   };
}