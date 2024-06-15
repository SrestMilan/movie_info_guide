let movieRefrences = document.getElementById("movie");
let bttnSearch = document.getElementById("search-bttn");
let outputResult = document.getElementById("output");

// Retrieve data from API

let getMovieDetail = () => {
  let movieName = movieRefrences.value;
  let apiUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=fc30ab42`;

  // if input is empty
  if (movieName <= 0) {
    outputResult.innerHTML = `<h3 class="message">Please enter a movie name</h3>`;
  } else {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.Poster);
        console.log(data.Title);
        console.log(data.imdbRating);
        console.log(data.Rated);
        console.log(data.Year);
        console.log(data.Runtime);
        console.log(data.Genre);
        console.log(data.Plot);
        console.log(data.Actors);
      });
  }
};

window.addEventListener("load", getMovieDetail);
