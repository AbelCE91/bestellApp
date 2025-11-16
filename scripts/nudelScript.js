function initNudel() {
  getFromLocalStorage()
     renderNudel()
     renderBasket()
     Starrender()
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