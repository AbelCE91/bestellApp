function initFisch() {
    getFromLocalStorage()
    renderFisch()
    renderBasket()
    Starrender()
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
  saveToLocalStorage()
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
  if (savedSuperstar) {
    stars.forEach((star, index) => {
      star.classList.toggle("active", index < savedSuperstar);
    });
  }

  stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
      localStorage.setItem("superstar", index1 + 1);
      stars.forEach((star, index2) => {
        star.classList.toggle("active", index2 <= index1);
      });
    });
  });
}


