var data = {

	"movies": [{
			"image": "https://resizing.flixster.com/LR5dqWoNDaeo6qBrQZmbbTsn54w=/180x261/v1.bTsxMjkxMzE4NTtqOzE4ODA5OzIwNDg7NjYyOzk2MA",
			"title": "The Kindergarten Teacher",
			"releaseDate": "2018",
			"description": "A teacher sees such great promise in her 5-year-old student that she goes to unreasonable lengths to protect his talent. [from Roten Tomatoes]",
			"runtime": "96 Minutes",
			"director": "Sara Colangelo",
			"studio": "Pie Films",
			"rating": "9/10",
			"watch": "Netflix"
		},

		{
			"image": "https://resizing.flixster.com/LR5dqWoNDaeo6qBrQZmbbTsn54w=/180x261/v1.bTsxMjkxMzE4NTtqOzE4ODA5OzIwNDg7NjYyOzk2MA",
			"title": "The Kindergarten Teacher",
			"releaseDate": "2018",
			"description": "A teacher sees such great promise in her 5-year-old student that she goes to unreasonable lengths to protect his talent. [from Roten Tomatoes]",
			"runtime": "96 Minutes",
			"director": "Sara Colangelo",
			"studio": "Pie Films",
			"rating": "9/10",
			"watch": "Netflix"
		},
		{
			"image": "https://resizing.flixster.com/LR5dqWoNDaeo6qBrQZmbbTsn54w=/180x261/v1.bTsxMjkxMzE4NTtqOzE4ODA5OzIwNDg7NjYyOzk2MA",
			"title": "The Kindergarten Teacher",
			"releaseDate": "2018",
			"description": "A teacher sees such great promise in her 5-year-old student that she goes to unreasonable lengths to protect his talent. [from Roten Tomatoes]",
			"runtime": "96 Minutes",
			"director": "Sara Colangelo",
			"studio": "Pie Films",
			"rating": "9/10",
			"watch": "Netflix"
		},
		{
			"image": "https://resizing.flixster.com/LR5dqWoNDaeo6qBrQZmbbTsn54w=/180x261/v1.bTsxMjkxMzE4NTtqOzE4ODA5OzIwNDg7NjYyOzk2MA",
			"title": "The Kindergarten Teacher",
			"releaseDate": "2018",
			"description": "A teacher sees such great promise in her 5-year-old student that she goes to unreasonable lengths to protect his talent. [from Roten Tomatoes]",
			"runtime": "96 Minutes",
			"director": "Sara Colangelo",
			"studio": "Pie Films",
			"rating": "9/10",
			"watch": "Netflix"
		},
		{
			"image": "https://resizing.flixster.com/LR5dqWoNDaeo6qBrQZmbbTsn54w=/180x261/v1.bTsxMjkxMzE4NTtqOzE4ODA5OzIwNDg7NjYyOzk2MA",
			"title": "The Kindergarten Teacher",
			"releaseDate": "2018",
			"description": "A teacher sees such great promise in her 5-year-old student that she goes to unreasonable lengths to protect his talent. [from Roten Tomatoes]",
			"runtime": "96 Minutes",
			"director": "Sara Colangelo",
			"studio": "Pie Films",
			"rating": "9/10",
			"watch": "Netflix"
		}
	]

}

//console.log(data);


function getData() {

  var movielist = data.movies;

  $.each(userlist, function(i, val) {
    
var name = val.title;
////console.log(name);

var year = val.releaseDate;
console.log(year);

var poster = val.image;
//console.log(poster);

var synopsis = val.description;
//console.log(synopsis);

var minutes = val.runtime;
//console.log(minutes);

var dir = val.director;
//console.log(dir);

var company = val.studio;
//console.log(company);

var score = val.rating;
//console.log(score);

var where = val.watch;
//console.log(where);

$('.grid').append('<div class="grid-item"><div class="grid-item-image"><img src " '+poster+' "/></div><div class="grid-item-title"><h1 class="title">'+name+'</h1><h2 class="Director">'+dir+'</h2><h3 class="Runtime">'+minutes+'</h3><h4 class="Studio">'+company+'</h4><h5 class="Rating">'+score+'</h5><h6 class="Where to Watch">'+where+'</h6></div><div class="grid-item-text">'+synopsis+'</div></div>'')


  });

}

getData();
