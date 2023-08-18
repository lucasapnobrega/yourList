export default (parentElement) => {
    const title = parentElement.querySelector('h4')
    const star = parentElement.querySelector('.star') || null

    parentElement.classList.toggle('important')

    if(star) {
        title.innerHTML = title.textContent
    } else {
        title.innerHTML += '<i class="fa-solid fa-star star"></i>'
    }
    
}