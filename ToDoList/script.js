let todoInput=document.getElementById('todo-input');
let addTaskBtn=document.getElementById('add-task-btn');
let todoList=document.getElementById('tasks');

let tasks=[];
addTaskBtn.addEventListener(
    'click', function(){
        if(todoInput.value.trim()!==''){
            const newTask={
                id: Date.now(),
                text: todoInput.value.trim(),
                isCompleted: false
            }
            tasks.push(newTask);
            saveTasks();
            updateTodoList();
            todoInput.value='';
            console.log("array:",tasks);
            
        }
        else{
            alert('Please enter a task');
        }
    }
)
function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks));

}
function updateTodoList(){
    let tasksLocal = JSON.parse(localStorage.getItem('tasks')) || [];
    while(todoList.firstChild)todoList.firstChild.remove();
    for (const task of tasksLocal) {
        let newListItem=document.createElement('li');
        let newListPara=document.createElement('p');
        newListPara.textContent=task.text;
        let newListDelete=document.createElement('button');
        newListDelete.textContent='Delete';
        if(task.isCompleted)newListPara.style.textDecoration='line-through';
        newListDelete.classList.add('deleteBtn');
        newListItem.appendChild(newListPara);
        newListItem.appendChild(newListDelete);
        newListItem.classList.add('list')

        todoList.appendChild(newListItem);
    }
}