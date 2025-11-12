function initFleisch(){
  renderFleisch()  
  renderBasket()
}

function renderFleisch() {
    let fleischMenuRef = document.getElementById("contentFleisch")
    fleischMenuRef.innerHTML = "";

    for (let indexFleisch = 0; indexFleisch < fleischMenu.length; indexFleisch++) {

        fleischMenuRef.innerHTML += getTemplateToFleisch(indexFleisch)
        
    }
    
}


function buy(indexFleisch) {
    addToBasket(fleischMenu[indexFleisch]).quantity +=1;

    renderFleisch()

}
function deleteBasket(indexBas) {
    basket.splice(indexBas,1)
    renderBasket()
}

function minusIndexBasket(indexBas) {
    if (basket[indexBas].quantity >1) {
        basket[indexBas].quantity -=1
        
    }
    renderBasket()
}
function buyIndexBasket(indexBas) {
basket[indexBas].quantity +=1
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
