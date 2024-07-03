let movieRefrences = document.getElementById("movie");
let bttnSearch = document.getElementById("search-bttn");
let outputResult = document.getElementById("output");

// Retrieve data from API

let getMovieDetail = () => {
  let movieName = movieRefrences.value;
  let apiUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=fc30ab42`;

  // if input is empty
  if (movieName.length <= 0) {
    outputResult.innerHTML = `<h3 class="message">Please enter a movie name</h3>`;
  } else {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response == "True") {
          outputResult.innerHTML = `<div class="movie-info">
          <img src=${data.Poster} class="poster"/>
          <div>
          <h2 class="title">${data.Title}</h2>
          <div class="rating">
          <img src="Image/star.png"/>
          <h4>${data.imdbRating}</h4>
          </div>
        
          <div class="details">
          <span>${data.Rated}</span>
          <span>${data.Year}</span>
           <span>${data.Runtime}</span>
          </div>
        
          <div class="genre">
          <div>
          ${data.Genre.split(",").join("</div><div>")}
          </div>
          </div>
          </div>
          </div> 
          <h3>Plot:</h3> 
          <p>${data.Plot}</p>
          <h3>Cast:</h3>
          <p>${data.Actors}</p>
         
           
          `;
        } else {
          outputResult.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
        }
      })
      .catch(() => {
        outputResult.innerHTML = `<h3 class="msg">Error Raise</h3>`;
      });
  }
};

bttnSearch.addEventListener("click", retriveMovie);
window.addEventListener("load", getMovieDetail);
