const containerList = document.querySelector('#container-list')
const addInput = document.querySelector('#add-input')

export default (text) => {
    const list = document.createElement('div')
    list.classList.add('list')

    const listTitle = document.createElement('h4')
    listTitle.textContent = text

    const listBtn = document.createElement('div')
    listBtn.classList.add('list-btn')

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('done-btn', 'btn')
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    doneBtn.setAttribute('title', 'Feito')

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-btn', 'btn')
    editBtn.innerHTML = '<i class="fa-solid fa-file-pen"></i>'
    editBtn.setAttribute('title', 'Editar')

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn', 'btn')
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    deleteBtn.setAttribute('title', 'Deletar')

    const copyBtn = document.createElement('button')
    copyBtn.classList.add('copy-btn', 'btn')
    copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>'
    copyBtn.setAttribute('title', 'Copiar')

    const importantBtn = document.createElement('button')
    importantBtn.classList.add('important-btn', 'btn')
    importantBtn.innerHTML = '<i class="fa-solid fa-star"></i>'
    importantBtn.setAttribute('title', 'Importante')

    listBtn.append(doneBtn, editBtn, deleteBtn, copyBtn, importantBtn)
    list.append(listTitle, listBtn)
    containerList.append(list)

    addInput.value = ""
    addInput.focus()
}