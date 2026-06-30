const API_KEY = "a7a35af60ff564595f545e04755cb9e2";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const IMG_ORIGINAL = "https://image.tmdb.org/t/p/original";

const moviesGrid = document.getElementById("moviesGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const genreFilter = document.getElementById("genreFilter");
const favBtn = document.getElementById("favBtn");
const trailerModal = document.getElementById("trailerModal");
const trailerFrame = document.getElementById("trailerFrame");
const closeTrailer = document.getElementById("closeTrailer");
const hero = document.getElementById("hero");
const heroTitle = document.getElementById("heroTitle");
const heroOverview = document.getElementById("heroOverview");
const heroTrailerBtn = document.getElementById("heroTrailerBtn");
const heroFavBtn = document.getElementById("heroFavBtn");

let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
let heroMovieId = null;
