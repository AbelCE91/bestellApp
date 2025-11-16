function initFleisch(){
  getFromLocalStorage()
  renderFleisch()  
  renderBasket()
  Starrender()
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
    saveToLocalStorage()
}

function minusIndexBasket(indexBas) {
    if (basket[indexBas].quantity >1) {
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

