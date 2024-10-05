const ejercicios = [
    {
        id: 1,
        oracion: "Che ______ ahata (voy a la escuela.)",
        respuesta: "aguije"
    },
    {
        id: 2,
        oracion: "Nde ______ Nde tembiapo. (yo viajo a otro pais)",
        respuesta: "rejapo"
    },
    {
        id: 3,
        oracion: "Ore ______ marandu (tu haces tu tarea).",
        respuesta: "ko'ẽ"
    },
    {
        id: 4,
        oracion: "Che ______ ahata (voy a la escuela.)",
        respuesta: "aguije"
    },
    {
        id: 5,
        oracion: "che ahou ______ guasu re.(Ellos tienen amor en el corazon",
        respuesta: "ángape   "
    },
    {
        id: 6,
        oracion: "pe reta ______ ochechauka petei karu ápe. (ustedes se divierten en una fiesta",
        respuesta: "ochechauka"
    },
    {
        id: 7,
        oracion: "Che ______ ahata (voy a la escuela.)",
        respuesta: "aguije"
    },
    {
        id: 8,
        oracion: "jae ______ omae (Ellos venden frutas).",
        respuesta: "reta"
    },
    {
        id: 9,
        oracion: "jae reta  ______ aparaviki (Ellos no saben trabajar).",
        respuesta: "oaikua"
    },
    {
        id: 10,
        oracion: "jae reta ______ oporomboe vae (Ellos escuchan al profesor).",
        respuesta: "oendu"
    },
    {
        id: 11,
        oracion: "jae reta______  (Ellos bailan mucho).",
        respuesta: "ohóma"
    },
    {
        id: 12,
        oracion: "jae______ ropa (El compra ropa).",
        respuesta: "ochechauka "
    },
    // Puedes agregar más ejercicios aquí
];

let respuestasUsuario = {};

function iniciarEjercicio() {
    document.querySelector('.intro').style.display = 'none';
    document.getElementById('exercise-section').style.display = 'block';
    cargarEjercicios();
}

function cargarEjercicios() {
    const container = document.getElementById('exercise-container');
    container.innerHTML = '';
    ejercicios.forEach(ejercicio => {
        const div = document.createElement('div');
        div.classList.add('exercise');
        div.innerHTML = `
            <p>Oración ${ejercicio.id}: ${ejercicio.oracion}</p>
            <input type="text" id="respuesta${ejercicio.id}" placeholder="Escribe aquí la palabra...">
        `;
        container.appendChild(div);
    });
    actualizarProgreso();
}

function verificarRespuestas() {
    let correctas = 0;
    ejercicios.forEach(ejercicio => {
        const respuesta = document.getElementById(`respuesta${ejercicio.id}`).value.trim().toLowerCase();
        respuestasUsuario[ejercicio.id] = respuesta;
        if (respuesta === ejercicio.respuesta) {
            correctas++;
            document.getElementById(`respuesta${ejercicio.id}`).style.borderColor = "green";
        } else {
            document.getElementById(`respuesta${ejercicio.id}`).style.borderColor = "red";
        }
    });

    const resultado = document.getElementById('result');
    resultado.innerHTML = `Has acertado ${correctas} de ${ejercicios.length} oraciones.`;
    actualizarProgreso();
}

function actualizarProgreso() {
    const progress = document.getElementById('progress');
    const completadas = Object.keys(respuestasUsuario).length;
    const porcentaje = (completadas / ejercicios.length) * 100;
    progress.style.width = `${porcentaje}%`;
}
