$(document).ready(() => {
    $(".sidenav .show").click(() => {
        $(".sidenav").toggleClass("show");
    });

    $("#nextQ").click(() => {
        $("#sec1.container").css({
            display: "none"
        });

        $("#sec2.container").css({
            display: "block"
        });
    });

    // Materi 1
    $("input[name='answer-1']").click(() => {
        var value = $("input[name='answer-1']:checked").val();
        console.log(value);
        if (value === "Bahasa Mark-up") {
            $("#sec2.container .answer-box").css({
                visibility: "none",
                opacity: "0"
            });

            $("#sec2.container .answer-box input").css({
                cursor: "default"
            });

            $("#sec2.container #correct.answer-box").css({
                visibility: "visible",
                opacity: "1",
                color: "#000"
            });

            $("#sec2.container .correct").css({
                display: "block"
            });

            $("#sec2.container .incorrect").css({
                display: "none"
            });
        } else {
            $("#sec2.container .answer-box").css({
                color: "#ff3333"
            });

            $("#sec2.container .incorrect").css({
                display: "block"
            });

            $("#sec2.container .correct").css({
                display: "none"
            });
        }
    });

    // Materi 2
    $("input[name='answer-2']").click(() => {
        var value = $("input[name='answer-2']:checked").val();
        console.log(value);
        if (value === "Head") {
            $("#sec2.container .answer-box").css({
                visibility: "none",
                opacity: "0"
            });

            $("#sec2.container .answer-box input").css({
                cursor: "default"
            });

            $("#sec2.container #correct.answer-box").css({
                visibility: "visible",
                opacity: "1",
                color: "#000"
            });

            $("#sec2.container .correct").css({
                display: "block"
            });

            $("#sec2.container .incorrect").css({
                display: "none"
            });
        } else {
            $("#sec2.container .answer-box").css({
                color: "#ff3333"
            });

            $("#sec2.container .incorrect").css({
                display: "block"
            });

            $("#sec2.container .correct").css({
                display: "none"
            });
        }
    });

    // Materi 3
    $("input[name='answer-3']").click(() => {
        var value = $("input[name='answer-3']:checked").val();
        console.log(value);
        if (value === "b") {
            $("#sec2.container .answer-box").css({
                visibility: "none",
                opacity: "0"
            });

            $("#sec2.container .answer-box input").css({
                cursor: "default"
            });

            $("#sec2.container #correct.answer-box").css({
                visibility: "visible",
                opacity: "1",
                color: "#000"
            });

            $("#sec2.container .correct").css({
                display: "block"
            });

            $("#sec2.container .incorrect").css({
                display: "none"
            });
        } else {
            $("#sec2.container .answer-box").css({
                color: "#ff3333"
            });

            $("#sec2.container .incorrect").css({
                display: "block"
            });

            $("#sec2.container .correct").css({
                display: "none"
            });
        }
    });

    // Materi 4
    $("input[name='answer-4']").click(() => {
        var value = $("input[name='answer-4']:checked").val();
        console.log(value);
        if (value === "Tag img dengan href sebagai tujuan direktorinya") {
            $("#sec2.container .answer-box").css({
                visibility: "none",
                opacity: "0"
            });

            $("#sec2.container .answer-box input").css({
                cursor: "default"
            });

            $("#sec2.container #correct.answer-box").css({
                visibility: "visible",
                opacity: "1",
                color: "#000"
            });

            $("#sec2.container .correct").css({
                display: "block"
            });

            $("#sec2.container .incorrect").css({
                display: "none"
            });
        } else {
            $("#sec2.container .answer-box").css({
                color: "#ff3333"
            });

            $("#sec2.container .incorrect").css({
                display: "block"
            });

            $("#sec2.container .correct").css({
                display: "none"
            });
        }
    });

    // Materi 5
    $("input[name='answer-5']").click(() => {
        var value = $("input[name='answer-5']:checked").val();
        console.log(value);
        if (value === "ol") {
            $("#sec2.container .answer-box").css({
                visibility: "none",
                opacity: "0"
            });

            $("#sec2.container .answer-box input").css({
                cursor: "default"
            });

            $("#sec2.container #correct.answer-box").css({
                visibility: "visible",
                opacity: "1",
                color: "#000"
            });

            $("#sec2.container .correct").css({
                display: "block"
            });

            $("#sec2.container .incorrect").css({
                display: "none"
            });
        } else {
            $("#sec2.container .answer-box").css({
                color: "#ff3333"
            });

            $("#sec2.container .incorrect").css({
                display: "block"
            });

            $("#sec2.container .correct").css({
                display: "none"
            });
        }
    });

    // Materi 9
    $("input[name='answer-9']").click(() => {
        var value = $("input[name='answer-9']:checked").val();
        console.log(value);
        if (value === "Logika") {
            $("#sec2.container .answer-box").css({
                visibility: "none",
                opacity: "0"
            });

            $("#sec2.container .answer-box input").css({
                cursor: "default"
            });

            $("#sec2.container #correct.answer-box").css({
                visibility: "visible",
                opacity: "1",
                color: "#000"
            });

            $("#sec2.container .correct").css({
                display: "block"
            });

            $("#sec2.container .incorrect").css({
                display: "none"
            });
        } else {
            $("#sec2.container .answer-box").css({
                color: "#ff3333"
            });

            $("#sec2.container .incorrect").css({
                display: "block"
            });

            $("#sec2.container .correct").css({
                display: "none"
            });
        }
    });

    // Materi 10
    $("input[name='answer-10']").click(() => {
        var value = $("input[name='answer-10']:checked").val();
        console.log(value);
        if (value === "alert('Hi!')") {
            $("#sec2.container .answer-box").css({
                visibility: "none",
                opacity: "0"
            });

            $("#sec2.container .answer-box input").css({
                cursor: "default"
            });

            $("#sec2.container #correct.answer-box").css({
                visibility: "visible",
                opacity: "1",
                color: "#000"
            });

            $("#sec2.container .correct").css({
                display: "block"
            });

            $("#sec2.container .incorrect").css({
                display: "none"
            });
        } else {
            $("#sec2.container .answer-box").css({
                color: "#ff3333"
            });

            $("#sec2.container .incorrect").css({
                display: "block"
            });

            $("#sec2.container .correct").css({
                display: "none"
            });
        }
    });

    // Materi 11
    $("input[name='answer-11']").click(() => {
        var value = $("input[name='answer-11']:checked").val();
        console.log(value);
        if (value === "console.log()") {
            $("#sec2.container .answer-box").css({
                visibility: "none",
                opacity: "0"
            });

            $("#sec2.container .answer-box input").css({
                cursor: "default"
            });

            $("#sec2.container #correct.answer-box").css({
                visibility: "visible",
                opacity: "1",
                color: "#000"
            });

            $("#sec2.container .correct").css({
                display: "block"
            });

            $("#sec2.container .incorrect").css({
                display: "none"
            });
        } else {
            $("#sec2.container .answer-box").css({
                color: "#ff3333"
            });

            $("#sec2.container .incorrect").css({
                display: "block"
            });

            $("#sec2.container .correct").css({
                display: "none"
            });
        }
    });
});
