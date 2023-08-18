export default () => {
    const paragraphError = document.querySelector('.error-message')
    const addInput = document.querySelector('#add-input')

    paragraphError.classList.remove('hide')
    paragraphError.textContent = 'Insira uma tarefa válida'
    addInput.classList.add('error-border')
}