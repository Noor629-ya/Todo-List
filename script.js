const taskList = document.querySelector('.task-list');

function enterKey(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}
loadTodo();
function loadTodo() {
    const taskStorage = localStorage.getItem('taskStorage');
    if(taskStorage != null) {
    taskList.insertAdjacentHTML('beforeend', taskStorage)
    countPendingTasks();
    }
}

function addTodo() {
    const inputTodo = document.getElementById('inputTodo');

    if (inputTodo.value !== '') {

        const element = `
        <div class="task">
            <button onclick="checkBtn(this)" class="check btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
                </svg>
            </button>

            <span onclick="checkBtn(this)">${inputTodo.value}</span>

            <button onclick="deleteBtn(this)" class="delete btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path>
                    <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                </svg>
            </button>
        </div>
        `;

        taskList.insertAdjacentHTML('afterbegin', element);
    
        saveTodo();
        countPendingTasks()

        inputTodo.value = '';

    } else {
        alert('Please enter a task!');
    }
}

function checkBtn(element) {
    const task = element.parentElement;

    task.classList.toggle('true');

    saveTodo();
    countPendingTasks();

}

function deleteBtn(element) {
   const task = element.parentElement;

   task.remove();

   saveTodo();
   countPendingTasks();
}

function countPendingTasks() {
    const countPendingTasks = document.getElementById('countPendingTasks');
    countPendingTasks.textContent = document.querySelectorAll('.task:not(.true)').length;

}

function clearAll() {
    if(confirm('clear all task?')) {
    taskList.innerHTML = '';
    saveTodo();
    countPendingTasks();
    }
}


function saveTodo() {
    localStorage.setItem('taskStorage', taskList.innerHTML)
}
   




