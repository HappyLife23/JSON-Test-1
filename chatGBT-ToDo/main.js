const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Lägg till en uppgift när användaren trycker på Enter
todoInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});

// Skapa en ny uppgift
function addTodo() {
  const todoText = todoInput.value;
  if (todoText.trim() !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${todoText}
      <button onclick="removeTodo(this)">X</button>
    `;
    todoList.appendChild(listItem);
    todoInput.value = '';
  }
}

// Ta bort en uppgift
function removeTodo(button) {
  const listItem = button.parentElement;
  listItem.remove();
}
