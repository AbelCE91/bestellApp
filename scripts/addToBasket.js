function renderBasket() {
  let total = 0;
  let warenkorb = `
    <div class="warenkorbIcons">
      <h2>Warenkorb</h2>
    </div>
  `;
const basketRef = document.getElementById("basket");
  for (let indexBas = 0; indexBas < basket.length; indexBas++) {
    warenkorb += getTemplateToBasket(indexBas);
    total += basket[indexBas].price * basket[indexBas].quantity;
  }

 if (total > 0 && total < 20) {
    total += 5;
    warenkorb += `<br><p class="basket-overprice">+5€ Lieferkosten (ab 20€ Einkauf kostenfrei)</p>`;
  }

  if (total > 0) {
    warenkorb += `
      <div>
        <hr>
        <p class="basket-total"><strong>Total:</strong> ${total.toFixed(2)}€</p>
      </div>
    `;
  }

  
  const basketFestRef = document.getElementById("basketFest");

  if (basketRef) 
    basketRef.innerHTML = warenkorb;
  if (basketFestRef) 
    basketFestRef.innerHTML = warenkorb;

}

function saveToLocalStorage() {
  localStorage.setItem("basket", JSON.stringify(basket));
}

function getFromLocalStorage() {
  let storedBasket = localStorage.getItem("basket");
  basket = storedBasket ? JSON.parse(storedBasket) : [];
}

function addToBasket(element) {
  let existing = basket.find(el => el.name === element.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    basket.push({ ...element, quantity: 1 });
  }
  saveToLocalStorage();
  renderBasket();
}

