
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

function minusIndexBasket(indexBas) {
  basket[indexBas].quantity -=1;
  saveToLocalStorage()
   renderBasket();
   
}

function buyIndexBasket(indexBas) {
  basket[indexBas].quantity+=1;
  saveToLocalStorage()
   renderBasket();
   
}

function deleteBasket(indexBas) {
  basket.splice(indexBas, 1)
  saveToLocalStorage()
  renderBasket();
 
}

function minusIndexBasket(indexBas) {
  if (basket[indexBas].quantity > 1) {
    basket[indexBas].quantity -= 1;
  }
  saveToLocalStorage()
  renderBasket();
  
}


