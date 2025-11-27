function getFischToTemplate(indexFisch) {
  let fisch = fischMenu[indexFisch]
    return`
    
   <div class="disches">
      <div class="nameadd">
        <p class="Pdischesname" onclick="buy(${indexFisch})"><strong>${fisch.name}</strong></p>
        <img onclick="buy(${indexFisch})"class="addicon" src="./icons/add.png" alt="">
      </div>
        <p class="Pdisches"><strong>Price</strong>: ${fisch.price}€</p>
        <p class="Pdisches" class="description">${fisch.description}</p>
     </div>
    `

    
}


function getTemplateToBasket(indexBas) {
    let fischbasket = basket[indexBas];
  return `
    <div>
      <p class="trashname"><strong>${fischbasket.name}</strong> <img onclick="deleteBasket(${indexBas})" class="trash" src="./icons/trash.png" alt=""> </p>
      <span class="iconsX">
      <div>
        <img onclick="minusIndexBasket(${indexBas})" class="iconsQuantityminus" src="./icons/menos.png" alt="">
       </div> 
        <p>x(${fischbasket.quantity})</p>
        <div>
        <img onclick="buyIndexBasket(${indexBas})" class="iconsQuantityplus" src="./icons/mas.png" alt="">
        </div>
      </span>
      <p class="pricequantity">${fischbasket.price * fischbasket.quantity}€</p>

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