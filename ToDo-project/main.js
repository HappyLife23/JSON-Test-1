// hämtar referensen från med hjälp av DOM
const toInput= document.getElementById('toInput')
const toButton= document.getElementById('toButton');
const toList = document.getElementById('toList');


const todos = [];
/*–––––––––––– Adding addEventListener –––––––––––––––––*/
// Skapar en eventlistener med click på knappen
toButton.addEventListener('click', addItem);


// skapar en function där vår added item kommer att synas i konsolern
function addItem() {
    const todoText = toInput.value; // hämtar vår input-value
    if (todoText !== '') { // Om todoText är inte tom 
        todos.push(todoText); // lägg till toInput.value
    }
    
    toInput.value = ''; // tömmer inputValue
    toInput.focus(); //fokuserar på ett HTML-element och i detta fall på toInput
    renderToDO(); // Anropa renderToDo efter att en ny todo har lagts till    
}

// Lägg till en Enter-knapp
// Det funkar med alla key-typer: keydown, keypress, keyup
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addItem();
    }     
});

/*–––––––––––– Finished addEventListener ––––––––––––––*/

function renderToDO() {
    toList.innerHTML = ''; // Tömmer innehållet i ett HTML-element innan vi lägger till ett nytt itam i vår toList

    todos.forEach(function (todo) {
        
        // Skapar li-element varjegång user lägger till en itam
        const toListItem = document.createElement('li');
        toListItem.textContent = todo;
        
        // Skapar en kanpp varje gång user lägger till en item
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Klar';

        // Lägger till de på webbsian med hjälp av append
        toListItem.appendChild(doneButton);
        toList.appendChild(toListItem);
    });
}