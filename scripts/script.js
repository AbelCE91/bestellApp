
function init() {
    render()
    renderBasket()
}

function render() {
    let myMenuRef = document.getElementById("content")
    myMenuRef.innerHTML = " ";
    for (let indexMenu = 0; indexMenu < myMenu.length; indexMenu++) {
        
        myMenuRef.innerHTML += getTemplateMenu(indexMenu)
    }
    
}

function renderBasket() {
  let basketRef = document.getElementById("basket")
  basketRef.innerHTML = " ";
  for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
    basketRef.innerHTML += getTemplateToBasket(indexBasket);
    
  }
    
}

function buy(indexMenu) {
  let bas ={ ...myMenu[indexMenu] }
  basket.push(bas)
  render()
  renderBasket()
}