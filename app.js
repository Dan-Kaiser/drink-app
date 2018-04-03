//EXAMPLE CODE

var YOUTUBE_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';
var theCockTailDB_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
var randomCocktail = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

function getDataFromApi(searchTerm, callback) {
  var query = {
    key: '1',
    s: searchTerm
  }
  console.log($.getJSON(theCockTailDB_ENDPOINT, query, callback));
}

function renderResult(result) {
  return `
    <div>
      <h2> ${result.strDrink}</h2>
      <img src=${result.strDrinkThumb} width="107" height="98">
    </div>
  `;
}

function displaySearchData(data) {
  var results = data.drinks.map(function(item, index) {
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
