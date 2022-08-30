const openMenu = document.querySelector('.open')
const closeMenu = document.querySelector('.close')
const nav = document.querySelector('.nav-ul')

openMenu.addEventListener('click', () => {
	closeMenu.style.display = 'block'
	openMenu.style.display = 'none'
	nav.style.opacity = '1'
})

closeMenu.addEventListener('click', () => {
	closeMenu.style.display = 'none'
	openMenu.style.display = 'block'
	nav.style.opacity = '0'
})
