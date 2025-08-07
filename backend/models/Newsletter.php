<?php
class Newsletter {
    private $conn;
    private $table_name = "newsletter_subscribers";

    public $id;
    public $email;
    public $subscribed_at;

    public function __construct($db){
        $this->conn = $db;
    }

    // Subscribe
    public function subscribe(){
        $query = "INSERT INTO " . $this->table_name . " SET email=:email";
        $stmt = $this->conn->prepare($query);

        $this->email=htmlspecialchars(strip_tags($this->email));

        $stmt->bindParam(":email", $this->email);

        if($stmt->execute()){
            return true;
        }
        return false;
    }

    // Unsubscribe
    public function unsubscribe(){
        $query = "DELETE FROM " . $this->table_name . " WHERE email = :email";
        $stmt = $this->conn->prepare($query);

        $this->email=htmlspecialchars(strip_tags($this->email));
        $stmt->bindParam(":email", $this->email);

        if($stmt->execute()){
            return true;
        }
        return false;
    }

    // Get all subscribers
    public function read(){
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY subscribed_at DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}
?>
