function init1() {
    getFromLocalStorage()
    renderBeilage()
     renderBasket()
     Starrender()
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


// Ejecutar al cargar y al redimensionar
window.addEventListener('DOMContentLoaded', ajustarBasket);
window.addEventListener('resize', ajustarBasket);



function Starrender() {
  const stars = document.querySelectorAll(".stars i");
  let savedSuperstar = localStorage.getItem("superstar");

  // Restaurar visualmente la calificación guardada
  if (savedSuperstar) {
    stars.forEach((star, index) => {
      star.classList.toggle("active", index < savedSuperstar);
    });
  }

  // Escuchar clics y guardar nueva calificación
  stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
      localStorage.setItem("superstar", index1 + 1); // guarda la calificación

      stars.forEach((star, index2) => {
        star.classList.toggle("active", index2 <= index1);
      });
    });
  });
}
