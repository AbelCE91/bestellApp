
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

function ajustarBasket() {
  const basket = document.getElementById('basket');

  // En pantallas grandes, asegúrate de que esté oculto
  if (window.innerWidth > 750) {
    basket.classList.remove('visible');
  }
}

function burgerMenu() {
  const basket = document.getElementById('basket');

  // Solo permite toggle en pantallas pequeñas
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

