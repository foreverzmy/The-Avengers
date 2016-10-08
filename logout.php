<?php
    session_start();    //启动会话
    session_unset();    //删除会话
    session_destroy();  //结束会话
    unset($_SESSION);
echo"<script language=\"javascript\">";
echo" window.top.location.assign('index.html')";
    echo"</script>";
?>
