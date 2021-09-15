const menuBtn = document.getElementById('button')
const closeBtn = document.getElementById('close') 
const menuSection = document.querySelector('.menu')


menuBtn.addEventListener('click', () => {
    menuSection.style.display = 'Block'
})

closeBtn.addEventListener('click', () => {
    menuSection.style.display = 'None'

})

