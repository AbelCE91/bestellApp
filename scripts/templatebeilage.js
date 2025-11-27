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

function getTemplateToBasket(indexBasketBei){
    let baskets = basket[indexBasketBei]
    return`
     <div>
      <p class="trashname"><strong>${baskets.name}</strong> <img onclick="deleteBasket(${indexBasketBei})" class="trash" src="./icons/trash.png" alt=""> </p>
      <span class="iconsX">
      <div>
        <img onclick="minusIndexBasket(${indexBasketBei})" class="iconsQuantityminus" src="./icons/menos.png" alt="">
       </div> 
        <p>x(${baskets.quantity})</p>
        <div>
        <img onclick="buyIndexBasket(${indexBasketBei})" class="iconsQuantityplus" src="./icons/mas.png" alt="">
        </div>
      </span>
      <p class="pricequantity">${baskets.price * baskets.quantity}€</p>

    </div>
    `
}

function getTemplateWarenkorb() {
  return`
   <div class="warenkorbIcons">
      <h2 class="warenkorbText">Warenkorb</h2>
    </div>
  `
}

function getLieferkostenToTemplate() {
return`
  <br><p class="basket-overprice">+5€ Lieferkosten (ab 20€ Einkauf kostenfrei)</p>`
}

function getTemplatetoTotalBestellen(total) {
  return`
      <div>
        <hr>
        <p class="basket-total"><strong>Total:</strong> ${total.toFixed(2)}€</p>
        <button class="bestellbutton" onclick="bestellen()">bestellen</button>
      </div>
    `
  
}

function getBestellungToTemplate() {
  return`<p class="bestell-confirmation">✅ Bestellung erfolgreich!!</p>`
}