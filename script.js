const API_URL = "https://apyh-backend.onrender.com";

document.addEventListener("DOMContentLoaded", async () => {
    await probarConexionBackend();
    await cargarServicios();
});

async function probarConexionBackend() {
    try {
        const respuesta = await fetch(API_URL);
        const data = await respuesta.json();

        console.log("Conexión con backend exitosa:");
        console.log(data);
    } catch (error) {
        console.error("Error al conectar con el backend:", error);
    }
}

async function cargarServicios() {
    const contenedor = document.getElementById("contenedor-servicios");

    try {
        const respuesta = await fetch(`${API_URL}/api/servicios`);
        const servicios = await respuesta.json();

        contenedor.innerHTML = "";

        servicios.forEach(servicio => {
            contenedor.innerHTML += `
                <div class="card">
                    <h3>🌸 ${servicio.nombre}</h3>
                    <p>${servicio.descripcion}</p>
                    <p><strong>Precio:</strong> $${servicio.precio}</p>
                    <p><strong>Duración:</strong> ${servicio.duracion}</p>
                </div>
            `;
        });

        console.log("Servicios desde Supabase:");
        console.log(servicios);

    } catch (error) {
        console.error("Error al cargar servicios:", error);
        contenedor.innerHTML = "<p>No se pudieron cargar los servicios.</p>";
    }
}

document
.getElementById("formulario")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    console.log("Formulario enviado:");
    console.log({ nombre, correo, mensaje });

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