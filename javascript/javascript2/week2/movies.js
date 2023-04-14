//1.Create an array of movies containing the movies with a short title (you define what short means)
let shorTitlemovies = movies.filter(movie => movie.title.length < 3);
console.log("short title", shorTitlemovies);
//2.Create an array of movie titles with long movie titles
let longTitlelemovies = movies.filter(movie => movie.title.length > 5);
console.log("long title", longTitlelemovies);

//3.Count the number of movies made between 1980-1989 (including both the years)
let numberOfMovies = movies.filter(numberOfMovies => numberOfMovies.year > 1979 && numberOfMovies.year < 1990).length;
console.log("movies made between 1980-1989", numberOfMovies);

/* 4.Create a new array that has an extra key called tag. 
The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)*/

const moviesWithTag = movies.map(function (movie) {
    let tag=""
    if (movie.rating >= 7) {
        tag="Good"; 
    } else if (movie.rating >= 4 && movie.rating < 7) {
        tag="Average"; 
    } else if(movie.rating<4) {
        tag = "Bad";
    }
        return {
        title: movie.title,
        year: movie.year,
        rating: movie.rating,
            tag: tag,
    };
})
console.log(moviesWithTag);

/* 5.Using chaining, first filter the movies array to only contain the movies rated higher than 6.
 Now map the movies array to only the rating of the movies.*/

const higherRatedMovies = movies.filter(movies => movies.rating>8).map(movies=>movies.rating)
console.log("rated higher than 6 ", higherRatedMovies);

/* 6.Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. 
Can you make sure the search is case insensitive?*/

const searchKeyWords = movies.filter(movie => movie.title.match(/alien/gi) || movie.title.match(/surfer/gi) || movie.title.match(/benjamin/gi))
console.log("There are " + searchKeyWords.length + " movies having keywords Surfer, Alien or Benjamin in title");
