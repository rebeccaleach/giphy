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


	// button click handler instructions
	$('button').on('click', function() {

		// I don't know what this is supposed to be for


		// create a variable to store the data-name value of a button in
		var show = $(this).data('name');

		// variable that creates the query URL
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dc6zaTOxFJmzC&limit=10";

		// AJAX doing its thing
		$.ajax({url:queryURL, method: 'GET'})
			.done(function(response) {

				// storing the parts of the ajax query that I want to use
				var results = response.data;

				// looping through the results of the query
				for (var j = 0; j < results.length; j++) {

					var gifDiv = $('<div class="image">');
					var rating = results[j].rating;
					var paragraph = $('<p>').text('Rating: ' + rating);
					var image = $('<img>')
						.attr('src', results[j].images.fixed_height.url);

					gifDiv.append(paragraph);
					gifDiv.append(image);

					$('showGifs').prepend(gifDiv);
				}

			})


	});

	







}); // Closing $(document).ready

