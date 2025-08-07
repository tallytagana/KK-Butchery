<?php
class Order {
    private $conn;
    private $table_name = "orders";

    public $id;
    public $customer_name;
    public $customer_email;
    public $customer_phone;
    public $total_price;
    public $status;
    public $created_at;

    public function __construct($db){
        $this->conn = $db;
    }

    // Create new order
    public function create(){
        $query = "INSERT INTO " . $this->table_name . " SET customer_name=:customer_name, customer_email=:customer_email, customer_phone=:customer_phone, total_price=:total_price, status=:status";
        $stmt = $this->conn->prepare($query);

        $this->customer_name=htmlspecialchars(strip_tags($this->customer_name));
        $this->customer_email=htmlspecialchars(strip_tags($this->customer_email));
        $this->customer_phone=htmlspecialchars(strip_tags($this->customer_phone));
        $this->total_price=htmlspecialchars(strip_tags($this->total_price));
        $this->status=htmlspecialchars(strip_tags($this->status));

        $stmt->bindParam(":customer_name", $this->customer_name);
        $stmt->bindParam(":customer_email", $this->customer_email);
        $stmt->bindParam(":customer_phone", $this->customer_phone);
        $stmt->bindParam(":total_price", $this->total_price);
        $stmt->bindParam(":status", $this->status);

        if($stmt->execute()){
            $this->id = $this->conn->lastInsertId();
            return true;
        }
        return false;
    }

    // Get order by id
    public function readOne(){
        $query = "SELECT * FROM " . $this->table_name . " WHERE id = ? LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(1, $this->id);
        $stmt->execute();
        return $stmt;
    }
    
    // Update order status
    public function updateStatus(){
        $query = "UPDATE " . $this->table_name . " SET status = :status WHERE id = :id";
        $stmt = $this->conn->prepare($query);

        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->id = htmlspecialchars(strip_tags($this->id));

        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':id', $this->id);

        if($stmt->execute()){
            return true;
        }
        return false;
    }
}
?>
