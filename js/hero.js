$(function () {



    $('#accordion h3').click(function () {
        $(this).next().find('p').slideToggle('slow');
    });
    $("#next").click(function () {
        window.location.assign("hero2.html");
    });
    $("#last").click(function () {
        window.location.assign("hero.html");
    });
});
