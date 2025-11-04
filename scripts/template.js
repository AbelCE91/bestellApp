function getTemplateMenu(indexMenu) {
    let menu = myMenu[indexMenu]
    return `
   
    <div class="disches">
      <p class="name" onclick="buy(${indexMenu})">${menu.name}</p>
      <p><strong>Price</strong> ${menu.price}€</p>
      <p>${menu.description}</p>
     </div>
    `
    
}

function getTemplateToBasket(indexBasket) {
  let box = basket[indexBasket];
  return `
    <div>
      <p class="name">${box.name} </p>
      <p><strong>Price</strong> ${box.price}€</p>
      <p>${box.description}</p>
      <span>x(${box.quantity})</span>
    </div>
  `;
}

function buy(indexMenu) {
  let selectedDish = myMenu[indexMenu];
  let existing = basket.find(element => element.name === selectedDish.name);

  if (existing) {
    existing.quantity += 1; // aumentar contador
  } else {
    basket.push({ ...selectedDish, quantity: 1 }); // añadir nuevo con cantidad 1
  }

  renderBasket();
}
