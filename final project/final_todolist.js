const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  //save the to do list.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;

  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
}

function paintToDo(tomato) {
  const li = document.createElement("li");
  li.id = tomato.id;

  const button = document.createElement("button");
  button.innerText = "✔️";
  button.addEventListener("click", deleteToDo);

  const span = document.createElement("span");
  span.innerText = tomato.text;

  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);

  const deleteButton = document.querySelectorAll("button");
  deleteButton.forEach((btn) => (btn.style.background = "transparent"));
  deleteButton.forEach((btn) => (btn.style.border = "none"));

  //[...document.querySelectorAll('button')].forEach(btn => btn.style.background ="transparent"; btn.style.border="none";)
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintToDo);
}
