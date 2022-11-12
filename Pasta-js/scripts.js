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

const deleteItem = document.createElement("i");
deleteItem.classList.add('fa-solid');
deleteItem.classList.add('fa-trash-can');

taskItemContainer.appendChild(taskContent);
taskItemContainer.appendChild(deleteItem);
tasksContainer.appendChild(taskItemContainer);

inputElement.value = "";
};

const handleInputChange = () => {
    const inputIsValid = validateInput ();

    if (inputIsValid) {
        return inputElement.classList.remove("erro");
    }
}

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());