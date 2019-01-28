$(function () {


    $(".form-group").on("submit", function (event) {
        event.preventDefault();

        var newburger = name = $("burger").val().trim();

        if (newburger === "") {

            alert("Invalid Order")
        } else {

            $.ajax("/api/burgers", {

                type: "POST",
                data: newburger
            }).then(function () {

                console.log("Burger Ordered")
                location.reload;
            })
        }


    })

















})