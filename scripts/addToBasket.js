function renderBasket() {
  let total = calculateTotal(basket);
  const deliveryCost = deliveryCostBlock(basket, total);

  let warenkorb = getTemplateWarenkorb();
  warenkorb += buildBasketElements(basket);
  warenkorb += deliveryCost.lieferkosten;

  updateBasket(warenkorb);
  basketnum();
  return { total: deliveryCost.total, lieferkosten: deliveryCost.lieferkosten };
}

function buildBasketElements(basket) {
  let warenkorb = ""
   for (let indexBas = 0; indexBas < basket.length; indexBas++) {
    warenkorb += getTemplateToBasket(indexBas);   
  
  }
  return `
  <div class="basketScroll">${warenkorb}</div>
  `
}

function deliveryCostBlock(basket, total) {
  const result = deliveryRender(basket);
  let lieferkosten = result.lieferkosten;

  if (total > 0 && total < 20) {
    total += 5;
    lieferkosten += getLieferkostenToTemplate();
  }

  if (total > 0) {
    lieferkosten += getTemplatetoTotalBestellen(total);
  }

  return { total, lieferkosten };
}

function updateBasket(warenkorb) {
  const basketRef = document.getElementById("basket");
  const basketFestRef = document.getElementById("basketFest");

  if (basketRef) basketRef.innerHTML = warenkorb;
  if (basketFestRef) basketFestRef.innerHTML = warenkorb;
}

 function calculateTotal(basket) {
  let total = 0;
    for (let indexBas = 0; indexBas < basket.length; indexBas++) {
    total += basket[indexBas].price * basket[indexBas].quantity;
  }
  return total;
 }

function deliveryRender(basket) {
  let total = 0;
  let lieferkosten = "";
 for (let indexBas = 0; indexBas < basket.length; indexBas++) {
  total += basket[indexBas].price * basket[indexBas].quantity;
}

  return { total, lieferkosten };
}

function bestellen() {
  if (basket.length > 0) {
  basket = [];
  const testBestellung = document.getElementById("bestellungerfolgreich");
  testBestellung.innerHTML = getBestellungToTemplate();

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
  const testBestellung = document.getElementById("bestellungerfolgreich")
  if (testBestellung) {
    testBestellung.innerHTML = "";
  }

  let existing = basket.find(el => el.name === element.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    basket.push({ ...element, quantity: 1 });
  }
  saveToLocalStorage();
  renderBasket();
}

