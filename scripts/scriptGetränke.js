function initGetränk() {
  getFromLocalStorage()
renderGetränk()
renderBasket()
Starrender()
    
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
