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

function ajustarBasket() {
  const basket = document.getElementById('basket');

  // En pantallas grandes, asegúrate de que esté oculto
  if (window.innerWidth > 750) {
    basket.classList.remove('visible');
  }
}


  function burgerMenu() {
    const basket = document.getElementById('basket');
    if (window.innerWidth <= 750) {
      basket.classList.add('visible');
    }
  }

function Xicon() {
  if (basket) {
    const basketRef = document.getElementById("basket");

    basketRef.classList.remove('visible')
    
  }
  
}
// Ejecutar al cargar y al redimensionar
window.addEventListener('DOMContentLoaded', ajustarBasket);
window.addEventListener('resize', ajustarBasket);