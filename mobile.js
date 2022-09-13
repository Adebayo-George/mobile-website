const bredcrumb = document.querySelector('#bredcrumb')
const navBarMenu = document.querySelector('#mobile-menu')
const xBtn = document.querySelector('.icon-wrapper')
const listItems = document.querySelectorAll('.menu-list')

bredcrumb.addEventListener('click', ()=> {
    bredcrumb.style.display = 'none'
    xBtn.style.display = 'block'
    navBarMenu.style.display = 'block'
})
xBtn.addEventListener('click', ()=> {
    xBtn.style.display = 'none'
    navBarMenu.style.display = 'none'
    bredcrumb.style.display = 'block'
})

listItems.forEach((n) => (
  n.addEventListener('click', () => {
    xBtn.style.display = 'none'
    navBarMenu.style.display = 'none'
    bredcrumb.style.display = 'block'
    })));



