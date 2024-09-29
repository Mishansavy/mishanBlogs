<?php
// Allow cross-origin requests from the frontend
header("Access-Control-Allow-Origin: *"); // Use * to allow all origins, or specify your frontend's URL
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// If it's an OPTIONS request, return early (for preflight requests)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}



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