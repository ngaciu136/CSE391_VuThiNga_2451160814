let todos = JSON.parse(localStorage.getItem("todos")) || [];
let filter = "all";
let currentId =
  todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const count = document.querySelector("#count");
const clearCompleted = document.querySelector("#clearCompleted");
render();
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateCount() {
  let activeCnt = todos.filter((todo) => !todo.completed).length;
  count.textContent = `Còn ${activeCnt} việc`;
}

function render() {
  todoList.innerHTML = "";
  let filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });
  filteredTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (todo.completed) {
      li.classList.add("completed");
    }
    li.dataset.id = todo.id;
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;
    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.className = "delete-btn";
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
  });
  updateCount();
  saveTodos();
}

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let text = todoInput.value.trim();
  if (text === "") return;
  todos.push({
    id: currentId++,
    text: text,
    completed: false,
  });
  todoInput.value = "";
  render();
});

todoList.addEventListener("click", function (e) {
  const li = e.target.closest(".todo-item");
  if (!li) return;
  const id = Number(li.dataset.id);
  const todo = todos.find((todo) => todo.id === id);
  if (e.target.classList.contains("delete-btn")) {
    todos = todos.filter((todo) => todo.id !== id);
    render();
    return;
  }

  if (e.target.classList.contains("todo-text")) {
    todo.completed = !todo.completed;
    render();
  }
});

todoList.addEventListener("dblclick", function (e) {
  if (!e.target.classList.contains("todo-text")) return;
  const li = e.target.closest(".todo-item");
  const id = Number(li.dataset.id);
  const todo = todos.find((todo) => todo.id === id);
  const input = document.createElement("input");
  input.value = todo.text;
  input.className = "edit-input";
  e.target.replaceWith(input);
  input.focus();
  input.addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
      todo.text = input.value.trim();
      render();
    }
  });
});

document.querySelector(".filters").addEventListener("click", function (e) {
  if (!e.target.dataset.filter) return;
  filter = e.target.dataset.filter;
  render();
});

clearCompleted.addEventListener("click", function () {
  todos = todos.filter((todo) => !todo.completed);
  render();
});
