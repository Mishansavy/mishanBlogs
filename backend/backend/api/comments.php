<?php
require 'config/Database.php';

$db = new Database();
$conn = $db->getConnection();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $post_id = $data->post_id;
    $comment = $data->comment;
    $author = $data->author;

    $sql = "INSERT INTO comments (post_id, comment, author) VALUES ('$post_id', '$comment', '$author')";
    if ($conn->query($sql)) {
        echo json_encode(["message" => "Comment added"]);
    } else {
        echo json_encode(["message" => "Error"]);
    }
}
?>