const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

const todos = JSON.parse(localStorage.getItem('todos')) || [];

const addTodo = () => {
  const todoText = todoInput.value.trim();
  if(todoText.length) {

    const todo = {
      text: todoText,
      completed: false  
    }

    todos.push(todo);

    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    li.textContent = todoText;
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = '';
  }
  localStorage.setItem('todos', JSON.stringify(todos));
};

addButton.addEventListener('click', addTodo);

todoList.addEventListener('click', event => {
  if(event.target.tagName === 'LI'){
    event.target.classList.toggle('completed');
  }
});

todoList.addEventListener('click', event => {
  if(event.target.tagName === 'BUTTON'){
    const li = event.target.parentNode;
    todoList.removeChild(li);
  }
});

window.addEventListener('load', () => {
  for(const todo of todos) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    const li = document.createElement('li');
    li.textContent = todo.text;
    if(todo.completed) {
      li.classList.add('completed');
    }
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
});