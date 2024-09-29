<?php
class Database
{
    private $host = 'blog.mishanshah.com.np';
    private $db_name = 'blog_db';
    private $username = 'blogdb_admin';
    private $password = 'blog@passAdmin13r5';
    public $conn;

    public function getConnection()
    {
        $this->conn = null;
        try {
            $this->conn = new mysqli($this->host, $this->username, $this->password, $this->db_name);
        } catch (Exception $e) {
            echo "connection error: " . $e->getMessage();
        }
        return $this->conn;
    }
}
?>