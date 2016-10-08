<?php

	function validate_user($username, $password) {
		$conn = new PDO('mysql:host=localhost;dbname=avengers;', 'root', '');
		$psmt = $conn->prepare('select * from avengers where username=:username and password=:password');
		$psmt->bindParam(':username', $username);
		$psmt->bindParam(':password', $password);
		$psmt->execute();
		// $result = $conn->query('select * from user where username="'.$username.'" and password="'.$password.'"');

		if ($row = $psmt->fetch()) {
			return true;
		 } else {
		 	return false;
		 } 
		// global $user;
		// $conn = new mysqli('localhost', 'yang', '123', 'user');
		// $conn = mysqli_connect('localhost', 'yang', '123');
		// if(!$conn) {
		// 	die('cannot connect');
		// } 
		// mysqli_select_db($conn, 'user');
		// $result = $conn->query('select * from user where username="'.$username.'" and password="'.$password.'"');
		//  if ($row=$result->fetch_array()) {
		//  	return true;
		//  } else {
		//  	return false;
		//  }
		
		// $flag = 0;
		// foreach ($user as $key => $value) {
		// 	if ($username === $key && $password === $value) {
		// 		$flag += 1;
		// 	} else {
		// 		$flag += 0;
		// 	}
		// }

		// if ($flag === 1) {
		// 	return true;
		// } else {
		// 	return false;
		// }
	}
