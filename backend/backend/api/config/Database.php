<?php
class Database
{
    private $host = 's1314.sgp1.mysecurecloudhost.com';
    private $db_name = 'mishans1_blog_db';
    private $username = 'mishans1_blogdb_';
    private $password = 'mishan@12blogsdbpass';
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