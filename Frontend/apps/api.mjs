const apiUrl = 'http://localhost:3000/users'
fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))



//Metodo  http para el registro de usuarios
export async function register(email, password, name) {
    try {
        const response = await fetch(`${apiUrl}/register`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, name })
            }
        )

        if (!response.ok) {
            throw new Error('Error en le ingreso de datos')
        }

        return await response.json()
    } catch (error) {
        console.error('fatal errror ', error)
    }

}

//Manejo para el inicio de sesion
export async function sesion(email, password) {
    try {
        const response = await fetch(`${apiUrl}/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            }
        )
        const data = await response.json()
        //guardar el token en el localStore
        if (data.success) {
            localStorage.setItem('token', data.token)
            alert('Inicio de sesion  exitoso')
            // en esta parte se redirige a la pagina si es necesario
            return true
        }
    } catch (error) {
        console.error('Error de inicion de sesion ', error)
        alert(data.mensaje || 'credenciales incorrectas')
    }

}