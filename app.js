//EXAMPLE CODE

var YOUTUBE_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key: 'AIzaSyDJzeYQZK5q4CIdrjORkD7gJmhhrrWnedc',
    q: searchTerm
  }
  console.log($.getJSON(YOUTUBE_ENDPOINT, query, callback));
}

function renderResult(result) {
  return `
    <div>
      <a href="https://www.youtube.com/watch?v=${result.id.videoId}"target="_blank">
      <img src=${result.snippet.thumbnails.default.url}>
      </a>
    </div>
  `;
}

function displaySearchData(data) {
  var results = data.items.map(function(item, index) {
    return renderResult(item)
  });
  $('.js-search-results').html(results);
}

function watchSubmit() {
  $('.js-search-form').submit(function(event) {
    event.preventDefault();
    var queryTarget = $(event.currentTarget).find('.js-query');
    var query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displaySearchData);
  });
}

$(watchSubmit);
