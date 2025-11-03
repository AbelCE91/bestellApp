let myMenu = [
    {
        "name":"pizza margarita",
        "price" : 10,
        "description" : "delicious pizza with only Tomato sauce and Mozzarella cheese"
    },

    {
        "name" : "Spagueti Bolognese",
        "price" : 12,
        "description" : "Delicious Pasta with Tomato and ground meat"
    }

]

function init() {
    render()
}

function render() {
    let myMenuRef = document.getElementById("content")
    myMenuRef.innerHTML = " ";
    for (let indexMenu = 0; indexMenu < myMenu.length; indexMenu++) {
        
        myMenuRef.innerHTML += getTemplateMenu(indexMenu)
    }
    
}
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