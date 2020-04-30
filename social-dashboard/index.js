const toggler = document.querySelector('input')
const squares = document.querySelectorAll('.square')
const overviewSquares = document.querySelectorAll('.overview-square')

toggler.addEventListener('click', e => {

    document.querySelector('.dark').classList.toggle('light')
    document.querySelector('.heading').classList.toggle('light-heading')
    document.body.classList.toggle('light-theme')
    document.querySelector('.hero-container').classList.toggle('light-hero')
    document.querySelector('.slider').classList.toggle('light-slider')

    squares.forEach(square => {
        square.classList.toggle('light-square')
    })

    overviewSquares.forEach(square => {
        square.classList.toggle('light-overview-square')
    })
    
    
    
})