// Banco de palabras directamente en el JavaScript, solo debes de agregar las palabras segun el formato, no te olvides de la coma ,
const bancoDePalabras = {
    "abajo": "yvýpe",
    "abalanzarse": "añemombo hese",
    "JavaScript": "Lenguaje de programación para la web.",
    "abanderado": "poyvi guerahaha",
    "abandonado": "itaperéva",
    "abandonar": "motyre'ý",
    "abanicar": "jeipeju",
    "abanico": "pejuha",
    "abigeo": "mymba mondaba",
    "abintestato": "potapaha'yre/techagihápe",
    "abochornado": "otiva/ovapytämbáva",
    "abochornar": "moti/mbohovapytä",
    "abofeteador": "oporohovapetéva",
    "abofetear": "hovapete/hovanupä",
    "abogado": "moähára",
    "abogado/a": "teko ñonokavia",
    "abogar": "jerure mávare/ñe'ë mávarehehápe",
    "el niño/la niña está leyendo": "michia omongueta oï",
    "el niño/la niña habla": "michia oyemongeta",
    "el niño/la niña lee": "michia omongeta",
    "el/la estudiante está hablando": "oyemboe vae Oyemongeta oï",
    "el/la estudiante está leyendo": "oyemboe vae omongueta oï",
    "el/la estudiante está tomando": "Oyemboe vae jou oï",
    "ella es mi mamá": "jaeko chesi",
    "de ustedes": "pe ko",
    "debo abrigarme": "amondetako che tiru",
    "debo descansar": "aputuutako",
    "dedo de la mano": "chepoäka",
    "dedo del pie": "chepisä",
    "delante de": "jenonde ko",
    "doctor/a medico": "oporopoano vae",
    "el maestro/la maestra explica": "oporomboe vae omoesaka",
    "ahí está": "joko oï",
    "ahí tiene": "ko oï",
    "al frente": "jovai",
    "al lado": "iyike koti",
    "aquí tienes": "ko oï",
    "bien también": "ikaviñovi",
    "camisa verde": "mbia itiru jovi vae",
    "color rojo": "yigua pita vae",
    "comer (no especifica qué se Come)": "karu"
};

// Función para buscar una palabra en el diccionario
function buscarPalabra() {
    const palabra = document.getElementById('searchWord').value.trim();
    const resultado = document.getElementById('resultado');
    const wordTitle = document.getElementById('wordTitle');
    const definition = document.getElementById('definition');

    if (bancoDePalabras[palabra]) {
        wordTitle.innerText = palabra;
        definition.innerText = bancoDePalabras[palabra];
        resultado.style.display = 'block';
        resultado.classList.add('fade-in');  // Añadir la animación
    } else {
        wordTitle.innerText = 'Palabra no encontrada';
        definition.innerText = 'Lo sentimos, esta palabra no está en el diccionario.';
        resultado.style.display = 'block';
        resultado.classList.add('fade-in');  // Añadir la animación
    }
}
