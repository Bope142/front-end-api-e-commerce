const deleteEffect =(cart,parents)=>{
    cart.classList.add('btn__delete_cart_active')
    parents.classList.add('cart__delete')
    setTimeout(()=>{
        document.querySelector('.container__cart')
    .removeChild(parents)
    },600)
    
}

const deleteCart = () => {
    document.querySelectorAll('.btn__delete_cart').
    forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log(e)
            let posParent
            for (let i = 0; i < e.path.length; i++) {
                if (e.path[i].classList.contains('btn__delete_cart')) {
                   deleteEffect(e.path[i],e.path[i+1])
                    break
                }
            }
        })
    })

}


window.addEventListener('load', () => {
    deleteCart()
})
