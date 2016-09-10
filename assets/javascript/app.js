


$(document).ready( function() {

	// Element Variables

	$searchInput = $('#searchInput');
	$numberOfRecords = $('#numberOfRecords');
	$startYear = $('#startYear');
	$endYear = $('#endYear');
	$searchButton = $('#searchButton');
	$clearButton = $('#clearButton');
	$articleDiv = $('#articleDiv');
	$articles = $('.article');


	function getArticles(){

		var search = $searchInput.val().trim();
		var numberOfRecords = $numberOfRecords.val().trim();
		var startYear = $startYear.val().trim();
		var endYear = $endYear.val().trim();
		var key = '0260f164192d4233819b35680fc7cc00'
		var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search + '?begin_date=' 
		+ startYear + '?end_date=' + endYear '&sort=oldest&api-key=' + key;

		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			console.log(response)

			for(i=0; i < response.docs.length; i++){
				var $article = $('<div>');
				$article.setClass('article');

				var $title = $('<div>');
				$title.setClass('articleTitle');

				var $author = $('<div>');
				$author.setClass('author');

				var $section = $('<div>');
				$section.setClass('section');

				var $date = $('<div>');
				$date.setClass = ('date');

				var $URL = $('<div>');
				$URL = ('URL');
			}

		})


	}



	$searchButton.on('click', function(){

		getArticles();


	});

	$clearButton.on('click', $articleDiv.empty());

})