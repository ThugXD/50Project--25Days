const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.ratings-container')
const sendbtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.pareentNode.classList.contains('rating') && e.target.nextElementSibling){
        removeActive()
        e.target.pareentNode.classList.add('active')
        selectedRating =e.target.nextElementSibling.innerHTML 
    } else if (
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ){
        removeActive()
        e.target.pareentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }
})

sendbtn.addEventListener('click', (e) => {
    panel.innerHTML= `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br>
        <strong>FeedBack: ${selectedRating}</strong>
        <p>We will use your feedBack to improve our customer support</p>
    `
})

function removeActive(){
   for(let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove('active')
   } 
}