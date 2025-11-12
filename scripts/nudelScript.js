function initNudel() {
     renderNudel()
     renderBasket()
}


function renderNudel() {
    let menuNudelnRef = document.getElementById("contentNudel")
    menuNudelnRef.innerHTML = "";
    for (let indexMenuNudel = 0; indexMenuNudel < nudelMenu.length; indexMenuNudel++) {
        menuNudelnRef.innerHTML += getToTemplateNudel(indexMenuNudel)
        
    }
    
}

function buy(indexMenuNudel) {
    addToBasket(nudelMenu[indexMenuNudel])

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