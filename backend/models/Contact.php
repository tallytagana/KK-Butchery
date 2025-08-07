<?php
class Contact {
    private $conn;
    private $table_name = "contacts";

    public $id;
    public $name;
    public $email;
    public $message;
    public $created_at;

    public function __construct($db){
        $this->conn = $db;
    }

    // Create new contact message
    public function create(){
        $query = "INSERT INTO " . $this->table_name . " SET name=:name, email=:email, message=:message";
        $stmt = $this->conn->prepare($query);

        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->message=htmlspecialchars(strip_tags($this->message));

        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":email", $this->email);
        $stmt->bindParam(":message", $this->message);

        if($stmt->execute()){
            return true;
        }
        return false;
    }

    // Get all contact messages
    public function read(){
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY created_at DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}
?>
