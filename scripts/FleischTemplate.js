function getTemplateToFleisch(indexFleisch) {
let fleisch = fleischMenu[indexFleisch]
    return`
   <div class="disches">
      <div class="nameadd">
        <p class="Pdischesname" onclick="buy(${indexFleisch})"><strong>${fleisch.name}</strong></p>
        <img onclick="buy(${indexFleisch})"class="addicon" src="./icons/add.png" alt="">
      </div>
        <p class="Pdisches"><strong>Price</strong>: ${fleisch.price}€</p>
        <p class="Pdisches" class="description">${fleisch.description}</p>
     </div>
    `
    
}


function getTemplateToBasket(indexBas) {
    let fleischbasket = basket[indexBas];
  return `
    <div>
      <p class="trashname"><strong>${fleischbasket.name}</strong> <img onclick="deleteBasket(${indexBas})" class="trash" src="./icons/trash.png" alt=""> </p>
      <span class="iconsX">
      <div>
        <img onclick="minusIndexBasket(${indexBas})" class="iconsQuantityminus" src="./icons/menos.png" alt="">
       </div> 
        <p>x(${fleischbasket.quantity})</p>
        <div>
        <img onclick="buyIndexBasket(${indexBas})" class="iconsQuantityplus" src="./icons/mas.png" alt="">
        </div>
      </span>
      <p class="pricequantity">${fleischbasket.price * fleischbasket.quantity}€</p>

    </div>
    
  `;

}