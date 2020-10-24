$(document).ready(function() {
  $.getJSON(
    "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
    function(data) {
      console.log(data);
     
      $("#text").html("<p>" + data.quoteText + " </p>");
      
      $("#author").html("<p> <i>" + data.quoteAuthor + "</i></p>");
      
      updateTweet(data);
    }
  );
});
$("#new-quote").on("click", function() {
  $.getJSON(
    "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
    function(data) {
      console.log(data);
       $("#text").animate( { opacity: 0 },0,);
      $("#author").animate( { opacity: 0 },0,);
      $("#text").html("<p>" + data.quoteText + " </p>");
     
      $("#author").html("<p> <i>" + data.quoteAuthor + "</i></p>");
      $("#text").animate( { opacity: 1 },500,);
       $("#author").animate( { opacity: 1 },600,);
     
      updateTweet(data);
    }
  );
});
function updateTweet(data) {
  var quote = data.quoteText;
  var author = data.quoteAuthor;
  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?text=" + quote + author + "%0a--- "
  );
}


