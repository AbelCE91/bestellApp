function initFisch() {
  getFromLocalStorage()
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



