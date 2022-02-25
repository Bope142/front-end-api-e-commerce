const scrollEventShoes = () => {
    document.querySelector('.container__shoes_details').addEventListener('scroll', (e) => {

        if (e.target.scrollTop > 50) {
            document.querySelector('.image__shoes').classList.add('image__shoes_scroll')
        }else{
             document.querySelector('.image__shoes').classList.remove('image__shoes_scroll')
        }
    })
}
const back=()=>{
    document.querySelector('.btn-back').addEventListener('click',()=>{
        window.location.assign('../index.html')
    })
}
window.addEventListener('load',()=>{
    scrollEventShoes()
    back()
})
