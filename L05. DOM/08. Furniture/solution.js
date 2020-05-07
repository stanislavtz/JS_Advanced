function solve() {
  const generateBtn = document.querySelectorAll('button')[0];
  const buyBtn = document.querySelectorAll('button')[1];

  const inputArea = document.querySelectorAll('textarea')[0];
  const infoArea = document.querySelectorAll('textarea')[1];

  const productsArea = document.querySelector('tbody');

  generateBtn.addEventListener('click', generateItems);
  function generateItems(e) {
    const items = JSON.parse(inputArea.value);

    items.forEach(item => {
      productsArea.innerHTML += `<tr><td><img src=${item.img}></td><td><p>${item.name}</p><td><p>${item.price}</p></td><td><p>${item.decFactor}</p></td><td><input type="checkbox"/></td></tr>`;
    });  
    
    inputArea.value = '';
  }

  buyBtn.addEventListener('click', buyItems);
  function buyItems() {
    const purchasedItems = Array.from(productsArea.querySelectorAll('tr'))
      .filter(el => el.lastElementChild.lastElementChild.checked);
    
    const itemsToAdd = purchasedItems.map(x => x.cells[1].textContent.trim());
    const totalPrice = purchasedItems.map(x => +x.cells[2].textContent).reduce((a, b) => a+b);
    const averageDF = purchasedItems.map(x => +x.cells[3].textContent).reduce((a, b) => a+b) / purchasedItems.map(x => +x.cells[3].textContent).length;
   
    infoArea.textContent = `Bought furniture: ${itemsToAdd.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDF}`
  }
}