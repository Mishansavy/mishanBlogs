<?php
require 'config/Database.php';

$db = new Database();
$conn = $db->getConnection();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $page = isset($_GET['page']) ? (int) $_GET['page'] : 1;
    $limit = 5;
    $offset = ($page - 1) * $limit;

    $total_result = $conn->query('SELECT COUNT(*) AS TOTAL FROM posts');
    $total_posts = $total_result->fetch_assoc()['total'];
    $total_pages = ceil($total_posts / $limit);

    $result = $conn->query('SELECT * FROM posts LIMIT $offset, $limit');
    $posts = array();
    while ($row = $result->fetch_assoc()) {
        $posts[] = $row;
    }
    echo json_encode(["posts" => $posts, "totalPages" => $total_pages]);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $title = $data->title;
    $body = $data->body;
    $author = $data->author;

    $sql = "INSERT INTO posts (title, body, author) VALUES ('$title', '$body', '$author')";
    if ($conn->query($sql)) {
        echo json_encode(["message" => "Post created"]);
    } else {
        echo json_encode(["message" => "Error"]);
    }

}

?>