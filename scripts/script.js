
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
  let total= 0
  let basketRef = document.getElementById("basket")
  basketRef.innerHTML = "";
  basketRef.innerHTML += `<h2 class="warenkorb">Warenkorb</h2>`;

  for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
    basketRef.innerHTML += getTemplateToBasket(indexBasket);
    total += basket[indexBasket].price * basket[indexBasket].quantity

  }
  basketRef.innerHTML +=
   `<div>
      <hr>
      <p class="basket-total"><strong>Total:</strong> ${total.toFixed(2)}€</p>
    </div>
  `;
}

function buy(indexMenu) {
 let bas = (myMenu[indexMenu])
 basket.push(bas)
  render()
  renderBasket()
}

function buy(indexMenu) {
  let selectedDish = myMenu[indexMenu];
  let existing = basket.find(element => element.name === selectedDish.name);
 

  if (existing) {
    existing.quantity += 1; // aumentar contador
  } else {
    basket.push({ ...selectedDish, quantity: 1 }); // añadir nuevo con cantidad 1
  }

  renderBasket();
}


function minusIndexBasket(indexBasket) {
  basket[indexBasket].quantity -=1;
   renderBasket();
}

function buyIndexBasket(indexBasket) {
  basket[indexBasket].quantity+=1;
   renderBasket();
}

function deleteBasket(indexBasket) {
  basket.splice(indexBasket, 1)
  
  renderBasket();
}


function minusIndexBasket(indexBasket) {
  if (basket[indexBasket].quantity > 1) {
    basket[indexBasket].quantity -= 1;
  }
  renderBasket();
}

