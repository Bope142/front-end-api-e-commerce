const ShowProductDetails =()=>{
    document.querySelectorAll('.btn__add__cart').forEach(btnDetails =>{
       btnDetails.addEventListener('click',(e)=>{
//           console.log(e)
//        console.log(e.path[e.path.length-1].location.assign('../detail.html')) 
    e.view.parent.location.assign('../detail.html')
         
       }) 
    })
}

window.addEventListener('load',()=>{
    ShowProductDetails()
})