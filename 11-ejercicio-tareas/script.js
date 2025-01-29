//referencias 

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');

//Escuchador 

addButton.addEventListener('click', createTask);

//funcion manejadora externa

function createTask() {
    if (taskInput.value) {
        console.log(taskInput.value);
        taskInput.value='';
    } else{
        alert('eh, escribe una tarea mi judas')
    }

}