import { register, sesion } from "./api.mjs";

//manejo de formulario para el  registro de usuarios
document.getElementById('loginBtn').addEventListener('click', () => {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
});

document.getElementById('registerBtn').addEventListener('click', () => {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
});



document.getElementById('create-Form').addEventListener('submit', async (event) => {

    event.preventDefault()
    const name = document.getElementById('registerName').value
    const email = document.getElementById('registerEmail').value
    const password = document.getElementById('registerPassword').value
    // Mostramos los valores que se ingresan
    //para verificar que si se estan capturando
    console.log('name ', name)
    console.log('Email ', email)
    console.log('Password ', password)

    if (!name || !email || !password) {
        alert('llene todos los campos')
    }


    const response = await register(email, password, name)
    if (response) {
        alert('Registro exiso')
    }

})

//Manejo de inicio de sesion
document.getElementById('formLogin').addEventListener('submit', async (event) => {
    event.preventDefault()
    const loginEmail = document.getElementById('loginEmail').value
    const loginPassword = document.getElementById('loginPassword').value
    console.log(loginEmail)
    console.log(loginPassword)

    const response = await sesion(loginEmail, loginPassword)
    loginEmail.value = ''
    loginPassword.value = ''

})