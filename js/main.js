const $humburger = document.querySelector('.humburger')
const $menu = document.querySelector('.menu')

$humburger.onclick = function(e){
    e.preventDefault()
    this.classList.toggle('active')
    $menu.classList.toggle('show')
}

