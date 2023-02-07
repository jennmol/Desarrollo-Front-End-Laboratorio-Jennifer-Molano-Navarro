//Esta función valida el campo Nombre del formulario. Si el campo está vacío, muestra un mensaje de error y agrega la clase 'wrong' al input. Si el valor ingresado no es de tipo texto, también muestra un mensaje de error. En caso contrario, remueve la clase 'wrong' y agrega la clase 'correct'.
function validateName(){
    let name = document.formulario.name.value; //Se obtiene el valor del input con nombre 'name'.
    let name_error = document.getElementById('name_error'); //Se obtiene el elemento con id 'name_error'.
    let name_input = document.formulario.name; //Se obtiene el elemento input con nombre 'name'.

    if(name == ''){ //Si el campo está vacío...
        name_error.innerHTML = 'El campo Nombre es obligatorio'; //Muestra un mensaje de error en el elemento con id 'name_error'.
        name_error.style.display = 'block'; //Muestra el mensaje de error en pantalla (display block).
        name_input.classList.add('wrong'); //Agrega la clase wrong al input con nombre 'name'. 
        name_class[0].style.display = 'block'; //Muestra los elementos con clase wrong en pantalla (display block). 
        name_class_correct[0].style.display = 'none'; //Oculta los elementos con clase correct (display none). 
        return false; 
    } else if(!isNaN(name)){ //Si el valor ingresado no es de tipo texto... 
        name_error.innerHTML = 'El campo Nombre debe ser de tipo Texto'; //Muestra un mensaje de error en el elemento con id 'name_error'.
        name_error.style.display = 'block'; //Muestra el mensaje de error en pantalla (display block).
        name_input.classList.add('wrong'); //Agrega la clase wrong al input nombre 'name'. 
        name_class[0].style.display = 'block'; //Muestra los elementos con clase wrong en pantalla (display block). 
        name_class_correct[0].style.display = 'none'; //Oculta los elementos con clase correct (display none). 
        return false;
    } else { //Si el valor ingresado es válido... 
        name_error.style.display = 'none'; //Oculta el mensaje de error (display none). 
        name_input.classList.remove('wrong'); //Remueve la clase wrong del input con nombre 'name'. 
        name_input.classList.add('correct'); //Agrega la clase correct al input con nombre 'name'. 
        name_class[0].style.display = 'none'; //Oculta los elementos con clase wrong (display none). 
        name_class_correct[0].style.display = 'block'; //Muestra los elementos con clase correct en pantalla (display block). 
        return true; 
    }
}


//Función para validar el campo Email del formulario. Se comprueba que el campo no esté vacío y que el valor introducido cumpla con una expresión regular para validar un email. 
function validateEmail(){
    let email = document.formulario.email.value; 
    let email_error = document.getElementById('email_error'); 
    let email_input = document.formulario.email;  
    let email_regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; 

    if(email == ''){ //Si el campo está vacío...
        email_error.innerHTML = 'El campo Email es obligatorio';
        email_error.style.display = 'block';
        email_input.classList.add('wrong');
        email_class[0].style.display = 'block';
        email_class_correct[0].style.display = 'none';
        return false;
    } else if(!email_regex.test(email)){ //Si el valor ingresado no es de tipo email...
        email_error.innerHTML = 'El formato del Email no es válido';
        email_error.style.display = 'block';
        email_input.classList.add('wrong');
        email_class[0].style.display = 'block';
        email_class_correct[0].style.display = 'none';
        return false;
    } else { //Si el valor ingresado es válido... 
        email_error.style.display = 'none';
        email_input.classList.remove('wrong');
        email_input.classList.add('correct');
        email_class[0].style.display = 'none';
        email_class_correct[0].style.display = 'block';
        return true;
    }
}


// Función para validar el campo Clave del formulario. Se comprueba que el campo no esté vacío y que la longitud de la clave sea al menos 8 caracteres. 
function validatePassword(){
    let password = document.formulario.password.value;
    let password_error = document.getElementById('password_error');
    let password_input = document.formulario.password;

    if(password == ''){ //Si el campo está vacío...
        password_error.innerHTML = 'El campo Clave es obligatorio';
        password_error.style.display = 'block';
        password_input.classList.add('wrong');
        password_class[0].style.display = 'block';
        password_class_correct[0].style.display = 'none';
        return false;
    } else if(password.length < 8){ //Si el valor ingresado no tiene como mínimo 8 carácteres...
        password_error.innerHTML = 'El campo Clave debe tener al menos 8 caracteres';
        password_error.style.display = 'block';
        password_input.classList.add('wrong');
        password_class[0].style.display = 'block';
        password_class_correct[0].style.display = 'none';
        return false;
    } else { //Si el valor ingresado es válido... 
        password_error.style.display = 'none';
        password_input.classList.remove('wrong');
        password_input.classList.add('correct');
        password_class[0].style.display = 'none';
        password_class_correct[0].style.display = 'block';
        return true;
    }
}


// Función para validar el campo Confirme su clave del formulario. Se comprueba que los valores introducidos en los campos Clave y Confirme su clave sean idénticos. 
function validateConfirm(){
    let password = document.formulario.password.value;
    let confirmarClave = document.formulario.confirmarClave.value;
    let confirm_error = document.getElementById('confirm_error');
    let confirm_input = document.formulario.confirmarClave;

    if(confirmarClave == ''){ //Si el campo está vacío...
        confirm_error.innerHTML = 'El campo Confirme su clave es obligatorio';
        confirm_error.style.display = 'block';
        confirm_input.classList.add('wrong');
        confirm_class[0].style.display = 'block';
        confirm_class_correct[0].style.display = 'none';
        return false;
    } else if(password != confirmarClave){ //Si el valor ingresado no es igual al valot de la Clave...
        confirm_error.innerHTML = 'Los valores introducidos en los campos Clave y Confirme su clave deben ser idénticos';
        confirm_error.style.display = 'block';
        confirm_input.classList.add('wrong');
        confirm_class[0].style.display = 'block';
        confirm_class_correct[0].style.display = 'none';
        return false;
    } else { //Si el valor ingresado es válido... 
        confirm_error.style.display = 'none';
        confirm_input.classList.remove('wrong');
        confirm_input.classList.add('correct');
        confirm_class[0].style.display = 'none';
        confirm_class_correct[0].style.display = 'block';
        return true;
    }
}


//Función para validar el formulario
function validateForm(){
    if(validateName() && validateEmail() && validatePassword() && validateConfirm()){
        alert('La inscripción ha sido correcta');
        return true;
    } else {
        return false;
    }
}


// Función para añadir un estilo de borde al botón enviar del formulario cuando se hace click sobre él.
function borderButton(){
    let button = document.getElementById('button');
    button.style.border = '2px solid #6C63FF';
}