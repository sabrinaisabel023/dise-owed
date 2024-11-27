
document.addEventListener('DOMContentLoaded', function () {
    const sobreMI = document.getElementById('sobre-mi')
    const experiencia = document.getElementById('experiencia')
    const contentSobremi = document.getElementById('content-principal')
    const contentExperiencia = document.getElementById('content-experiencia')

    if (sobreMI) {
        sobreMI.addEventListener('click', function () {
            this.classList.remove('box')
            this.classList.add('box-active')
            experiencia.classList.remove('box-active')
            experiencia.classList.add('box')
            contentSobremi.classList.remove('ocultar')
            contentSobremi.classList.add('mostrar')
            contentExperiencia.classList.remove('mostrar')
            contentExperiencia.classList.add('ocultar')
        })
    }

    if (experiencia) {
        experiencia.addEventListener('click', function () {
            this.classList.remove('box')
            this.classList.add('box-active')
            sobreMI.classList.remove('box-active')
            sobreMI.classList.add('box')
            contentSobremi.classList.remove('mostrar')
            contentSobremi.classList.add('ocultar')
            contentExperiencia.classList.remove('ocultar')
            contentExperiencia.classList.add('mostrar')
        })
    }
})