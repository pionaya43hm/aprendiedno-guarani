let score = 0;
let currentLevel = 1;
const totalLevels = 12;

function checkAnswer(answer, level) {
    let correctAnswers = {
        1: 'jaguarete', 
        2: 'kururu',
        3: 'mbopia',
        4: 'pyta',
        5: 'mbarakaja',
        6: 'peteĩ',
        7: 'pokõi/poguasu',
        8: 'pakõi/Mokõi pa',
        9: 'pytãũ/ mberu',
        10: 'pyti’a/ syka',
        11: 'temimbo’e/ ñemoaranduhara',
        12: 'akãry/akã',
        
        

    };

    let resultMessage = document.getElementById('result');
    
    if (answer === correctAnswers[level]) {
        resultMessage.textContent = '¡Correcto!';
        resultMessage.style.color = 'green';
        score += 1;
        document.getElementById('score').textContent = score;
        advanceLevel();
    } else {
        resultMessage.textContent = 'Incorrecto';
        resultMessage.style.color = 'red';
    }
}

function advanceLevel() {
    if (currentLevel < totalLevels) {
        // Ocultar el nivel actual
        document.getElementById('level' + currentLevel).style.display = 'none';
        currentLevel += 1;
        // Mostrar el siguiente nivel
        document.getElementById('level' + currentLevel).style.display = 'block';

        // Actualizar número de nivel en la barra de progreso
        document.getElementById('level-number').textContent = currentLevel;

        // Actualizar barra de progreso
        let progressValue = document.getElementById('progress-value');
        progressValue.textContent = currentLevel + '/12';
        progressValue.style.width = (currentLevel / totalLevels) * 100 + '%';
    } else {
        document.getElementById('result').textContent = '¡Juego completado!';
        document.getElementById('result').style.color = 'blue';
    }
}
document.getElementById('next').onclick = () => {
    currentLevel++;
    if (currentLevel < questions.length) {
        loadQuestion();
        document.getElementById('current-level').innerText = currentLevel + 1;
    } else {
        document.getElementById('game').style.display = 'none'; // Ocultar el juego
        document.getElementById('congratulations').style.display = 'block'; // Mostrar el mensaje de felicitaciones
    }
};

// Reiniciar el juego
document.getElementById('restart').onclick = () => {
    currentLevel = 0;
    score = 0;
    document.getElementById('game').style.display = 'block'; // Mostrar el juego
    document.getElementById('congratulations').style.display = 'none'; // Ocultar el mensaje de felicitaciones
    loadQuestion() }