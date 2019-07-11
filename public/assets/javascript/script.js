$(function () {
    $(".form-create").on("submit", function (event) {
        event.preventDefault();
        console.log("hello")

        var newburger = {
            burgerN: $("#burgerT").val(),
        }
        console.log("HELLO     ///////////////////////////////////////////////////////////    " + newburger)

        console.log(newburger)
        if (newburger === "") {

            alert("Invalid Order")
            console.log("HELLLO     " + newburger)

        } else {
            console.log("efsfsf     " + newburger)
            $.ajax("/api/burgers", {
                type: "POST",
                data: newburger
            }).then(function () {

                console.log("Burger Ordered")
                location.reload;
            })
        }
    })


    $(".eat").on("click", function (event) {

        event.preventDefault();
        const id = $(this).data("id")
        console.log("yess")
        const eatD = $(this).data("devore")
        console.log(id, eatD);

        let eaten = {

            eat: eatD
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(
            function () {
                alert("Munch Muncg Choo Chooo........Done")
                location.reload();

            }

        )

    })


})

function autoCapitalize(words) {

    // let arrayWords = words "ess".startsWith

}