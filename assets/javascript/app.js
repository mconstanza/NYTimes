


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


	// converts an array to a string without commas between elements
	function arrayToString(array){
		var string = ""
		for (i in array) {
			string += array[i];
		}
		return string
	};
	
	// change the name contained in the button to a string usable in the API query
	function makeQuery(searchQuery){

		var query = searchQuery.split("");

		for( var i = 0; i < query.length; i++){

			if(query[i] == " "){
				query[i] = "+"; // replace spaces with '+'
			};
		};

		return arrayToString(query);
	};


	function getArticles(){

		var search = $searchInput.val().trim()

		var numberOfRecords = $numberOfRecords.val()
		var startYear = $startYear.val()
		var endYear = $endYear.val()
		var key = '0260f164192d4233819b35680fc7cc00'
		var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search + '&sort=oldest&api-key=' + key;

		// + '&begin_date=' + startYear + '&end_date=' + endYear + 

		console.log(queryURL)

		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			console.log(response)
			console.log(response.response.docs.length)

			for( i=0; i < response.response.docs.length; i++){

				console.log("looping")
				// create elements
				var $article = $('<div>');
				$article.attr('class', 'article');

				var $title = $('<div>').text(response.response.docs[i].headline.main);
				$title.attr('class','articleTitle');

				console.log($title)

				// var $author = $('<div>').text(response.response.docs[i].byline.original);
				// $author.attr('class','author');

				var $section = $('<div>').text(response.response.docs[i].section_name);
				$section.attr('class','section');

				var $date = $('<div>').text(response.response.docs[i].pub_date);
				$date.attr('class','date');

				var $URL = $('<div>').text(response.response.docs[i].web_url);
				$URL.attr('class','URL');

				// APPEND!

				$article.append($title, $section, $date, $URL);
				$articleDiv.append($article);


			}

		})


	}


	$searchButton.on('click', function(){

		console.log('search pressed')

		getArticles();

		return false;


	});

	$clearButton.on('click', $articleDiv.empty());

})