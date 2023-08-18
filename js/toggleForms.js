const addForm = document.querySelector('#add-form')
const editForm = document.querySelector('#edit-form')
const containerList = document.querySelector('#container-list')
const search = document.querySelector('#search')
const filter = document.querySelector('#filter')
const toolbar = document.querySelector('#toolbar')

export default () => {
    addForm.classList.toggle('hide')
    containerList.classList.toggle('hide')
    editForm.classList.toggle('hide')
    toolbar.classList.toggle('hide')
}