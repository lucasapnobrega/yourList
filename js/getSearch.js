export default (search) => {
    const lists = document.querySelectorAll('.list')
    const form = document.querySelector('#search-form')

    if(search === '') {
        form.querySelector('i').classList.remove('opacity-half')
    } else {
        form.querySelector('i').classList.add('opacity-half')
    }
    


    lists.forEach(list => {
        let listTitle = list.querySelector('h4').textContent.toLowerCase()

        list.style.display = 'flex'

        if(!listTitle.includes(search.toLowerCase())) {
            list.style.display = 'none'
        }
    })
}