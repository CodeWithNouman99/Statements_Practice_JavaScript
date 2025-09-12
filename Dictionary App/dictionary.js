const searchInput = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const resultBox = document.querySelector(".result");
const placeholder = document.querySelector(".placeholder");
const toggleBtn = document.querySelector(".toggle-btn");

// Search function
async function searchWord() {
  const word = searchInput.value.trim();
  if (!word) {
    placeholder.textContent = "Please enter a word to search.";
    resultBox.style.display = "none";
    return;
  }

  try {
    placeholder.innerHTML = "⏳ Loading...";
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!res.ok) throw new Error("Word not found");
    const data = await res.json();

    // Clear old result
    resultBox.innerHTML = "";

    // Word + phonetics
    const wordElem = document.createElement("p");
    wordElem.className = "word";
    wordElem.textContent = data[0].word;

    const phoneticsElem = document.createElement("p");
    phoneticsElem.className = "phonetics";
    phoneticsElem.textContent = data[0].phonetics[0]?.text || "";

    // Audio button
    if (data[0].phonetics[0]?.audio) {
      const audioBtn = document.createElement("button");
      audioBtn.textContent = "🔊";
      audioBtn.style.marginLeft = "10px";
      audioBtn.style.cursor = "pointer";
      audioBtn.style.border = "none";
      audioBtn.style.background = "transparent";
      audioBtn.style.fontSize = "1.2rem";

      audioBtn.addEventListener("click", () => {
        const audio = new Audio(data[0].phonetics[0].audio);
        audio.play();
      });

      phoneticsElem.appendChild(audioBtn);
    }

    resultBox.appendChild(wordElem);
    resultBox.appendChild(phoneticsElem);

    // Meanings
    data[0].meanings.forEach(meaning => {
      const section = document.createElement("div");
      section.className = "meaning-section";

      const partOfSpeech = document.createElement("h3");
      partOfSpeech.textContent = meaning.partOfSpeech;
      section.appendChild(partOfSpeech);

      meaning.definitions.slice(0, 2).forEach(def => {
        const defElem = document.createElement("p");
        defElem.className = "meaning";
        defElem.textContent = def.definition;
        section.appendChild(defElem);

        if (def.example) {
          const exElem = document.createElement("p");
          exElem.className = "example";
          exElem.textContent = `"${def.example}"`;
          section.appendChild(exElem);
        }
      });

      resultBox.appendChild(section);
    });

    // Copy button
    const copyBtn = document.createElement("button");
    copyBtn.textContent = "📋 Copy";
    copyBtn.style.marginTop = "10px";
    copyBtn.style.padding = "6px 12px";
    copyBtn.style.border = "none";
    copyBtn.style.borderRadius = "6px";
    copyBtn.style.cursor = "pointer";
    copyBtn.style.background = "#007bff";
    copyBtn.style.color = "#fff";
    copyBtn.style.fontSize = "0.9rem";

    copyBtn.addEventListener("click", () => {
      let textToCopy = `${data[0].word}\n\n`;
      data[0].meanings.forEach(meaning => {
        textToCopy += `(${meaning.partOfSpeech})\n`;
        meaning.definitions.slice(0, 1).forEach(def => {
          textToCopy += `- ${def.definition}\n`;
          if (def.example) textToCopy += `Example: ${def.example}\n`;
        });
        textToCopy += "\n";
      });

      navigator.clipboard.writeText(textToCopy.trim());
      copyBtn.textContent = "✅ Copied!";
      setTimeout(() => (copyBtn.textContent = "📋 Copy"), 2000);
    });

    resultBox.appendChild(copyBtn);

    resultBox.style.display = "block";
    placeholder.textContent = "";
  } catch (error) {
    placeholder.textContent = "❌ Word not found. Try again.";
    resultBox.style.display = "none";
  }
}

// Search button click
searchBtn.addEventListener("click", searchWord);

// Enter key press
searchInput.addEventListener("keypress", e => {
  if (e.key === "Enter") searchWord();
});

// Dark mode toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});
