// TRAILER

async function playTrailer(movieId) {
  const res = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`,
  );
  const data = await res.json();

  // only YouTube trailer
  const trailer = data.results.find(
    (v) => v.site === "YouTube" && v.type === "Trailer",
  );

  if (trailer) {
    trailerFrame.src = `https://www.youtube.com/embed/${trailer.key}?autoplay=1`;
    trailerModal.classList.remove("hidden");
  } else {
    alert("Trailer not available!");
  }
}

// TRAILER CLOSE
function closeTrailerModal() {
  trailerModal.classList.add("hidden");
  // Removed src, video background mein nai chalni chihye
  trailerFrame.src = "";
}

// Trailer close button
closeTrailer.addEventListener("click", closeTrailerModal);

// Modal ke bahar click karo toh band ho
trailerModal.addEventListener("click", (e) => {
  if (e.target === trailerModal) closeTrailerModal();
});

// Hero trailer button
heroTrailerBtn.addEventListener("click", () => {
  if (heroMovieId) playTrailer(heroMovieId);
});
