function initGetränk() {
  getFromLocalStorage()
renderGetränk()
renderBasket()

    
}

function renderGetränk() {
    let GetränkRef = document.getElementById("contentGeträenke")
    GetränkRef.innerHTML = "";

    for (let indexGetränk = 0; indexGetränk < getränke.length; indexGetränk++) {
        GetränkRef.innerHTML += getToGetränkeTemplate(indexGetränk)
        
    }
}

function buy(indexGetränk) {
  addToBasket(getränke[indexGetränk]).quantity +=1
  renderGetränk()
saveToLocalStorage()
}

function minusIndexBasket(indexBas) {
    if (basket[indexBas].quantity > 1) {
        basket[indexBas].quantity -=1
    }
    renderBasket()
    saveToLocalStorage()
}

function buyIndexBasket(indexBas) {
    basket[indexBas].quantity +=1
    renderBasket()
    saveToLocalStorage()
    
}

function deleteBasket(indexBas) {
    basket.splice(indexBas,1)
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