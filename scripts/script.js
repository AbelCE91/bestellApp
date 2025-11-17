
function init() {

    getFromLocalStorage()
    render()
    renderBasket()
    Starrender()
  
  
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
  window.buy = buy;
}



function buyIndexBasket(indexBas) {
  basket[indexBas].quantity+=1;
  window.buyIndexBasket = buyIndexBasket;
  saveToLocalStorage()
   renderBasket();

}

function deleteBasket(indexBas) {
  basket.splice(indexBas, 1)
    window.deleteBasket = deleteBasket;
  saveToLocalStorage()
  renderBasket();
  
}

function minusIndexBasket(indexBas) {
  if (basket[indexBas].quantity > 1) {
     basket[indexBas].quantity -= 1;
  }
   window.minusIndexBasket = minusIndexBasket;
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


