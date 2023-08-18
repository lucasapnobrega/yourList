export default (filterValue) => {
    const lists = document.querySelectorAll('.list')

    switch(filterValue) {
        case "all":
            lists.forEach(list => list.style.display = 'flex')
            break

        case "done":
            lists.forEach(list => {
                if(!list.classList.contains('done')) list.style.display = 'none'
                else list.style.display = 'flex'
            })
            break

        case "todo":
            lists.forEach(list => {
                if(list.classList.contains('done')) list.style.display = 'none'
                else list.style.display = 'flex'
            })
            break
        
        case "important":
            lists.forEach(list => {
                if(list.classList.contains('important')) list.style.display = 'flex'
                else list.style.display = 'none'
            })
            break
    }
}