$(function () {
    $(function () {
        if (getsession == "") {
            $("#loadli").css("display", "inline-block");
            $("#registli").css("display", "inline-block");
        } else {
            $("#loadli").css({
                "display": "none",
                "width": "0"
            });
            $("#registli").css({
                "display": "none",
                "width": "0"
            });
            $("#logoutli").css({
                "display": "inline-block",
                "width": "86px"
            });
            $("#usernameli").css({
                "display": "inline-block",
                "width": "60px"
            });
            $("#username").text(getsession);
        }
    });
    $("#load").on("click", function () {
        window.top.location.assign('dat/load.php');
    });
    $("#regist").on("click", function () {
        window.top.location.assign('register.html');
    });
    $("#hero").on("click", function () {
        window.top.location.assign('hero.html');
    });
    $("#movie").on("click", function () {
        window.top.location.assign('movies.html');
    });
    $("#shop").on("click", function () {
        window.top.location.assign('dat/shop.php');
    });

    $.ajax({
            url: 'dat/search.php',
            type: 'POST',
            dataType: 'json',
            data: {},
        })
        .done(function (data) {
            console.log("success");

            $("#search").on('input', function (e) {
                e.preventDefault();
                $("#display").children("div").remove();
                $.each(data, function (index, val) {
                    if (val.indexOf($("#search").val()) === 0) {
                        $("#display").css("display", "block");
                        if (contains(arr, val) == true) {
                            $("#display").append("<div>").children("div:last-child").html("<span>" + val + "</span><img width='15px' src='img/video.png'>");
                        } else {
                            $("#display").append("<div>").children("div:last-child").html("<span>" + val + "</span><img width='15px' src='img/" + val + ".png'>");
                        }
                    }
                });
                var count = $("#display").children("div").length;
                if (count === 1) {
                    $("#search").val($("#display").children("div").text());
                    $("#display").css("display", "none");
                    $("#display").children("div").remove();
                }
                if (count === 0) {
                    $("#display").css("display", "block");
                    $("#display").append("<div>").children("div:last-child").html("<span>您输入的内容不存在哦！</span>");
                }
                if ($("#search").val() === "") {
                    $("#display").css("display", "none");
                    $("#display").children("div").remove();
                }
                $("#display").children("div").click(function () {
                    $("#display").children("div").remove();
                    $("#search").attr("value", "");
                    $("#search").val($(this).text());
                    $("#display").css("display", "none");
                    $("#search").css("color", "#fff");
                });
                $("#display").children("div").hover(function () {
                    $(this).find("span").css("color", "#ff0");
                }, function () {
                    $(this).find("span").css("color", "white");
                });
            });
            $("#searchbtn").on('click', function () {
                var str = $("#search").val();
                if (contains(arr, $("#search").val()) == true) {
                    window.top.location.assign("movies.html#" + $("#search").val());
                } else if (contains(frrb, $("#search").val()) == true) {
                    var turn = escape($("#search").val());
                    window.top.location.assign("hero2.html?btn=" + turn);
                } else if (contains(brrf, $("#search").val()) == true) {
                    var turn = escape($("#search").val());
                    window.top.location.assign("hero.html?btn=" + turn);
                } else {
                    alert("您输入的内容有误，请重新输入！");
                }

            });

            $("#home").on('click', function () {
                window.top.location.assign('index.html');
            });
        })

    .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });

    function contains(arr, obj) {
        var i = arr.length;
        while (i--) {
            if (arr[i] === obj) {
                return true;
            }
        }
        return false;
    }
    var arr = new Array("复仇者联盟1", "复仇者联盟2：奥创纪元", "美国队长1：复仇者先锋", "美国队长2：冬日战士", "美国队长3：内战", "钢铁侠1", "钢铁侠2", "钢铁侠3", "雷神1", "雷神2：黑暗世界", "绿巨人浩克", "无敌浩克");
    var brr = new Array("美国队长", "钢铁侠", "雷神", "绿巨人", "黑寡妇", "鹰眼");
    var frrb = new Array("绯红女巫", "快银", "幻视", "冬兵", "黑豹", "蚁人", "蜘蛛侠");
    var brrf = new Array("美国队长", "钢铁侠", "雷神", "绿巨人", "黑寡妇", "鹰眼", "绯红女巫", "快银", "幻视", "冬兵", "黑豹", "蚁人", "蜘蛛侠");
    contains(arr, 2); //返回true  
});
