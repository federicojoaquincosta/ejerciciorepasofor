const ANIO_MINIMO = 1922;

const ANIO_MAXIMO = 2004;

const ANIO_ACTUAL = 2022;

let nombreUsuario = "nombrepordefecto";

let edadUsuario = 0;

for (let i = ANIO_MINIMO; i <= ANIO_MAXIMO; i++) {

    document.querySelector("#nacimiento_usuario").innerHTML += `
    <option value="${i}">${i}</option>
    `
}

function mostrarDatos() {
    nombreUsuario = document.querySelector("#nombre_usuario").value;
    edadUsuario = (ANIO_ACTUAL - document.querySelector("#nacimiento_usuario").value);

    document.querySelector("#informacion").innerHTML = `
        ${nombreUsuario} tenés ${edadUsuario} años
    `
}


