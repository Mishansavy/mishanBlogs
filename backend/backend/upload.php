<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["file"]["name"]);
if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
    echo json_encode(["message" => "File uploaded", "file" => $target_file]);
} else {
    echo json_encode(["message" => "Error uploading file"]);
}
?>