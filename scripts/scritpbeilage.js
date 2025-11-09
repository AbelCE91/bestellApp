function init1() {
    getFromLocalStorage()
    renderBeilage()
     renderBasket()
}

function renderBeilage() {
    let beilageMenuRef = document.getElementById("content1")
    beilageMenuRef.innerHTML="";
    for (let indexBeilage = 0; indexBeilage < beilageMenu.length; indexBeilage++) {
        
        beilageMenuRef.innerHTML += getTemplateBeulageMenu(indexBeilage)
    }

}

function buy(indexBeilage) {
  addToBasket(beilageMenu[indexBeilage]);
  renderBasket()
}

function minusIndexBasket(indexBasketBei) {
    basket[indexBasketBei].quantity -=1;
    saveToLocalStorage()
   renderBasket() 
}

function buyIndexBasket(indexBasketBei) {
    basket[indexBasketBei].quantity +=1;
    saveToLocalStorage()
   renderBasket()
}

function deleteBasket(indexBasketBei) {
    basket.splice(indexBasketBei,1)
    saveToLocalStorage()
     renderBasket()
}

function minusIndexBasket(indexBasketBei) {

    if (basket[indexBasketBei].quantity >1) {
        basket[indexBasketBei].
        quantity -=1
    }
    saveToLocalStorage()
     renderBasket()
}