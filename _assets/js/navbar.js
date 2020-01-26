$(document).ready(() => {
    $("nav .show").click(() => {
        $("nav ul").css({
            right: "0"
        });
    });

    $("nav ul .hide").click(() => {
        $("nav ul").css({
            right: "-100%"
        });
    });
});
