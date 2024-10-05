// Respuestas correctas en guaraní para los números (puedes agregar más según los números que desees)
const respuestasCorrectas = {
    11: "pañandepo metei",
    12: "pañandepo mokoi",
    13: "pañandepo mboapy",
    14: "pañandepo irundy",
    15: "pañandepo pandepo",
    16: "pañandepo ova",
    17: "pañandepo chiu",
    18: "pañandepo juri",
    19: "pañandepo chau",
    21: "mokoipa metei",
    22: "mokoipa mokoi",
    23: "mokoipa mboapy",
    24: "mokoipa irundy",
    25: "mokoipa pandepo",
    26: "mokoipa ova",
    27: "mokoipa chiu",
    28: "mokoipa juri",
    29: "mokoipa chau",
    31: "mboapypa metei",
    32: "mboapypa mokoi",
    33: "mboapypa mboapy",
    34: "mboapypa irundy",
    35: "mboapypa pandepo",
    36: "mboapypa ova",
    37: "mboapypa chiu",
    38: "mboapypa juri",
    39: "mboapypa chau",
    41: "irundypa metei",
    42: "irundypa mokoi",
    43: "irundypa mboapy",
    44: "irundypa irundy",
    45: "irundypa pandepo",
    46: "irundypa ova",
    47: "irundypa chiu",
    48: "irundypa juri",
    49: "irundypa chau",
    51: "pandepopa metei",
    52: "pandepopa mokoi",
    53: "pandepopa mboapy",
    54: "pandepopa irundy",
    55: "pandepopa pandepo",
    56: "pandepopa ova",
    57: "pandepopa chiu",
    58: "pandepopa juri",
    59: "pandepopa chau",
    61: "ovapa metei",
    62: "ovapa mokoi",
    63: "ovapa mboapy",
    64: "ovapa irundy",
    65: "ovapa pandepo",
    66: "ovapa ova",
    67: "ovapa chiu",
    68: "ovapa juri",
    69: "ovapa chau",
    71: "chiupa metei",
    72: "chiupa mokoi",
    73: "chiupa mboapy",
    74: "chiupa irundy",
    75: "chiupa pandepo",
    76: "chiupa ova",
    77: "chiupa chiu",
    78: "chiupa juri",
    79: "chiupa chau",
    81: "juripa metei",
    82: "juripa mokoi",
    83: "juripa mboapy",
    84: "juripa irundy",
    85: "juripa pandepo",
    86: "juripa ova",
    87: "juripa chiu",
    88: "juripa juri",
    89: "juripa chau",
    91: "chaupa metei",
    92: "chaupa mokoi",
    93: "chaupa mboapy",
    94: "chaupa irundy",
    95: "chaupa pandepo",
    96: "chaupa ova",
    97: "chaupa chiu",
    98: "chaupa juri",
    99: "chaupa chau",

    
    // Añadir más números y respuestas en guaraní aquí...
};

// Función para verificar las respuestas
function verificarRespuestas() {
    // Recorremos cada input y verificamos si la respuesta es correcta
    for (let key in respuestasCorrectas) {
        const inputId = `num-${key}`;
        const userAnswer = document.getElementById(inputId).value.trim().toLowerCase();
        const correctAnswer = respuestasCorrectas[key];

        // Si la respuesta es correcta, cambiar el borde a verde, si no, a rojo
        if (userAnswer === correctAnswer) {
            document.getElementById(inputId).style.borderColor = "green";
        } else {
            document.getElementById(inputId).style.borderColor = "red";
            document.getElementById(inputId).value = ''; // Borrar lo incorrecto
        }
    }
}

// Asociar la función verificarRespuestas al botón de enviar
document.querySelector('.submit-button').addEventListener('click', function() {
    verificarRespuestas();
});