function validar(){
    var nombre, apellidos, email, usuario, contraseña, direccion, expresion;
    nombre = document.getElementById("Nombre").value;
    apellidos = document.getElementById("Apellido").value;
    email = document.getElementById("Email").value;
    usuario = document.getElementById("Usuario").value;
    contraseña = document.getElementById("Contreña").value;
    rcontraseña = document.getElementById("RContreña").value;
    direccion = document.getElementById("Direccion").value;
    mail_expresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    cont_expresion = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#,%,/,&]).*$/;

    if(nombre === "" || apellidos === "" || email === "" || usuario === "" || contraseña === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if (nombre.length > "25"){
        alert("El campo de Nombre debe tener 25 caracteres o menos.");
        return false;
    }
    else if (apellidos.length > "25"){
        alert("El campo de Apellidos debe tener 25 caracteres o menos.");
        return false;
    }
    else if (usuario.length >= "25" || usuario.length < "10"){
        alert("El campo de Usuario debe tener una longitud de máximo 20 y mínimo 10 caracteres.");
        return false;
    }  
    else if (contraseña.length >= "20" || contraseña.length < "15"){
        alert("El campo de Contraseña debe tener una longitud de máximo 20 y mínimo 15 caracteres.");
        return false;
    }
    else if (contraseña !== rcontraseña){
        alert("Las contraseñas no coinciden");
        return false;
    }
    else if (!cont_expresion.test(contraseña)){
        alert("La contraseña debe contener al menos una mayúscula, numeros, letras y/o los siguientes caracteres [#,%,/,&]");
        return false;
    }
    else if (email.length > "120"){
        alert("El campo de correo debe tener 120 caracteres o menos");
        return false;
    }
    else if (!mail_expresion.test(email)){
        alert("El correo no es valido \nFormato de Correo: usuario@correo.com");
        return false;
    }
    else if (telefono.length > "10"){
        alert("El telefono es muy largo");
        return false;
    }
    else if (isNaN(telefono)){
        alert("El telefono ingresado no es un Numero");
        return false;
    }
    

}

