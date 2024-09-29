<?php
require 'config/Database.php';

$db = new Database();
$conn = $db->getConnection();

// Register user
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username;
    $email = $data->email;
    $password = password_hash($data->password, PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
    if ($conn->query($sql)) {
        echo json_encode(["message" => "User registered"]);
    } else {
        echo json_encode(["message" => "Error"]);
    }
}
?>