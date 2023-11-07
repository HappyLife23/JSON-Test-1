// Skapa en variabel för kanppen

const todoButton = document.getElementById('todo-button');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

const todos = [];

todoButton.addEventListener('click', addTodo);

// försöker lägga till en Enter press
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        //console.log('Det funkar');
    addTodo();
    };
    
});

function addTodo() {
    const todoText = todoInput.value;
    //console.log usersInput
    console.log(todoText);

// if todoText har inehåll så lägg till i array annars ignorera
    if (todoText !== '') {
        todos.push(todoText);        
    } 

    console.log(todos);

    // tar bort texten efter att user har skrivit ngt i input
    todoInput.value = '';

    todoInput.focus();


    renderToDo();
}



// ska rendera ut våra todos
function renderToDo() {

     // Rensa befintliga todos i listan
     todoList.innerHTML = '';

    todos.forEach(function (todo) {
        
       
        const todoListItem = document.createElement('li');
        todoListItem.textContent = todo;
    

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Klar';

        todoListItem.appendChild(completeButton);
        todoList.appendChild(todoListItem);
    });
}










