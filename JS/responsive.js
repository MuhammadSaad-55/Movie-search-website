const searchIconBtn = document.getElementById("searchIconBtn");
const searchBox = document.getElementById("searchBox");
const searchInputMobile = document.getElementById("searchInput");

if (searchIconBtn) {
  searchIconBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchBox.classList.toggle("active");
    if (searchBox.classList.contains("active")) {
      searchInputMobile.focus();
    }
  });

  document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target) && e.target !== searchIconBtn) {
      searchBox.classList.remove("active");
    }
  });
}
