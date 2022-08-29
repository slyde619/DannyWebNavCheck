const hamburgerBtn = document.querySelector('#hamburgerBtn')
const navList = document.getElementsByClassName('nav__list')
const navSecondary = document.querySelector('#navSecondary')

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active')
    // for(let i = 0; i > navList.length; i++)
        navList[0].classList.toggle('active')
        navList[1].classList.toggle('active')
})
