function initFleisch(){
  getFromLocalStorage()
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


