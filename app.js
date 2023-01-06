document.addEventListener("DOMContentLoaded", function() {

 let newTodo = document.getElementById('newTodo');
 let todoList = document.getElementById('todoList');

newTodo.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    let noButton = document.createElement('button');
    noButton.innerHTML = "&#8224;";

    let newTask = document.createElement('li');
    newTask.innerText = document.getElementById('task').value;

    todoList.appendChild(newTask);
    newTask.appendChild(noButton);

newTodo.reset();


});
todoList.addEventListener("click", function(event) {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      event.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      event.target.parentNode.remove();
    }
  });

});
