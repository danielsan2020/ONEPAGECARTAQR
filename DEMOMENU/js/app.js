
let description = document.querySelectorAll('.conatiner-description')
let imagen = document.querySelectorAll('.menu-img');
let nombre = document.querySelectorAll('.menu-name');
let outer = document.getElementById('outer-from-modal')

imagen.forEach(item => {
    item.addEventListener('click', () => {
        const elemet = item.parentElement.parentElement.previousSibling.previousElementSibling
        if(elemet.classList.contains('conatiner-description')) {
            if(elemet.classList.contains('desactive')){
                elemet.classList.remove('desactive');
            }
        }
    })
})

nombre.forEach(item => {
    item.addEventListener('click', () => {
        const elemet = item.parentElement.parentElement.parentElement.previousSibling.previousElementSibling
        if(elemet.classList.contains('conatiner-description')) {
            if(elemet.classList.contains('desactive')){
                elemet.classList.remove('desactive');
            }
        }
    })
})


description.forEach(item => {
    let salir = item.firstChild.nextSibling.firstChild.nextSibling.firstChild.nextSibling;
    let elemet = salir.parentNode.parentNode
    const isVisible = elemet => !!elemet && !!( elemet.offsetWidth || elemet.offsetHeight || elemet.getClientRects().length )
    salir.addEventListener('click', () => {
        if(elemet.parentNode.classList.contains('conatiner-description')) {
            elemet.parentNode.classList.toggle('desactive')
        }
    })
    outer.addEventListener('click', e => {
        if (!elemet.contains(e.target) && isVisible(elemet) && !(e.target.classList.contains('img-menu') || e.target.classList.contains('name-menu'))) {
            item.classList.add('desactive');
            }
    })
})

