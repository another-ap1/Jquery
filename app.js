
$('#submit').on('click', function(e){
    e.preventDefault();
    //checks if the movie title length is more than 2 and the rating is 1-10
    if($('#movie').val().length >= 2 && $('#rating').val() >= 0 && $('#rating').val() <= 10){
        $('#movieRatingList').append('<li class="movieEntry">'+'<b>Movie: </b>'+$('#movie').val()+"---"+'<b>Rating:</b>'+$('#rating').val()+'<button class="rmv">Remove</button>'+'</li>');
        $('#movie').val("");
        $('#rating').val("");
    } else {
        alert("movie must contain atleast 2 letters and rating must be 1-10");
    }
});

//adding event listner to each new list item
$('#movieRatingList').on("click", ".rmv", function(e){
    e.preventDefault();
    $(this).parent().remove();
});