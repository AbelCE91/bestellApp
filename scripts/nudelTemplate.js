function getToTemplateNudel(indexMenuNudel) {
    let nudeln = nudelMenu[indexMenuNudel]
    return`
    
  <div class="disches">
      <div class="nameadd">
        <p class="Pdischesname" onclick="buy(${indexMenuNudel})"><strong>${nudeln.name}</strong></p>
        <img onclick="buy(${indexMenuNudel})"class="addicon" src="./icons/add.png" alt="">
      </div>
        <p class="Pdisches"><strong>Price</strong>: ${nudeln.price}€</p>
        <p class="Pdisches" class="description">${nudeln.description}</p>
     </div>
    
    `
    
}

function getTemplateToBasket(indexBasket) {
    let boxnudel = basket[indexBasket];
  return `
    <div>
      <p class="trashname"><strong>${boxnudel.name}</strong> <img onclick="deleteBasket(${indexBasket})" class="trash" src="./icons/trash.png" alt=""> </p>
      <span class="iconsX">
      <div>
        <img onclick="minusIndexBasket(${indexBasket})" class="iconsQuantityminus" src="./icons/menos.png" alt="">
       </div> 
        <p>x(${boxnudel.quantity})</p>
        <div>
        <img onclick="buyIndexBasket(${indexBasket})" class="iconsQuantityplus" src="./icons/mas.png" alt="">
        </div>
      </span>
      <p class="pricequantity">${boxnudel.price * boxnudel.quantity}€</p>

    </div>
    
  `;
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