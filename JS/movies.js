// GENRES FETCH
async function loadGenres() {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();

  data.genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre.id;
    option.textContent = genre.name;
    genreFilter.appendChild(option);
  });
}

loadGenres();

// Movies FETCH
async function fetchMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    moviesGrid.innerHTML = `<p class="no-results">No movies found 🎬</p>`;
    return;
  }

  showHero(data.results[0]);
  showMovies(data.results);
}

async function showHero(movie) {
  // Hero ka background image
  hero.style.backgroundImage = `url(${IMG_ORIGINAL}${movie.backdrop_path})`;

  heroTitle.textContent = movie.title;
  heroOverview.textContent = movie.overview;

  heroMovieId = movie.id;

  // check yeh movie pehle se favourites mein hai ya nahi
  const isFav = favourites.some((f) => f.id === movie.id);
  if (isFav) {
    heroFavBtn.textContent = "✓ In My List";
  } else {
    heroFavBtn.textContent = "+ My List";
  }
}

function showMovies(movies) {
  // Pehle grid khaali
  moviesGrid.innerHTML = "";

  movies.forEach((movie) => {
    // agar poster nahi hai toh skip
    if (!movie.poster_path) return;

    // check favourites mein hai ya nahi
    const isFav = favourites.some((f) => f.id === movie.id);

    // Card
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `<img src="${IMG_PATH}${movie.poster_path}" alt="${movie.title}"/>
        <div class = "info">
            <h3>${movie.title}</h3>
            <span class = "rating">⭐ ${movie.vote_average.toFixed(1)}</span>
        </div>
        <div class = "card-overlay">
            <p class = "card-title">${movie.title}</p>
            <p class = "card-rating">⭐ ${movie.vote_average.toFixed(1)}</p>
            <button class = "btn-trailer" data-id= "${movie.id}">▶ Trailer</button>
            <button class="btn-fav ${isFav ? "active" : ""}" data-id="${movie.id}">${isFav ? "✓ Saved" : "+ My List"}
        </div>`;
    moviesGrid.appendChild(card);
  });
}

// Search button
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    fetchMovies(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  }
});

// Enter search
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchBtn.click();
});

// Genre filter
genreFilter.addEventListener("change", () => {
  const genreId = genreFilter.value;
  if (genreId) {
    fetchMovies(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`,
    );
  } else {
    fetchMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  }
});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

loadGenres();
fetchMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
