function renderBasketDialog() {
  let total = 0;
  let warenkorbDialog = `
  <div class="warenkorbIconsDialog">
   <p>Warenkorb</p>
   
  </div>`;

  for (let indexDialog = 0; indexDialog < basketDialog.length; indexDialog++) {
    warenkorbDialog += getTemplateToBasketDialog(indexDialog); 
    total += basketDialog[indexDialog].price * basketDialog[indexDialog].quantity;
  }

  warenkorbDialog += `
    <div>
      <hr>
      <p class="basket-total"><strong>Total:</strong> ${total.toFixed(2)}€</p>
    </div>
  `;

  const basketDialogRef = document.getElementById("basketDialog");
  if (basketDialogRef) basketDialogRef.innerHTML = warenkorb;
  
}

function saveToLocalStorage() {
  localStorage.setItem("basketDialog", JSON.stringify(basketDialog));
}

function getFromLocalStorage() {
  let storedBasketDialog = localStorage.getItem("basketDialog");
  basketDialog = storedBasketDialog ? JSON.parse(storedBasketDialog) : [];
}

function addToDialogBasket(element) {
  let existing = basketDialog.find(el => el.name === element.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    basketDialog.push({ ...element, quantity: 1 });
  }
  saveToLocalStorage();
  renderBasketDialog();
}

  