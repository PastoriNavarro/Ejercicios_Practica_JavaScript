function validar(){
    const formulario = document.forms[0];

    const {usuario, correo, contraseña, contraseña_repetida} = formulario;
    const valorUsuario = usuario.value;
    const valorCorreo = correo.value;
    const valorContraseña = contraseña.value;
    const valorContraseña_repetida = contraseña_repetida.value;

    if(valorUsuario.length < 4){

        alert("El nombre de usuario debe tener al menos cuatro caracteres");
        return false;

    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valorCorreo)){

        alert(`Ingrese un email válido`);
        return false;

    }else if (valorContraseña.length < 6 || valorContraseña.length > 12){
        
        alert(`la contraseña debe tener entre 6 y 12 caracteres`);
        return false;

    }else if (valorContraseña_repetida != valorContraseña){

        alert(`Las contraseñas no coinciden`);
        return false;
    }

    return true;

}
