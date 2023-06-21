bars = document.querySelector(".bars");
bars.onclick = function(){
    navBar = document.querySelector(".nav_bar");
    navBar.classList.toggle("active")
}

const miBoton = document.getElementById("miBoton");

// miBoton.addEventListener("click", function(){
//     alert("Primer Boton");
// })


//Formulario
function showAlert(){
    alert("Hola, esta es una alerta desde JavaScript")
}

const form = document.getElementById("myForm")

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm(){
    const input = document.getElementById("email")
    const inputValue = input.value

    if(!validateEmail(inputValue)){
        alert("Ingrese Correo Valido")
    }else{
        alert("Correo Enviado")
    }
}

form.addEventListener("submit", function(even){
    console.log("holaaaaaaaa")
    even.preventDefault()
    validateForm();
})

