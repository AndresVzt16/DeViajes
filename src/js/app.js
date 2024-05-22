const toogle = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.toggle-menu')
const fondo = document.querySelector('.fondo-menu')
const cards = document.querySelector('.tours')
const btnSubmit = document.querySelector('.btn-submit')
const formulario = document.querySelector('.formulario')




toogle.addEventListener('click', () => {
    toogle.classList.toggle('hidden');
    toogle.classList.toggle('show');
    menu.classList.toggle('hidden')
    fondo.classList.toggle('hidden')
    
})

if(formulario){
    formulario.addEventListener('submit' , (e) => {
        e.preventDefault()
        const nombre = document.querySelector('#nombre').value
        const email = document.querySelector('#email').value
        const telefono = document.querySelector('#telefono').value
        const preferenciaSeleccionada = document.querySelector('input[name="preferencia"]:checked');
       
        const viaje = document.querySelector('#viajes').value
        if([nombre, email, telefono, preferenciaSeleccionada, viaje].includes('') || preferenciaSeleccionada === null){
            console.log('Hay campos vacios')
            return alert('Todos los campos son obligatorios')
        }
        const preferencia = preferenciaSeleccionada.value

        const resumen = document.querySelector('.resumen')
        limpiarHTML(resumen)
        crearResumen(nombre, email, telefono, preferencia, viaje)
        
    
    })
}



const limpiarHTML = (contenedor) => {
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }

}
const crearResumen = (nombre, email, telefono, preferencia, viaje) => {
    const resumen = document.querySelector('.resumen')
    const titulo = document.createElement('h3')
    titulo.textContent = "Resumen de solicitud"

    const parrafoViaje = document.createElement('p')
    parrafoViaje.classList.add('Resumen-viaje')
    parrafoViaje.textContent = `Destino: `
    const spanViaje = document.createElement('span');
    spanViaje.classList.add('span-viaje')
    spanViaje.textContent = viaje

    const parrafoNombre = document.createElement('p')
    parrafoNombre.classList.add('Resumen-viaje')
    parrafoNombre.textContent = `Nombre: `
    const spanNombre = document.createElement('span');
    spanNombre.classList.add('span-viaje')
    spanNombre.textContent = nombre

    const parrafoEmail = document.createElement('p')
    parrafoEmail.classList.add('Resumen-viaje')
    parrafoEmail.textContent = `Email: `
    const spanEmail = document.createElement('span');
    spanEmail.classList.add('span-viaje')
    spanEmail.textContent = email

    const parrafoTelefono = document.createElement('p')
    parrafoTelefono.classList.add('Resumen-viaje')
    parrafoTelefono.textContent = `Telefono: `
    const spanTelefono = document.createElement('span');
    spanTelefono.classList.add('span-viaje')
    spanTelefono.textContent = telefono

    const parrafoPref = document.createElement('p')
    parrafoPref.classList.add('Resumen-viaje')
    parrafoPref.textContent = `Preferencia: `
    const spanPref = document.createElement('span');
    spanPref.classList.add('span-viaje')
    spanPref.textContent = preferencia

    parrafoViaje.appendChild(spanViaje)
    parrafoNombre.appendChild(spanNombre)
    parrafoEmail.appendChild(spanEmail)
    parrafoTelefono.appendChild(spanTelefono)
    parrafoPref.appendChild(spanPref)

    resumen.appendChild(titulo)
    resumen.appendChild(parrafoViaje)
    resumen.appendChild(parrafoNombre)
    resumen.appendChild(parrafoEmail)
    resumen.appendChild(parrafoTelefono)
    resumen.appendChild(parrafoPref)

}
