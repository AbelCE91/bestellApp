
function init() {

    getFromLocalStorage()
    render()
    renderBasket()
  
}

function render() {
    let myMenuRef = document.getElementById("content")
    myMenuRef.innerHTML = " ";
    for (let indexMenu = 0; indexMenu < myMenu.length; indexMenu++) {
        
        myMenuRef.innerHTML += getTemplateMenu(indexMenu)
    }
 
}

function buy(indexMenu) {
  addToBasket(myMenu[indexMenu]);
}

function minusIndexBasket(indexBasket) {
  basket[indexBasket].quantity -=1;
  saveToLocalStorage()
   renderBasket();
   
}

function buyIndexBasket(indexBasket) {
  basket[indexBasket].quantity+=1;
  saveToLocalStorage()
   renderBasket();
   
}

function deleteBasket(indexBasket) {
  basket.splice(indexBasket, 1)
  saveToLocalStorage()
  renderBasket();
 
}

function minusIndexBasket(indexBasket) {
  if (basket[indexBasket].quantity > 1) {
    basket[indexBasket].quantity -= 1;
  }
  saveToLocalStorage()
  renderBasket();
  
}


