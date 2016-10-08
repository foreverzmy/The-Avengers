<?php

    session_start();
if (isset($_SESSION['username'])){    
			header('location: ../shop.html');
}else{
			header('location:load.php ');
}

?>
