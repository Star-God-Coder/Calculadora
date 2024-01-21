
document.addEventListener("DOMContentLoaded", function(){
let boton = document.getElementById("Boton")
let fechaDeNacimientoInput = document.getElementById("fecha_de_nacimiento")
let fechaActualInput = document.getElementById("fecha_Actual")
let Resultado = document.getElementById("Resultado")
let div3 = document.querySelector(".Main--Container--3Div")

boton.addEventListener("click", function(){
    let fechaDeNacimiento = new Date(fechaDeNacimientoInput.value)
    let fechaActual = new Date(fechaActualInput.value)
    
    let diferenciaEnMilisegundos = fechaActual - fechaDeNacimiento 
    let diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)
    let diferenciaEnMeses = diferenciaEnDias / 30.44 
    let diferenciaEnAños = diferenciaEnDias / 365.25

    div3.innerHTML = ""
    Resultado.innerText =`Tu edad es de aproximadamente ${Math.floor(diferenciaEnAños)} Años, ${Math.floor(diferenciaEnMeses % 12)} meses y ${Math.floor(diferenciaEnDias % 30.44)} dias.`
})
})