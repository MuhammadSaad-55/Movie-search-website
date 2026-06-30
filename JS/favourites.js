// FAVOURITES
function toggleFavourite(movie) {
  const exists = favourites.some((f) => f.id === movie.id);

  if (exists) {
   favourites = favourites.filter((f) => f.id !== movie.id);
  } else {
    favourites.push(movie);
  }

  // LocalStorage mein saved
  localStorage.setItem("favourites", JSON.stringify(favourites));
}

//SIRF FAVOURITES Show
function showFavourites() {
  if (favourites.length === 0) {
    moviesGrid.innerHTML = `<p class="no-results">No favourites yet ❤️</p>`;
    heroTitle.textContent = "My List";
    heroOverview.textContent = "Movies you save will appear here.";
    hero.style.backgroundImage = "";
    return;
  }

  // remove duplicates
  const unique = favourites.filter(
    (movie, index, self) => index === self.findIndex((m) => m.id === movie.id),
  );
  favourites = unique;
  localStorage.setItem("favourites", JSON.stringify(favourites));
  showMovies(favourites);
}

// CLICK EVENTS
// My List button navbar mein
favBtn.addEventListener("click", showFavourites);

// Hero My List button
heroFavBtn.addEventListener("click", () => {
  const movie = {
    id: heroMovieId,
    title: heroTitle.textContent,
    poster_path: null,
    vote_average: 0,
  };
  toggleFavourite(movie);
  const isFav = favourites.some((f) => f.id === heroMovieId);
  heroFavBtn.textContent = isFav ? "✓ In My List" : "+ My List";
});

// GRID CLICKS
// ek listener poori grid pe — har card pe alag nahi
moviesGrid.addEventListener("click", (e) => {
  // Trailer button
  if (e.target.classList.contains("btn-trailer")) {
    playTrailer(e.target.dataset.id);
  }

  // Favourite button
  if (e.target.classList.contains("btn-fav")) {
    const movieId = parseInt(e.target.dataset.id);
    const card = e.target.closest(".movie-card");
    const img = card.querySelector("img");

    const movieData = {
      id: movieId,
      title: card.querySelector(".card-title").textContent.trim(),
      poster_path: img.src.replace(IMG_PATH, ""),
      vote_average: parseFloat(
        card
          .querySelector(".card-rating")
          .textContent.replace("⭐ ", "")
          .trim(),
      ),
    };

     toggleFavourite(movieData);

    const isFav = favourites.some((f) => f.id === movieId);
    e.target.textContent = isFav ? "✓ Saved" : "+ My List";
    e.target.classList.toggle("active", isFav);
  }
});