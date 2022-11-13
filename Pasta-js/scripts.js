const inputElement = document.querySelector(".tarefas-input");
const addTaskButton = document.querySelector(".adicionar-tarefa-botao");
const tasksContainer = document.querySelector(".resultado-tarefas");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if(!inputIsValid) {
       return inputElement.classList.add("erro");
    }

const taskItemContainer = document.createElement('div');
taskItemContainer.classList.add("task-item");

const taskContent = document.createElement('p');

taskContent.innerText = inputElement.value;

const doneTask = document.createElement("i");
doneTask.classList.add('fa-solid');
doneTask.classList.add('fa-check-to-slot');

doneTask.addEventListener("click", () => handleClick(taskContent));

const deleteItem = document.createElement("i");
deleteItem.classList.add('fa-solid');
deleteItem.classList.add('fa-trash-can');

deleteItem.addEventListener("click", () => handleDeleteClick (taskItemContainer, taskContent));

taskItemContainer.appendChild(taskContent);
taskItemContainer.appendChild(doneTask);
taskItemContainer.appendChild(deleteItem);
tasksContainer.appendChild(taskItemContainer);

inputElement.value = "";
};

const handleClick = (taskContent) => {
    const tasks = tasksContainer.childNodes;
    
    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)) {
            task.firstChild.classList.toggle("completed");
        }
    }
}

const handleDeleteClick = (taskItemContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;

    for (const task of tasks) {
        if (task.firstChild.isSameNode(taskContent)) {
            taskItemContainer.remove();
        }
    }
}

const handleInputChange = () => {
    const inputIsValid = validateInput ();

    if (inputIsValid) {
        return inputElement.classList.remove("erro");
    }
}

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());