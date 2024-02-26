const toogles = document.querySelectorAll('.faq-toggle')

toogles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
