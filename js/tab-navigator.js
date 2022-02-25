const linkIfram =['./home-app.html','./cart.html','./profil.html']

const changeTabLink=(indexLinks)=>{
    document.querySelector('.app-views').setAttribute('src',linkIfram[indexLinks])
}
const DisableAllsTab = () => {
    document.querySelectorAll('.btn__item_tab').
    forEach(tabItem => tabItem.classList.remove('btn__item__active'))
}

const SelectTab = (Tab) => {
    Tab.classList.add('btn__item__active')
}

const tabItemEven = () => {
    document.querySelectorAll('.btn__item_tab').
    forEach((tab,index) => {
        tab.addEventListener('click', (e) => {
                for (let i = 0; i < e.path.length; i++) {
                    if (e.path[i].classList.contains('btn__item_tab')) {
                        DisableAllsTab()
                        SelectTab(e.path[i])
                        changeTabLink(index)
                        break
                    }
                }
            }

        )
    })
}
window.addEventListener('load', () => {
    tabItemEven()
})
