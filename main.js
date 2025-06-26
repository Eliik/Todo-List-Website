const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

window.onload = function() {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.forEach(task => addTodoToDOM(task));
};

function savedTodos() {
  const tasks = [];
  document.querySelectorAll("#todo-list li").forEach(li => {
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem("todos", JSON.stringify(tasks));
}

function addTodo() {
  const task = input.value.trim();
  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "delete";
  delBtn.onclick = function () {
    list.removeChild(li);
    savedTodos();
  };

  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";
}
