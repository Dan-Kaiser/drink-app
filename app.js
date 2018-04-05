var theCockTailDB_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';


function getDataFromApi(searchTerm, callback) {
  var query = {
    key: '1',
    s: searchTerm,
  }
  $.getJSON(theCockTailDB_ENDPOINT, query, callback);

}

function renderResult(result) {
  return `
    <div class="col-3">
      <p> ${result.strDrink}</p>
      <img class="drink-image" src=${result.strDrinkThumb} width="200">
    </div>
  `;
}

function displaySearchData(data) {
  var results = data.drinks.map(function(item, index) {
    return renderResult(item)
  });
  var sortedResults = results.sort();
  $('.js-search-results').html(sortedResults);
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
