function getToGetränkeTemplate(indexGetränk) {

     let getränk = getränke[indexGetränk]
    return `
     
    <div class="disches">
      <div class="nameadd">
        <p class="Pdischesname" onclick="buy(${indexGetränk})"><strong>${getränk.name}</strong></p>
        <img onclick="buy(${indexGetränk})"class="addicon" src="./icons/add.png" alt="">
      </div>
        <p class="Pdisches"><strong>Price</strong>: ${getränk.price}€</p>
        <p class="Pdisches" class="description">${getränk.description}</p>
     </div>
    `
    
}

function getTemplateToBasket(indexBas) {
    let basketGetränk = basket[indexBas];
  return `
    <div>
      <p class="trashname"><strong>${basketGetränk.name}</strong> <img onclick="deleteBasket(${indexBas})" class="trash" src="./icons/trash.png" alt=""> </p>
      <span class="iconsX">
      <div>
        <img onclick="minusIndexBasket(${indexBas})" class="iconsQuantityminus" src="./icons/menos.png" alt="">
       </div> 
        <p>x(${basketGetränk.quantity})</p>
        <div>
        <img onclick="buyIndexBasket(${indexBas})" class="iconsQuantityplus" src="./icons/mas.png" alt="">
        </div>
      </span>
      <p class="pricequantity">${basketGetränk.price * basketGetränk.quantity}€</p>

    </div>
    
  `;
}
    
