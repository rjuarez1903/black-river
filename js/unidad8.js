function mostrar(curso) {

    var box = document.getElementById(curso)
    if (box.style.display == 'none') {
        box.style.display = 'block'
    } 
    else {
        box.style.display = 'none'
        }
}
