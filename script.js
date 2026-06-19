document
.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre =
    document.getElementById("nombre").value;

    const correo =
    document.getElementById("correo").value;

    const mensaje =
    document.getElementById("mensaje").value;

    console.log("Formulario enviado");

    console.log({
        nombre,
        correo,
        mensaje
    });

    alert(
        "Solicitud registrada correctamente"
    );

    this.reset();

});