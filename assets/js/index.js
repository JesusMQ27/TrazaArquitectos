/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function enviarMensaje() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var divMensaje = document.getElementById("divMensaje");
    var respuesta = "";

    if (name.trim() === "") {
        respuesta += "Ingrese su nombre completo<br>";
    }
    if (email.trim() === "") {
        respuesta += "Ingrese su correo electrónico<br>";
    } else {
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (!emailRegex.test(email)) {
            respuesta += "Ingrese un correo electrónico valido<br>";
        }
    }
    if (subject.trim() === "") {
        respuesta += "Ingrese el tema<br>";
    }
    if (message.trim() === "") {
        respuesta += "Ingrese el mensaje<br>";
    }
    if (respuesta !== "") {
        divMensaje.style.display = '';
        divMensaje.innerHTML = respuesta;
        divMensaje.classList.remove("alert");
        divMensaje.classList.remove("alert-success");
        divMensaje.classList.add("alert");
        divMensaje.classList.add("alert-danger");
    } else {
        divMensaje.style.display = '';
        divMensaje.innerHTML = "Información registrada.";
        divMensaje.classList.remove("alert");
        divMensaje.classList.remove("alert-danger");
        divMensaje.classList.add("alert");
        divMensaje.classList.add("alert-success");
        setTimeout(hideMessage, 3000)
    }
}

function hideMessage() {
    var divMensaje = document.getElementById("divMensaje");
    divMensaje.style.display = 'none';
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}