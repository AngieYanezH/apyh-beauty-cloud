const API_URL = "https://apyh-backend.onrender.com";

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const respuesta = await fetch(API_URL);
        const data = await respuesta.json();

        console.log("Conexión con backend exitosa:");
        console.log(data);
    } catch (error) {
        console.error("Error al conectar con el backend:", error);
    }
});

document
.getElementById("formulario")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const nombre =
    document.getElementById("nombre").value;

    const correo =
    document.getElementById("correo").value;

    const mensaje =
    document.getElementById("mensaje").value;

    const datosFormulario = {
        nombre,
        correo,
        mensaje
    };

    console.log("Formulario enviado:");
    console.log(datosFormulario);

    try {
        const respuesta = await fetch(`${API_URL}/api/health`);
        const data = await respuesta.json();

        console.log("Respuesta del backend:");
        console.log(data);

        alert("Solicitud registrada correctamente y conectada con el backend");
    } catch (error) {
        console.error("Error al conectar con el backend:", error);
        alert("Solicitud registrada localmente, pero no se pudo conectar con el backend");
    }

    this.reset();

});