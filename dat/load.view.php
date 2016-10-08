<!doctype html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>动态背景的CSS3登录表单DEMO演示</title>
    <link rel="stylesheet" type="text/css" href="../css/load.css">
</head>

<body>
    <div class="htmleaf-container">
        <div class="wrapper">
            <div class="container">
                <h1>Welcome</h1>

                <form class="form" action="load.php" method="post">
                    <input type="text" id="username" name="username" placeholder="Username" autocomplete='off'>
                    <input type="password" id="password" name="password" placeholder="Password" autocomplete='off'>
                    <button type="submit" id="submit" name="submit" value="submit">登录</button>
                </form>
                <div id="display">
                    <?php if(isset($status)): ?>
                        <p>
                            <?= $status ?>
                        </p>
                        <?php endif ?>
                </div>
            </div>

            <ul class="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>

    <div id="return">
        <img id="returnimg" src="../img/return.png" alt="">
    </div>
    <script src="../js/jquery.js" type="text/javascript"></script>
    <script>
        $("#returnimg").click(function() {
            window.location.assign("../index.html");
        });
        (function() {
            var text = document.getElementById("username");
            text.value = localStorage.getItem(text.name);
            $('#login-button').click(function(event) {
                event.preventDefault();
                $('form').fadeOut(500);
                $('.wrapper').addClass('form-success');
            });
            $("#returnimg").click(function() {
                window.location.assign("../index.html");
            });
        })();

        function keyUp() {
            var text = document.getElementById("username");
            localStorage.setItem(text.name, text.value);
        }
        document.onkeyup = keyUp;

    </script>
</body>

</html>
