// Hämta referenser till HTML-elementen med hjälp av deras id
const todoInput = document.getElementById('todo-input'); // Textinmatningsfältet
const todoList = document.getElementById('todo-list');   // Listan där uppgifterna visas

// Lägg till en händelselyssnare på textinmatningsfältet för tangenttryckningar
todoInput.addEventListener('keyup', function (event) {
  // Kontrollera om användaren trycker på Enter (tangentkoden 'Enter' är 13)
  if (event.key === 'Enter') {
    addTodo(); // Om Enter trycks, anropa funktionen 'addTodo'
  }
});

// Funktion för att lägga till en ny uppgift
function addTodo() {
  const todoText = todoInput.value; // Hämta texten som användaren har skrivit in

  // Kontrollera om inmatningsfältet inte är tomt (och inte bara blanksteg)
  if (todoText.trim() !== '') {
    // Skapa ett nytt <li>-element för att visa uppgiften i listan
    const listItem = document.createElement('li');
    
    // Lägg till HTML-innehåll i listelementet, inklusive uppgiften och en ta-bort-knapp
    listItem.innerHTML = `
      ${todoText}
      <button onclick="removeTodo(this)">X</button>
    `;
    
    // Lägg till listelementet i listan
    todoList.appendChild(listItem);
    
    // Återställ inmatningsfältet till tom
    todoInput.value = '';
  }
}

// Funktion för att ta bort en uppgift
function removeTodo(button) {
  // Hitta det överordnade listelementet som innehåller knappen
  const listItem = button.parentElement;
  
  // Ta bort listelementet från listan
  listItem.remove();
}
