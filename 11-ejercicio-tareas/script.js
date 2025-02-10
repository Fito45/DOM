//referencias 

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

//Escuchador 

addButton.addEventListener('click', createTask);

//funcion manejadora externa

function createTask() {
    if (taskInput.value) {
        console.log(taskInput.value);

        const taskItem = document.createElement('div');
        taskItem.classList.add('task')

        //creamos el Div de las tareas

        const taskText = document.createElement('p');
        taskText.innerText = taskInput.value;

        //Creamos el  contenedor de las Iconos

        const taskIcons = document.createElement('div');
        taskIcons.classList.add('task-icons');

        //creamos el icono Check

        const iconCheck = document.createElement('i');
        iconCheck.classList.add('bi', 'bi-check', 'icon-complete')

        //Crear icono Trash

        const iconDelete = document.createElement('i');
        iconDelete.classList.add('bi', 'bi-trash2', 'icon-delete')

        //Estructura de los elementos

        taskIcons.append(iconCheck, iconDelete);

        taskItem.append(taskText, taskIcons);

        taskList.append(taskItem);

        taskInput.value = '';
    } else {
        alert('eh, escribe una tarea mi judas')
    }

}