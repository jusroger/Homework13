$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var eaten = $(this).data("eaten");

        var newEatenState = {
            eaten: eaten
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                console.log("changed eaten to", eaten);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#ca").val().trim(),
            eaten: false
        };
        console.log(newBurger.burger_name)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});
