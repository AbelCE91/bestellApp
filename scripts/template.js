function getTemplateMenu(indexMenu) {
    let menu = myMenu[indexMenu]
    return `
     
    <div class="disches">
      <div class="nameadd">
        <p class="Pdischesname" onclick="buy(${indexMenu})"><strong>${menu.name}</strong></p>
        <img onclick="buy(${indexMenu})"class="addicon" src="./icons/add.png" alt="">
      </div>
        <p class="Pdisches"><strong>Price</strong>: ${menu.price}€</p>
        <p class="Pdisches" class="description">${menu.description}</p>
     </div>
    `
    
}

function getTemplateToBasket(indexBas) {
    let box = basket[indexBas];
  return `
    <div>
      <p class="trashname"><strong>${box.name}</strong> <img onclick="deleteBasket(${indexBas})" class="trash" src="./icons/trash.png" alt=""> </p>
      <span class="iconsX">
      <div>
        <img onclick="minusIndexBasket(${indexBas})" class="iconsQuantityminus" src="./icons/menos.png" alt="">
       </div> 
        <p>x(${box.quantity})</p>
        <div>
        <img onclick="buyIndexBasket(${indexBas})" class="iconsQuantityplus" src="./icons/mas.png" alt="">
        </div>
      </span>
      <p class="pricequantity">${box.price * box.quantity}€</p>

    </div>
    
  `;
}

