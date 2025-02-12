document.addEventListener('DOMContentLoaded',()=>{
    let todoInput = document.getElementById('todo-input');
let addTaskBtn = document.getElementById('add-task-btn');
let todoList = document.getElementById('tasks');

updateTodoList();
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];;
addTaskBtn.addEventListener(
    'click', function () {
        if (todoInput.value.trim() !== '') {
            const newTask = {
                id: Date.now(),
                text: todoInput.value.trim(),
                isCompleted: false
            }
            tasks.push(newTask);
            saveTasks();
            updateTodoList();
            todoInput.value = '';
            console.log("array:", tasks);

        }
        else {
            alert('Please enter a task');
        }
    }
)
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));

}
function updateTodoList() {
    let tasksLocal = JSON.parse(localStorage.getItem('tasks')) || [];
    while (todoList.firstChild) todoList.firstChild.remove();
    for (const task of tasksLocal) {
        let newListItem = document.createElement('li');
        let newListPara = document.createElement('p');
        newListPara.textContent = task.text;
        let newListDelete = document.createElement('button');
        newListDelete.textContent = 'Delete';

        newListDelete.classList.add('deleteBtn');
        newListItem.appendChild(newListPara);
        newListItem.appendChild(newListDelete);
        newListItem.classList.add('list')
        newListItem.id = task.id;
        if (task.isCompleted) newListItem.classList.toggle('selected_list');
        todoList.appendChild(newListItem);
    }
}

todoList.addEventListener(
    'click', function (event) {

        if (event.target && event.target.matches(".list")) {
            event.target.classList.toggle('selected_list');
            let idSel = event.target.id;
            console.log("selected list id:", idSel);

            for (const task of tasks) if (task.id == idSel) {
                task.isCompleted = !task.isCompleted
                break;
            }
            saveTasks();
            updateTodoList();
        }
        else if (event.target && event.target.matches('.deleteBtn')) {
            event.target.classList.toggle('selected_list');
            let idSel = event.target.parentElement.id;
            console.log("selected list id:", idSel);
            tasks = tasks.filter(task => task.id != idSel);
            saveTasks();
            updateTodoList();

        }
    }
)
})