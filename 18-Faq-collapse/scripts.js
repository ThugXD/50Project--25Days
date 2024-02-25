const toogles = document.querySelectorAll('.faq-toggle')

toogles.forEach(toggle => {
    toogle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
