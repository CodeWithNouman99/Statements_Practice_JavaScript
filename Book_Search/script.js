    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const resultsDiv = document.getElementById("results");

    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const popupImg = document.getElementById("popupImg");
    const popupTitle = document.getElementById("popupTitle");
    const popupAuthor = document.getElementById("popupAuthor");
    const popupYear = document.getElementById("popupYear");
    const popupDesc = document.getElementById("popupDesc");

    async function fetchBooks(query) {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      return data.items || [];
    }

    function displayBooks(books) {
      resultsDiv.innerHTML = "";
      if (books.length === 0) {
        resultsDiv.innerHTML = "<p>No books found. Try again.</p>";
        return;
      }
      books.forEach(book => {
        const info = book.volumeInfo;
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `
          <img src="${info.imageLinks ? info.imageLinks.thumbnail : 'https://via.placeholder.com/200x280'}" alt="Book Cover">
          <h3>${info.title || "No Title"}</h3>
          <p>${info.authors ? info.authors.join(", ") : "Unknown Author"}</p>
        `;
        card.addEventListener("click", () => showPopup(info));
        resultsDiv.appendChild(card);
      });
    }

    function showPopup(info) {
      popupImg.src = info.imageLinks ? info.imageLinks.thumbnail : "https://via.placeholder.com/200x280";
      popupTitle.textContent = info.title || "No Title";
      popupAuthor.textContent = `Author: ${info.authors ? info.authors.join(", ") : "Unknown"}`;
      popupYear.textContent = `Published: ${info.publishedDate || "N/A"}`;
      popupDesc.textContent = info.description || "No description available.";
      popup.style.display = "flex";
    }

    closePopup.addEventListener("click", () => popup.style.display = "none");
    window.addEventListener("click", (e) => { if (e.target === popup) popup.style.display = "none"; });

    searchBtn.addEventListener("click", async () => {
      const query = searchInput.value.trim();
      if (query) {
        const books = await fetchBooks(query);
        displayBooks(books);
      }
    });

    searchInput.addEventListener("keypress", async (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) {
          const books = await fetchBooks(query);
          displayBooks(books);
        }
      }
    });
