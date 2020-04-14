function solve() {
   const $products = document.getElementsByClassName('product');
   let $textArea = document.getElementsByTagName('textarea')[0];
   $textArea.textContent = '';

   const productList = [];
   let totalCost = 0;

   Array.from($products).forEach(product => {
      const productTitle = product.getElementsByClassName('product-title');
      const productPrice = product.getElementsByClassName('product-line-price');

      const name = productTitle[0].textContent;
      const price = productPrice[0].textContent;

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
      $textArea.textContent += `You bought ${Array.from(productList).join(', ')} for ${totalCost.toFixed(2)}.`;
      Array.from($allButtons).forEach(button => button.disabled = true);
   };
}