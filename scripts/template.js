function getTemplateMenu(indexMenu) {
    let menu = myMenu[indexMenu]
    return `
   
    <div class="disches">
      <p class="name" onclick="buy">${menu.name}</p>
      <p><strong>Price</strong> ${menu.price}€</p>
      <p>${menu.description}</p>
     </div>
    `
    
}