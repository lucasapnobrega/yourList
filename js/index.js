import saveTask from "./saveTask.js"
import toggleForms from "./toggleForms.js"
import updateList from "./updateList.js"
import getSearch from "./getSearch.js"
import filterLists from "./filterLists.js"
import errorMessage from "./errorMessage.js"
import copy from "./copy.js"
import important from "./important.js"

const addForm = document.querySelector('#add-form')
const addInput = document.querySelector('#add-input')
const paragraphError = document.querySelector('.error-message')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')

const searchInput = document.querySelector('#search-input')
const filterBtn = document.querySelector('#filter-select')

addForm.addEventListener('submit', ev => {
    ev.preventDefault()
    
    const inputValue = addInput.value

    if(inputValue === "") {
        errorMessage()
    } else {
        addInput.classList.remove('error-border')
        paragraphError.classList.add('hide')
        saveTask(inputValue)
    }
})

let oldListTitle

document.addEventListener('click', ev => {
    const targetElement = ev.target
    const parentElement = targetElement.closest('.list')

    let listTitle

    if(parentElement && parentElement.querySelector('h4')) {
        listTitle = parentElement.querySelector('h4').textContent
    }

    if(targetElement.classList.contains('done-btn')) {
        parentElement.classList.toggle('done')

    }

    if(targetElement.classList.contains('edit-btn')) {
        toggleForms()

        editInput.value = listTitle
        oldListTitle = listTitle
    }

    if(targetElement.classList.contains('delete-btn')) {
        parentElement.remove()
    }

    if(targetElement.classList.contains('copy-btn')) {
        copy(targetElement)
    }

    if(targetElement.classList.contains('important-btn')) {
        important(parentElement)
    }
})


cancelEditBtn.addEventListener('click', ev => {
    ev.preventDefault()

    toggleForms()
})

editForm.addEventListener('submit', ev => {
    ev.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue) {
        updateList(editInputValue, oldListTitle)
    }

    toggleForms()
})

searchInput.addEventListener('keyup', ev => {
    const search = ev.target.value

    getSearch(search)
})

filterBtn.addEventListener('change', ev => {
    const filterValue = ev.target.value
    
    filterLists(filterValue)
})
