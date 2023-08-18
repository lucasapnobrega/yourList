export default (targetElement) => {
    const parentElement = targetElement.closest('.list')
    const title = parentElement.querySelector('h4').textContent

    navigator.clipboard.writeText(title)

    targetElement.classList.add('bg-green')
    setTimeout(() => {
        targetElement.classList.remove('bg-green')
    }, 1750)
}