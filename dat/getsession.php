<?php  
    session_start();
    $php_test=$_SESSION['username'];  
    echo "var getsession="."'$php_test';";   
?>
