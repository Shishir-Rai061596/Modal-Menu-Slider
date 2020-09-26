const TOGGLE = document.querySelector('#toggle');
const OPEN = document.querySelector('#open');
const MODAL = document.querySelector('#modal')
const CLOSEMODAL = document.querySelector('#close')

const num = Math.floor(Math.random() * 100) + 1

const handleToggler = () => {
    const num = Math.floor(Math.random() * 100) + 1

    document.querySelector('img').src = `https://randomuser.me/api/portraits/men/${num}.jpg`
    document.body.classList.toggle('show-nav')
}
const handleOpenModal = () => MODAL.classList.add('show-modal');
const handleCloseModal = () => MODAL.classList.remove('show-modal');

TOGGLE.addEventListener('click', handleToggler)
OPEN.addEventListener('click', handleOpenModal)
CLOSEMODAL.addEventListener('click', handleCloseModal)

window.addEventListener('click', e => e.target == MODAL ? MODAL.classList.remove('show-modal') : false)
