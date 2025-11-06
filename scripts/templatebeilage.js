function getTemplateBeulageMenu(indexBeilage) {
    let beilage = beilageMenu[indexBeilage]
    return`

      <div class="disches">
      <div class="nameadd">
        <p class="Pdischesname" onclick="buy(${indexBeilage})"><strong>${beilage.name}</strong></p>
        <img onclick="buy(${indexBeilage})"class="addicon" src="./icons/add.png" alt="">
      </div>
        <p class="Pdisches"><strong>Price</strong>: ${beilage.price}€</p>
        <p class="Pdisches" class="description">${beilage.description}</p>
     </div>
    `
    
}

function getTemplateBeilageBasket(indexBasketBei){
    let basket = beilageBasket[indexBasketBei]
    return`
     <div>
      <p class="trashname"><strong>${basket.name}</strong> <img onclick="deleteBasket(${indexBasketBei})" class="trash" src="./icons/trash.png" alt=""> </p>
      <span class="iconsX">
      <div>
        <img onclick="minusIndexBasket(${indexBasketBei})" class="iconsQuantityminus" src="./icons/menos.png" alt="">
       </div> 
        <p>x(${basket.quantity})</p>
        <div>
        <img onclick="buyIndexBasket(${indexBasketBei})" class="iconsQuantityplus" src="./icons/mas.png" alt="">
        </div>
      </span>
      <p class="pricequantity">${basket.price * basket.quantity}€</p>

    </div>
    `
}