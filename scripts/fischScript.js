function initFisch() {
    renderFisch()
    renderBasket()
}

function renderFisch() {
    let fischRef = document.getElementById("contentFisch")

    fischRef.innerHTML = "";
    for (let indexFisch = 0; indexFisch < fischMenu.length; indexFisch++) {
        fischRef.innerHTML += getFischToTemplate(indexFisch);
        
    }
}

function buy(indexFisch) {
  addToBasket(fischMenu[indexFisch]);
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

