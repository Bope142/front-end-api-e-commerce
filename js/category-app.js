const removeClickEffect = () => {
    document.querySelectorAll('.categorie').
    forEach(cat => cat.classList.remove('select__category'))
}
const addClickEffect = (cat) => {
    cat.classList.add('select__category')
}

const clickCategoryEvent = () => {
    if (document.querySelectorAll('.categorie').length > 0) {
        document.querySelectorAll('.categorie').
        forEach(cat => cat.addEventListener('click', (e) => {
            for (let i = 0; i < e.path.length; i++) {
                if (e.path[i].classList.contains('categorie')) {
                    removeClickEffect()
                    addClickEffect(e.path[i])
                    break
                }
            }
        }))
    }
    0817900078
}
window.addEventListener('load', () => {
    clickCategoryEvent()
})
