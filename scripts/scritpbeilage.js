function init1() {
    renderBeilage()
    RenderBeilageBasket()
}

function renderBeilage() {
    let beilageMenuRef = document.getElementById("content1")
    beilageMenuRef.innerHTML="";
    for (let indexBeilage = 0; indexBeilage < beilageMenu.length; indexBeilage++) {
        
        beilageMenuRef.innerHTML += getTemplateBeulageMenu(indexBeilage)
    }

}

function RenderBeilageBasket() {
    let total= 0
    let beilageBasketRef = document.getElementById("basket1")
    
    beilageBasketRef.innerHTML = "";
     beilageBasketRef.innerHTML += `<h2 class="warenkorb">Warenkorb</h2>`;
    
    for (let indexBasketBei = 0; indexBasketBei < beilageBasket.length; indexBasketBei++) {
        beilageBasketRef.innerHTML += getTemplateBeilageBasket(indexBasketBei)
        total+= beilageBasket[indexBasketBei].price * beilageBasket[indexBasketBei].quantity
    }
    beilageBasketRef.innerHTML +=   `<div>
      <hr>
      <p class="basket-total"><strong>Total:</strong> ${total.toFixed(2)}€</p>
    </div>
  `;
    
}

function buy(indexBeilage) {
    let bas = beilageMenu[indexBeilage]
    beilageBasket.push(bas)
    RenderBeilageBasket()
    renderBeilage()
}

function buy(indexBeilage) {
    let selectedDish = beilageMenu[indexBeilage];
   let existing = beilageBasket.find(element => element.name === selectedDish.name);

if (existing) { 
    existing.quantity+=1
} else { 
    beilageBasket.push({...selectedDish, quantity: 1})    
}
RenderBeilageBasket()
}

function minusIndexBasket(indexBasketBei) {
    beilageBasket[indexBasketBei].quantity -=1;
    RenderBeilageBasket()
    
}

function buyIndexBasket(indexBasketBei) {
    beilageBasket[indexBasketBei].quantity +=1;
    RenderBeilageBasket()
}

function deleteBasket(indexBasketBei) {
    beilageBasket.splice(indexBasketBei,1)
     RenderBeilageBasket()
}

function minusIndexBasket(indexBasketBei) {

    if (beilageBasket[indexBasketBei].quantity >1) {
        beilageBasket[indexBasketBei].quantity -=1
    }
     RenderBeilageBasket()
}