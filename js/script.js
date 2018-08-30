
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");


    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address.toUpperCase() + '?');

    // creating a streetview url to get the picture of the street
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location='
    + address + '';

    // append to the body the link as an a tag
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    // creating a url for the AJAX requests to NY Times
    // the articles will be requested based on the city
    var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='
     + cityStr + '&sort=newest&api-key=19a6d57d79654c298a0b02e85d96d00e'

     // creating a request on the url
    $.getJSON(nytimesUrl, function(data) {
      // creating a headline with the requested city
        $nytHeaderElem.text('New York Times Articles About ' + cityStr.toUpperCase());
        // saving the response data in a variable
        articles = data.response.docs;
        // iterating through the articles
        for(var i = 0; i < articles.length; i++) {
            var article = articles[i];
            // append each article to a li element
            // each li element consists of an a and a p tag
            $nytElem.append('<li class="article">' + '<a href="'
            + article.web_url + '">' + article.headline.main + '</a>' +
            '<p>' + article.snippet + '</p>' + '</li>');
        };

$('#form-container').submit(loadData);