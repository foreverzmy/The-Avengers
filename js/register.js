(function () {
    var text = document.getElementById("username");
    text.value = localStorage.getItem(text.name);
    $('#login-button').click(function (event) {
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
    });
    $("#returnimg").click(function () {
        window.location.assign("index.html");
    });
})();

function keyUp() {
    var text = document.getElementById("username");
    localStorage.setItem(text.name, text.value);
}
document.onkeyup = keyUp;
