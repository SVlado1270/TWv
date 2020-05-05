<?php
class Database{
    private $host = "localhost";
    private $db_name = "twdb";
    private $username = "root";
    private $password = "student";
    public $conn;
  
    public function getConnection(){
  
        $this->conn = null;
  
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection failed: " . $exception->getMessage();
        }
  
        return $this->conn;
    }
}
echo "Successfully connected";
?>