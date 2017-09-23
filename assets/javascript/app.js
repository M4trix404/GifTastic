
$(document).ready(function() {

    var topic = ["happy kitten", " happy puppy", " happy man", "happy baby"];
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + happy + "&api_key=cyyQ85wf3mnPnay62CgZzpG9FkODiI7B&limit=10";



function displayGifButtons() {

    $("#gifbuttonView").empty();

    for (var i = 0; i < topic.length; i++) {
    }
        var gifButton = $("<btn>");

        gifButton.addClass("");

        gifButton.addClass("btn btn-primary");

        gifButton.attr("data-name", topic[i]);

        gifButton.text(topic)[i]);

        $("gifButtonsView").append(gifButton);
    }
}

//adds new happy thing
function addNewButton() {
    $('#addGif').on("click", function() {
        var happyButton = $("#topic-input").val().trim();

        var newButton = $("<button/>").addClass("btn btn-info happy").attr('data-name',happyButton).html(happyButton).css({'margin': '6px'});

    displayGifButtons();
        return false;
    })
};

function removeLastButton() {
    $("#removeGif").on("click", function() {
        topic.pop(happy);
        displayGifButtons();
        return false;
    });


    function displayGifs() {
        var happy = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + happy + "&api_key=cyyQ85wf3mnPnay62CgZzpG9FkODiI7B";

        $.ajax({
            url: queryURl,
            method: 'GET'
        })

            .done(function(response) {
                $("#gifsView").empty();

                var results = response.data;


            for (var i = 0; i < results.length; i++) {

                var gifDiv = $('<div>');

                var p= $('<p>');
                p.text(results[i].rating);

                gifDiv.append(gifRating);


                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_still.url);

                gifImage.attr("data-still", results[i].images.fixed_height_still.url);

                //image animated
                gifImage.attr("data-animate", results[i].images.fixed_height_.url);

                //images are still
                gifImage.attr("data-state", "still");

                gifImage.addClass("image");

                gifDiv.append(gifImage);

                //add new div to existing divs
               gif.Div.prependTo('#gifs');

            }

//event listeners
      $(document).on("click", ".happy", displayGifs);

      $(document).on("click", ".image", function() {

      var state = $(this).attr('data-state');

      if (state == 'still') {

        $(this).attr('src', $(this).data('animate'));

        $(this).attr('data-state', 'animate'));

       else
        {

            $(this).attr('src', $(this).data('still'));

            $(this).attr('data-state', 'still');
        }
    });

});
    $("gif-input").val("");
    return false;
})

});







