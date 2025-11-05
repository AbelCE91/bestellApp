function getTemplateMenu(indexMenu) {
    let menu = myMenu[indexMenu]
    return `
     
    <div class="disches">
      <div class="nameadd">
        <p class="Pdischesname" onclick="buy(${indexMenu})"><strong>${menu.name}</strong></p>
        <img onclick="buy(${indexMenu})"class="addicon" src="./icons/add.png" alt="">
      </div>
        <p class="Pdisches"><strong>Price</strong> ${menu.price}€</p>
        <p class="Pdisches" class="description">${menu.description}</p>
     </div>
    `
    
}

function getTemplateToBasket(indexBasket) {
  let box = basket[indexBasket];
  return `
    <div>
      <p class="trashname"><strong>${box.name}</strong> <img onclick="deleteBasket(${indexBasket})" class="trash" src="./icons/trash.png" alt=""> </p>
      <span class="iconsX">
      <div>
        <img onclick="minusIndexBasket(${indexBasket})" class="iconsQuantityminus" src="./icons/menos.png" alt="">
       </div> 
        <p>x(${box.quantity})</p>
        <div>
        <img onclick="buyIndexBasket(${indexBasket})" class="iconsQuantityplus" src="./icons/mas.png" alt="">
        </div>
      </span>
    </div>
  `;
}

function deleteBasket(indexBasket) {
  basket.splice(indexBasket, 1)
  
  renderBasket();
}

function buyIndexBasket(indexBasket) {
  basket[indexBasket].quantity+=1;
   renderBasket();
}

function minusIndexBasket(indexBasket) {
  basket[indexBasket].quantity -=1;
   renderBasket();
}

function minusIndexBasket(indexBasket) {
  if (basket[indexBasket].quantity > 1) {
    basket[indexBasket].quantity -= 1;
  }
  
  renderBasket();
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

