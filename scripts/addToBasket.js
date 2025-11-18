function renderBasket() {
    let total = 0;
    let warenkorb = `
    <div class="warenkorbIcons">
      <h2 class="warenkorbText">Warenkorb</h2>
    </div>
   
  `;
  
const basketRef = document.getElementById("basket");
  for (let indexBas = 0; indexBas < basket.length; indexBas++) {
    warenkorb += getTemplateToBasket(indexBas);   
  }

  const result = lieferrender(basket);
  warenkorb += result.lieferkosten;

  const basketFestRef = document.getElementById("basketFest");
  if (basketRef) 
    basketRef.innerHTML = warenkorb;
  if (basketFestRef) 
    basketFestRef.innerHTML = warenkorb;
  basketnum()

    let lieferkosten = "";
 for (let indexBas = 0; indexBas < basket.length; indexBas++) {
  total += basket[indexBas].price * basket[indexBas].quantity;
}

  if (total > 0 && total < 20) {
    total += 5;
    lieferkosten += `<br><p class="basket-overprice">+5€ Lieferkosten (ab 20€ Einkauf kostenfrei)</p>`;
  }

  if (total > 0) {
    lieferkosten += `
      <div>
        <hr>
        <p class="basket-total"><strong>Total:</strong> ${total.toFixed(2)}€</p>
         <button class="bestellbutton" onclick="bestellen()">bestellens</button>
         
      </div>
    `;
  }
  return { total, lieferkosten };
}

function lieferrender(basket) {
  let total = 0;
  let lieferkosten = "";
 for (let indexBas = 0; indexBas < basket.length; indexBas++) {
  total += basket[indexBas].price * basket[indexBas].quantity;
}

  if (total > 0 && total < 20) {
    total += 5;
    lieferkosten += `<br><p class="basket-overprice">+5€ Lieferkosten (ab 20€ Einkauf kostenfrei)</p>`;
  }

  if (total > 0) {
    lieferkosten += `
      <div>
        <hr>
        <p class="basket-total"><strong>Total:</strong> ${total.toFixed(2)}€</p>
         <button class="bestellbutton" onclick="bestellen()">bestellens</button>
         
      </div>
    `;
  }
  return { total, lieferkosten };
}

function bestellen() {
  if (basket.length > 0) {
  basket = [];
  const testBestellung = document.getElementById("bestellungerfolgreich");
  testBestellung.innerHTML = `<p class="bestell-confirmation">✅ Bestellung erfolgreich!!</p>`;

    saveToLocalStorage();
    renderBasket();
    basketnum()

  } 
}

function basketnum() {
  const basketNumRef = document.getElementById("imgbasket");

  let totalNum = 0;
  for (let indexBas = 0; indexBas < basket.length; indexBas++) {
    totalNum += basket[indexBas].quantity;
  }

  if (totalNum > 0) {
    basketNumRef.textContent = totalNum;
  } else {
    basketNumRef.textContent = "0";
  }
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

