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
