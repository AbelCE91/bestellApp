

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

function renderBasket() {
  let total = 0;
  let warenkorb = `<h2 class="warenkorb">Warenkorb</h2>`;

  for (let indexBas = 0; indexBas < basket.length; indexBas++) {
    warenkorb += getTemplateToBasket(indexBas);
  }

  warenkorb += `
    <div>
      <hr>
      <p class="basket-total"><strong>Total:</strong> ${total.toFixed(2)}€</p>
    </div>
  `;

  const basketRef = document.getElementById("basket");
  if (basketRef) basketRef.innerHTML = warenkorb;

  const basket1Ref = document.getElementById("basket1");
  if (basket1Ref) basket1Ref.innerHTML = warenkorb;
}