// ======================================================
// 1. CONSULTA RÁPIDA DE PLATOS (VIANDAS)
// ======================================================
function consultarPlato(nombrePlato) {
    alert("Seleccionaste: " + nombrePlato + ". Escribinos por WhatsApp para coordinar el pedido de esta semana.");
}

// ======================================================
// 2. FORMULARIO DE CATERING: VALIDACIÓN Y CONFIRMACIÓN
// ======================================================
function enviarPresupuesto() {
    // Tomamos los datos de los inputs usando .value
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const personas = document.getElementById("personas").value;
    const tipoEvento = document.getElementById("tipoEvento").value;
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

    // Condicional para validar que no queden campos vacíos
    if (nombre === "" || fecha === "" || personas === "" || tipoEvento === "") {
        mensajeConfirmacion.innerText = "Por favor, completá los campos principales para solicitar tu presupuesto.";
        mensajeConfirmacion.style.color = "red";
    } else {
        mensajeConfirmacion.innerText = "¡Gracias " + nombre + "! Recibimos tu consulta para " + personas + " personas. Te responderemos a la brevedad.";
        mensajeConfirmacion.style.color = "#174783";

        // Vaciamos el formulario tras enviar
        document.getElementById("formCatering").reset();
    }
}

// ======================================================
// 3. CARRUSEL DE RESEÑAS (RECOMENDACIONES)
// ======================================================
// Array de objetos con las reseñas de los clientes
const resenas = [
    {
        comentario: '"Las viandas llegaron impecables y riquísimas. Una solución total para toda la semana laboral."',
        autor: "— Florencia M."
    },
    {
        comentario: '"El catering para el cumpleaños superó las expectativas de todos. El osobuco braseado fue la estrella."',
        autor: "— Gonzalo P."
    },
    {
        comentario: '"Comida casera de verdad, con ingredientes frescos y porciones muy abundantes. 100% recomendados."',
        autor: "— Mariana S."
    }
];

// Variable para controlar qué reseña se está mostrando
let indiceResena = 0;

function cambiarResena(direccion) {
    // Sumamos o restamos según la flecha tocada (-1 o 1)
    indiceResena = indiceResena + direccion;

    // Si nos pasamos del final, vuelve al principio
    if (indiceResena >= resenas.length) {
        indiceResena = 0;
    }

    // Si retrocedemos antes del primero, va al último
    if (indiceResena < 0) {
        indiceResena = resenas.length - 1;
    }

    // Mostramos la reseña actual en el HTML mediante el DOM
    document.getElementById("textoResena").innerText = resenas[indiceResena].comentario;
    document.getElementById("autorResena").innerText = resenas[indiceResena].autor;
}