const inputElemento = document.querySelector('tarefas');
const addTarefasButton = document.querySelector('.adicionar-tarefas');

const validarInput = () =>  inputElemento.value.trim().lenght > 0;

const apertarButtonTarefa = () => {
    const inputValido = validarInput ();

    if (!inputValido) {
        return inputElemento.classList.add("erro");
    }
}

addTarefasButton.addEventListener ("click", () => apertarButtonTarefa())




