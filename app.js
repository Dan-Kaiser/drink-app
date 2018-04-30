var theCockTailDB_ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
var byIndex = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';

var state = {
	items: [],
	ids: []
}
var userSearch = "";

var drinkTitles = {
	a: [11001,11000,11003,11002,11010,11008,11019,11011,11009,11012,11007,11014,11006,11023,11025,11020,11046,11055,11034,11021,11027,11013,11052,11054,11005,11022,11026,11053,11004,11029,11024,11028,11050,12710,12756,12564,12560,12562,12790,12792,12794,12862,12864,12870,13086,13162,13501,13423,13731,13938,13683,13807,14107,14272,14306,14364,17020,16202,16943,14564,14622,14372,14374,14610,14560,14578,14360,14584,15024,15266,15106,15200,17228,15597,16134,17222,15849,16100,15675,16405,16082,16354,17005,16289,17094,16958,16311,17074,16419,16333,15182,17118,15567,15941,17168,17180,15194,17066,17229,17224,17227,17223,17226,17225],
	b: [11016,11060,11084,11102,11118,11064,11117,11112,11128,11170,11120,11113,11147,11157,11124,11121,11106,11146,11149,11119,11129,11164,12572,12658,12654,12656,12708,12876,13068,13066,13222,13282,13405,13395,13405,13332,14071,16998,14356,14538,16403,14510,16447,14730,15853,15511,16295,17268,16986,16176,17825,17267,17035,15951,17251,17079,17254,17184,17120,17195,17183,17209,17210,17242,17220,17221],
	c: [11205,11227,11251,11255,11242,11239,11222,11224,11288,11145,11202,11243,12730,12732,12734,12808,12798,12800,12796,12802,12890,13206,13328,13751,14181,14133,14608,14282,17250,15615,16047,17065,17135,17174,17186,17185,17108,17196],
	d: [11326,11291,11324,11320,12736,13128,13194,14482,14466,15409,16991,17177,17182,17211,17187,17181],
	e: [11339,11338,12668,12910,12914,12916,17246,17212],
	f: [11379,11387,11369,11390,11368,11391,11382,11375,12768,12670,12672,12674,13070,13202,13675,16485,14688,15743,17197,17198,17213,17248],
	g: [11410,11396,11407,11416,11415,11403,11433,11420,11419,11417,11424,11422,12712,11408,11418,12758,11423,12762,12944,13497,14642,15427,17255,15997,17252,17002,17175,17200,17199,17230],
	h: [11470,11472,11462,11476,12738,12766,12954,14782,15813,16262,17044,17202,17201,17239],
	i: [11528,11524,12706,12770,12772,12820,13539,13971,16987,17015,17176],
	j: [11542,11580,11558,11566,12688,13847,13775,14095,14956,15825,16275,16178,17178],
	k: [11604,11602,11600,12714,12720,12764,13190,13837,17006,14446,14456,14752,15026,16951,17203],
	l: [11662,11658,11664,11670,11668,12752,11634,11666,12692,12690,12698,12704,12702,12694,12696,13196,14366,14378,15086,17204],
	m: [11720,11798,11690,11728,12716,12744,11766,11786,12776,12774,12988,13060,13254,13825,13839,13936,14053,13427,14209,14842,15224,16196,16041,15841,17256,17189,17188,17206,17205],
	n: [11844,12746,13192,13204,13861,15549],
	o: [11872,11870,12748,12618,13200,13499,14586,16995,15330,17827,17266,17179],
	p: [11938,11936,11959,11965,11963,11961,12718,13072,13214,13535,15092,17207,16992,17253,17829,17190,17191,17192,17249],
	q: [11983,11993,11987,11989,11991,11985,13198,15761],
	r: [12071,12091,12087,12057,12067,12055,12089,12097,12093,12101,12630,14087,14978,15082,16250,16031,16984,17167,17114,17122,17208,17214,17245],
	s: [12186,12722,12138,12130,12107,12724,12158,12162,12188,12754,12127,12190,12198,12196,12760,12214,12316,12224,12308,12256,12322,12854,12780,12750,13026,13024,13020,13032,13036,13042,13389,13377,13625,14195,16990,16985,15226,15184,15521,15789,16273,17193,17215,17141,17233],
	t: [12726,12786,12784,12782,12402,12370,12388,12420,12418,12362,12856,13621,14602,14860,15178,15006,15515,17216,15639,17826,17828,17824,16271,17247],
	u: [],
	v: [12450,12460,12446,12442,12434,12436,12444,12452,14167,17218,15403,16967,17217],
	w: [12516,12518,12528,12474,13056,13058,16158,17194],
	x: [],
	y: [12728,17219],
	z: [14157,14065,14594,16942,15328,14888,15801,15933,15691,17027,16963,15254,17241]
};

var drinkTitlesTest = {
	a: [{name : "A", id: 11004}, {name : "A2", id: 11064}, {name : "A3", id: 11224}],
	b: [{name : "B", id: 11064}],
	c: [{name : "C", id: 11224}],
	d: [{name : "D", id: 11324}],
	e: [{name : "E", id: 11338}],
	f: [{name : "F", id: 11375}],
	g: [{name : "G", id: 11417}],
	h: [{name : "H", id: 11470}],
	i: [{name : "I", id: 11528}],
	j: [{name : "J", id: 11566}],
	k: [{name : "K", id: 12764}],
	l: [{name : "L", id: 11670}],
	m: [{name : "M", id: 11786}],
	n: [{name : "N", id: 11844}],
	o: [{name : "O", id: 16995}],
	p: [{name : "P", id: 11938}],
	q: [{name : "Q", id: 11993}],
	r: [{name : "R", id: 12055}],
	s: [{name : "S", id: 13036}],
	t: [{name : "T", id: 12726}],
	u: [{name : "U", id: 14456}],
	v: [{name : "V", id: 12444}],
	w: [{name : "W", id: 13058}],
	x: [{name : "X", id: 12754}],
	y: [{name : "Y", id: 17219}],
	z: [{name : "Z", id: 16942}]
};

//	console.log(nestedArrays[1][(Math.floor(Math.random() * nestedArrays[0].length))])
//	console.log(drinkTitlesTest.a[0].id);

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function getDataByFirstLetter(searchTerm, callback) {
	//sort array by search term then append array to html
	state.items = [];
	state.ids = [];
	userSearch = searchTerm.toString().toLowerCase();

	for(o = 0; o < searchTerm.length; o++){
		var currentLetter = userSearch[o];
		var random = Math.floor(Math.random() * (drinkTitles[currentLetter].length-1));
	
		var query = {
	    key: 1,
	    i: drinkTitles[currentLetter][random]
		}
		state.ids.push(query.i);

		$.getJSON(byIndex, query, callback);
	}
}

function getDataBySearch(searchTerm, callback) {
  var query = {
    key: 1,
    s: searchTerm
  }
  $.getJSON(theCockTailDB_ENDPOINT, query, callback);
}

function getAllDataByIndex() {
	for (var o = 0; o <= theCocktailDBIdDump.length -1; o++) {

		var query = {
			key: 1,
			i: theCocktailDBIdDump[o]
		}

		$.getJSON(byIndex, query, function(data){
			if (checkIfData(data)){
				state.items.push({
					name: data.drinks[0].strDrink,
					id: data.drinks[0].idDrink
				});
				for (e = 0; e < alphabet.length; e++){
					if (data.drinks[0].strDrink.toLowerCase().charAt(0) === alphabet[e]) {
						drinkTitles[alphabet[e]].push(data.drinks[0].idDrink);
					}
				}
			}
		});
	}
	console.log(drinkTitles);
}

//could add a number on the render Result return to label each time it renders a result
function renderResult(result) {
  return `
  		<div class="col-4">
        <p> ${result.strDrink}</p>
        <img class="drink-image" src=${result.strDrinkThumb} width="200">
        </div>
    `;
}
function addItemToState(data) {
	state.items.push(data.drinks[0]);
}

function displaySearchData(data) {
	//console.log('displaying search data');
	addItemToState(data);
	var results = state.items.map(function(item, index) {
    	return renderResult(item);
  	});
  	var itemOrder = orderData(state);
  	console.log(itemOrder);
  	for (i = 0; i < itemOrder.length; i++){
  	$('.js-search-results').append(results[itemOrder[i]]);
  	}
}

function orderData(state){
	var array = [];
	if (state.ids.length === userSearch.length && state.ids.length === state.items.length) {
		for (i = 0; i <= state.ids.length-1; i++){
			for (o = 0; o <= state.items.length-1; o++){
				if (state.items[o].idDrink === state.ids[i].toString()){
					array.push(o);
				}
			}
		}
		return array;
	} else {
		return false;
	}
}

function checkIfData (data) {
	if (data.drinks === null) {
		return false;
	} else {
		return true;
	}
}

function watchSubmit() {
  $('.js-search-form').submit(function(event) {
    event.preventDefault();
    var queryTarget = $(event.currentTarget).find('.js-query');
    var query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    $('.js-search-results').html("");
    //getAllDataByIndex();
    //getDataBySearch(query, displaySearchData);
    getDataByFirstLetter(query, displaySearchData);
  });
}

$(watchSubmit);



/*

var sort_by = function(field, reverse, primer){

   var key = primer ? 
       function(x) {return primer(x[field])} : 
       function(x) {return x[field]};

   reverse = !reverse ? 1 : -1;

   return function (a, b) {
       return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
     } 
}

*/


/*
var example = { 
	people:[
    {
    name: 'a75',
    item1: false,
    item2: false},
	{
    name: 'z32',
    item1: true,
    item2: false},
	{
    name: 'e77',
    item1: false,
    item2: false},
    {
    name: 'd77',
    item1: false,
    item2: false},
    {
    name: 'f77',
    item1: false,
    item2: false},
    ],
}
console.log(example.people);

console.log(example.people.sort(function(a,b) {
	return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
})); 
*/











var theCocktailDBIdDump = [
11000,
11001,
11002,
11003,
11004,
11005,
11006,
11007,
11008,
11009,
11010,
11011,
11012,
11013,
11014,
11016,
11019,
11020,
11021,
11022,
11023,
11024,
11025,
11026,
11027,
11028,
11029,
11034,
11046,
11050,
11052,
11053,
11054,
11055,
11060,
11064,
11084,
11102,
11106,
11112,
11113,
11117,
11118,
11119,
11120,
11121,
11124,
11128,
11129,
11145,
11146,
11147,
11149,
11157,
11164,
11170,
11202,
11205,
11222,
11224,
11227,
11239,
11242,
11243,
11251,
11255,
11288,
11291,
11320,
11324,
11326,
11338,
11339,
11368,
11369,
11375,
11379,
11382,
11387,
11390,
11391,
11396,
11403,
11407,
11408,
11410,
11415,
11416,
11417,
11418,
11419,
11420,
11422,
11423,
11424,
11433,
11462,
11470,
11472,
11476,
11524,
11528,
11542,
11558,
11566,
11580,
11600,
11602,
11604,
11634,
11658,
11662,
11664,
11666,
11668,
11670,
11690,
11720,
11728,
11766,
11786,
11798,
11844,
11870,
11872,
11936,
11938,
11959,
11961,
11963,
11965,
11983,
11985,
11987,
11989,
11991,
11993,
12055,
12057,
12067,
12071,
12087,
12089,
12091,
12093,
12097,
12101,
12107,
12127,
12130,
12138,
12158,
12162,
12186,
12188,
12190,
12196,
12198,
12214,
12224,
12256,
12308,
12316,
12322,
12362,
12370,
12388,
12402,
12418,
12420,
12434,
12436,
12442,
12444,
12446,
12450,
12452,
12460,
12474,
12516,
12518,
12528,
12560,
12562,
12564,
12572,
12618,
12630,
12654,
12656,
12658,
12668,
12670,
12672,
12674,
12688,
12690,
12692,
12694,
12696,
12698,
12702,
12704,
12706,
12708,
12710,
12712,
12714,
12716,
12718,
12720,
12722,
12724,
12726,
12728,
12730,
12732,
12734,
12736,
12738,
12744,
12746,
12748,
12750,
12752,
12754,
12756,
12758,
12760,
12762,
12764,
12766,
12768,
12770,
12772,
12774,
12776,
12780,
12782,
12784,
12786,
12790,
12792,
12794,
12796,
12798,
12800,
12802,
12808,
12820,
12854,
12856,
12862,
12864,
12870,
12876,
12890,
12910,
12914,
12916,
12944,
12954,
12988,
13020,
13024,
13026,
13032,
13036,
13042,
13056,
13058,
13060,
13066,
13068,
13070,
13072,
13086,
13128,
13162,
13190,
13192,
13194,
13196,
13198,
13200,
13202,
13204,
13206,
13214,
13222,
13254,
13282,
13328,
13332,
13377,
13389,
13395,
13405,
13405,
13423,
13427,
13497,
13499,
13501,
13535,
13539,
13581,
13621,
13625,
13675,
13683,
13731,
13751,
13775,
13807,
13825,
13837,
13839,
13847,
13861,
13899,
13936,
13938,
13940,
13971,
14029,
14053,
14065,
14071,
14087,
14095,
14107,
14133,
14157,
14167,
14181,
14195,
14209,
14229,
14272,
14282,
14306,
14356,
14360,
14364,
14366,
14372,
14374,
14378,
14446,
14456,
14466,
14482,
14510,
14538,
14560,
14564,
14578,
14584,
14586,
14588,
14594,
14598,
14602,
14608,
14610,
14622,
14642,
14688,
14730,
14752,
14782,
14842,
14860,
14888,
14956,
14978,
15006,
15024,
15026,
15082,
15086,
15092,
15106,
15178,
15182,
15184,
15194,
15200,
15224,
15226,
15254,
15266,
15288,
15300,
15328,
15330,
15346,
15395,
15403,
15409,
15423,
15427,
15511,
15515,
15521,
15549,
15567,
15597,
15615,
15639,
15675,
15691,
15743,
15761,
15789,
15801,
15813,
15825,
15841,
15849,
15853,
15933,
15941,
15951,
15997,
16031,
16041,
16047,
16082,
16100,
16108,
16134,
16158,
16176,
16178,
16196,
16202,
16250,
16262,
16271,
16273,
16275,
16289,
16295,
16311,
16333,
16354,
16403,
16405,
16419,
16447,
16485,
16942,
16943,
16951,
16958,
16963,
16967,
16984,
16985,
16986,
16987,
16990,
16991,
16992,
16995,
16998,
17002,
17005,
17006,
17015,
17020,
17027,
17035,
17044,
17060,
17065,
17066,
17074,
17079,
17094,
17105,
17108,
17114,
17118,
17120,
17122,
17135,
17141,
17167,
17168,
17174,
17175,
17176,
17177,
17178,
17179,
17180,
17181,
17182,
17183,
17184,
17185,
17186,
17187,
17188,
17189,
17190,
17191,
17192,
17193,
17194,
17195,
17196,
17197,
17198,
17199,
17200,
17201,
17202,
17203,
17204,
17205,
17206,
17207,
17208,
17209,
17210,
17211,
17212,
17213,
17214,
17215,
17216,
17217,
17218,
17219,
17220,
17221,
17222,
17223,
17224,
17225,
17226,
17227,
17228,
17229,
17230,
17233,
17239,
17241,
17242,
17245,
17246,
17247,
17248,
17249,
17250,
17251,
17252,
17253,
17254,
17255,
17256,
17266,
17267,
17268,
17824,
17825,
17826,
17827,
17828,
17829];
