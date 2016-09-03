// GIPHY

$(document).ready(function(){

	// MAKING THE BUTTONS

	// array of shows or movies to get GIFs from
	var showsArray = ['Farscape', 'The Force Awakens', 'Battlestar Galactica'];


	// instructions for making a button when the user adds show or movie name
	function makeButtons() {
		$('#buttons').empty();

		for (var i = 0; i < showsArray.length; i++) {
			var button = $('<button>')
				.addClass('show')
				.attr('data-name', showsArray[i])
				.text(showsArray[i]);

			$('#buttons').append(button);
		}
	}


	// instructions for what to do when a button is clicked
	$('#addShow').on('click', function() {
		var showInput = $('#input').val().trim();
		showsArray.push(showInput);
		makeButtons();
		return false;
	})

	makeButtons();




	// MAKING GIFs APPEAR WHEN A BUTTON IS CLICKED

	$('button').on('click', function() {
		var gif = $(this).attr('data-name').split(' ').join('+');
		console.log(gif);
	
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";

		console.log(queryURL);

		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			var gifDiv = $('<div class="gif">');


			for (var i = 0; i < response.data.length; i++) {

				var image = $('<img>').attr('src', response.data[i].images.fixed_height.url);

				var rating = $('<p>').html(response.data[i].rating);

				console.log(response.data[i].rating);

				gifDiv.append(image)

				gifDiv.append(response.data[i].rating);

			}

			$('#showGifs').prepend(gifDiv);

		})

	});




	
	







}); // Closing $(document).ready

