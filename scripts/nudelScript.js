function initNudel() {
  getFromLocalStorage()
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


