const inputElement = document.querySelector(".tarefas-input");
const addTaskButton = document.querySelector(".adicionar-tarefa-botao");

const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputIsValid = validateInput();

    if(!inputIsValid) {
       return inputElement.classList.add("erro");
    }
};

const handleInputChange = () => {
    const inputIsValid = validateInput ();

    if (inputIsValid) {
        return inputElement.classList.remove("erro");
    }
}

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());