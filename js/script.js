
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

    $greeting.text('So, you want to live at ' + address + '?');

    var streetviewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location='+address+'';
    $body.append('<img class="bgimg" src="' + streetviewURL + '">');

    return false;
};

$('#form-container').submit(loadData);

//NyTime Ajax Request
var nytimesURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ cityStry + "&sort=newest&api-key=1b55d9eb5b4b4481a44f287fafb28db4"
$.$.getJSON("ntyimesURL", function(data) {
    $nytHeaderElem.text('New York Times Articles About'+ cityStr);
    articles = data.response.docs;
    for (var i=0; i < articles.length; i++) {
        var articles = articles [i];
        $nytElem.append ('<li class="article> '+
    '<a href="' + article.web_url + '">' + article.headline.main + '</a>' + '<p>'+ article.snippet + '</p>'+'</li>');
    };
} );