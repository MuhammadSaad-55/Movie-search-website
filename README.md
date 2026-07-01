# 🎬 Movie Search App

A clean, responsive movie discovery web app built with vanilla HTML, CSS, and JavaScript — powered by the TMDB API.

🔗 **Live Demo:** [movie-search-website-three.vercel.app](https://movie-search-website-three.vercel.app/)

---

## 📸 Screenshots

### Desktop View

![Desktop Screenshot](images/desktop.png)

### Mobile View

![Mobile Screenshot](images/mobile.png)

---

## ✨ Features

- 🔥 **Trending Hero Section** — First popular movie displayed as a full-screen hero with backdrop
- 🎬 **Movie Grid** — Browse popular movies in a clean poster-style grid
- 🔍 **Search** — Search any movie by name using TMDB search API
- 🎭 **Genre Filter** — Filter movies by genre (Action, Comedy, Horror, etc.)
- ▶️ **Trailer Popup** — Watch YouTube trailers directly inside the app
- ❤️ **Favourites** — Save movies to your personal list using LocalStorage
- 📱 **Fully Responsive** — Works on mobile and desktop

---

## 🛠️ Tech Stack

| Technology           | Usage                 |
| -------------------- | --------------------- |
| HTML5                | Structure             |
| CSS3                 | Styling & Animations  |
| JavaScript (Vanilla) | Logic & API calls     |
| TMDB API             | Movie data & trailers |
| LocalStorage         | Saving favourites     |
| Vercel               | Deployment            |

---

## 📁 Project Structure

    movie-search-app/
    │
    ├── index.html
    ├── style.css
    ├── responsive.css
    │
    ├── js/
    │   ├── config.js
    │   ├── movies.js
    │   ├── trailer.js
    │   ├── favourites.js
    │   └── responsive.js
    │
    └── images

---

## 🚀 How It Works

1. On load — Popular movies are fetched from the TMDB API
2. The first movie is displayed as a full-screen hero section
3. Remaining movies are shown in a responsive poster grid
4. Use the search bar or genre filter to discover new movies
5. Click the Trailer button to watch the YouTube trailer in a popup modal
6. Click the Favourites button to save movies — stored in LocalStorage so they persist on refresh

---

## 🔑 API Used

**TMDB (The Movie Database)**

- Free API — [developers.themoviedb.org](https://developers.themoviedb.org)
- Endpoints used:
  - `/movie/popular` — Popular movies
  - `/search/movie` — Search
  - `/genre/movie/list` — Genres
  - `/movie/{id}/videos` — Trailers

---

## 👨‍💻 Author

**Muhammad Saad**

- GitHub: [@MuhammadSaad-55](https://github.com/MuhammadSaad-55)

---

⭐ **If you like this project, give it a star!**
