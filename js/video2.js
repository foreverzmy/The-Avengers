(function () {
    var canvas = document.getElementsByTagName('canvas');
    var context = canvas[0].getContext('2d');
    var video = document.getElementById('myVideo');
    var input = document.getElementsByTagName('input');
    var span = document.getElementsByTagName('span');
    var text = ['', 'Play', 'Pause', 'Stop', 'Forward', 'Backward'];
    var myFunc = [];
    myFunc[1] = function () {
        video.play();
        canvas[1].style.display = "none";
        canvas[2].style.display = "inline-block";

    };
    myFunc[2] = function () {
        video.pause();
        clearInterval(Interval);
        canvas[2].style.display = "none";
        canvas[1].style.display = "inline-block";
    };
    myFunc[3] = function () {
        video.currentTime = 0;
        clearInterval(Interval);
        video.play();
    };
    myFunc[4] = function () {
        video.currentTime += 2;
    };
    myFunc[5] = function () {
        video.currentTime -= 2;
    };

    for (var i = 1; i < canvas.length; i++) {
        var ctx = canvas[i].getContext('2d');
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "deepskyblue";
        ctx.fillText(text[i], 45, 10);

        canvas[i].addEventListener('click', myFunc[i]);
    }
    video.ontimeupdate = function () {
        input[0].value = this.currentTime / this.duration * 100;
        span[0].innerHTML = Math.floor(this.currentTime);
        Interval = setInterval(draw, 60);


    };
    input[0].onchange = function () {
        video.currentTime = this.value / 100 * video.duration;
    };
    input[1].onchange = function () {
        video.volume = this.value / 100;
    };

    video.onloadedmetadata = function () {
        span[1].innerHTML = Math.floor(this.duration);
        var img = new Image();
        img.src = 'img/avengers2.jpg';
        img.onload = function () {
            context.drawImage(img, 0, 0, 650, 360);
            context.font = "40px 'Times New Roman'";
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillStyle = '#ff0';
            context.fillText('观看预告片', 350, 200);
        };
    };

    function draw() {
        context.drawImage(video, 0, 0, 650, 360);
        context.font = "40px 'Times New Roman'";
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = '#f00';
    };
    window.parent.document.getElementById("closetwo").onclick = function () {
        video.pause();
        canvas[2].style.display = "none";
        canvas[1].style.display = "inline-block";
    }

})();
