// GIPHY

$(document).ready(function(){

	// MAKING THE BUTTONS

	// array of shows or movies to get GIFs from
	var showsArray = ['Farscape', 'The Force Awakens', 'Battlestar Galactica'];


	// instructions for making a button when the user adds show or movie name
	function makeButtons() {
		$('#buttons').empty();

		for (var j = 0; j < showsArray.length; j++) {
			var button = $('<button>')
				.addClass('show')
				.attr('data-name', showsArray[j])
				.text(showsArray[j]);

			$('#buttons').append(button);
		}
	}

	makeButtons();

	// instructions for what to do when a button is clicked
	$('#addShow').on('click', function() {
		var showInput = $('#input').val().trim();
		showsArray.push(showInput);
		makeButtons();
		return false;
	})

	




	// MAKING GIFs APPEAR WHEN A BUTTON IS CLICKED

	$('button').on('click', function() {
		var gif = $(this).attr('data-name').split(' ').join('+');
		console.log(gif);
	
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";

		console.log(queryURL);

		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			var gifDiv = $('<div class="gif">');


			for (var i = 0; i < response.data.length; i++) {

				var image = $('<img>')
					.attr('src', response.data[i].images.fixed_height_still.url)
					.addClass('giphyImage')
					.attr('data-still', response.data[i].images.fixed_height_still.url)
					.attr('data-animate', response.data[i].images.fixed_height.url)
					.attr('data-state', 'still');

				var rating = $('<p>').html(response.data[i].rating);

				console.log(response.data[i].rating);

				gifDiv.append(image)
				gifDiv.append('<br><p class="rating">Rating: ' + response.data[i].rating + '</p><br>');

			}

			$('#showGifs').prepend(gifDiv);

		})

	});



	// CLICK GIF TO ANIMATE not working wooooo

	// $('.giphyImage').on('click', function() {
	// 	var state = $(this).attr('data-state');
	// 	console.log(state);

	// 	if (state == 'still') {
	// 		$(this).attr('src', $(this).data('animate'));
	// 		$(this).attr('data-state', 'animate');
	// 	}
	// 	else {
	// 		$(this).attr('src', $(this).data('still'));
	// 		$(this).attr('data-state', 'still');
	// 	}
	// });
	
	



}); // Closing $(document).ready

