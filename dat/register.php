<?php
session_start();
if (isset($_REQUEST['submit'])) {
    $username = $_REQUEST['username']; 
    $password = $_REQUEST['password'];
    $conn = new mysqli("localhost","root","","avengers");
    $sql = "INSERT INTO avengers(username,password) VALUES('$username','$password')";
    $conn->query($sql);
    $result = $conn->query($sql);
    $_SESSION['username'] = $username;
    header('location: ../index.html');
    $conn->close();
}else{
    echo "failed";
}
?>
