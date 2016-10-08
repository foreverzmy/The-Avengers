<?php
    session_start();
	require 'functions.php';

	if (isset($_REQUEST['submit'])) {
		$username = $_REQUEST['username'];
		$password = $_REQUEST['password'];
		if (validate_user($username, $password)) {
			$_SESSION['username'] = $username;
			header('location: ../index.html');
		} else {
			$status = 'wrong username or password';
		}

	}

	require_once 'load.view.php';

?>
