<?php
// Conectar a la base de datos
$servername = "localhost"; // Cambia esto si tu servidor tiene otro nombre
$username = "root"; // Cambia esto si es necesario
$password = ""; // Cambia esto si es necesario
$dbname = "guarani_web";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Recibir datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];

    // Validar datos (puedes agregar más validaciones si es necesario)
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Preparar y bind
        $stmt = $conn->prepare("INSERT INTO usuarios (nombre, email) VALUES (?, ?)");
        $stmt->bind_param("ss", $nombre, $email);

        // Ejecutar y verificar
        if ($stmt->execute()) {
            echo "Registro exitoso";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Cerrar statement
        $stmt->close();
    } else {
        echo "Correo electrónico no válido";
    }
}

// Cerrar conexión
$conn->close();
?>