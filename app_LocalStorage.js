let newTodo = document.getElementById('newTodo');
let todoList = document.getElementById('todoList');

const saveTodo = JSON.parse(localStorage.getItem("todos")) || [];
  for  (let i = 0; i < saveTodo.length; i++)  {
    let toDo = document.createElement('li');
    toDo.innerText = saveTodo[i].task;
    toDo.isCompleted = saveTodo[i].isCompleted ? true : false;
    if (toDo.isCompleted) {
        toDo.style.textDecoration = "line-through";
    }
todoList.appendChild(toDo);
  }

  newTodo.addEventListener('submit', function(evt){
    evt.preventDefault();
    let toDo = document.createElement('li');
    let taskValue = document.getElementById("task").value;
    toDo.innerText = taskValue;
    toDo.isCompleted = false;
    newTodo.reset();
    todoList.appendChild(toDo);

    saveTodo.push({task: toDo.innerText, isCompleted: false});
    localStorage.setItem("todos", JSON.stringify(saveTodo));
  });
  todoList.addEventListener("click", function(event) {
    let clickedListItem = event.target;
  
    if (!clickedListItem.isCompleted) {
      clickedListItem.style.textDecoration = "line-through";
      clickedListItem.isCompleted = true;
    } else {
      clickedListItem.style.textDecoration = "none";
      clickedListItem.isCompleted = false;
    }
    
    for (let i = 0; i < saveTodo.length; i++) {
      if (saveTodo[i].task === clickedListItem.innerText) {
        saveTodo[i].isCompleted = !saveTodo[i].isCompleted;
        localStorage.setItem("todos", JSON.stringify(saveTodo));
      }
    }
  });
  