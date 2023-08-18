export default (inputValue, oldListTitle) => {
    const lists = document.querySelectorAll('.list')
    lists.forEach(list => {
        let listTitle = list.querySelector('h4')

        if(listTitle.textContent === oldListTitle) {

            if(listTitle.querySelector('.star')) listTitle.innerHTML = `${inputValue} <i class="fa-solid fa-star star"></i>`
            else listTitle.textContent = inputValue
        }
    })
}