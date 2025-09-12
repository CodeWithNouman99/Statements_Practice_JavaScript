const emojiBtn = document.querySelector('#emojiBtn');
const emojiPanel = document.querySelector('#emojiPanel');
const textInput = document.querySelector('#textInput');
const emojiList = document.querySelector('#emojiList');
const emojiSearch = document.querySelector('#emojiSearch');

// Toggle emoji panel
emojiBtn.addEventListener('click', () => {
  emojiPanel.classList.toggle('hidden');
  emojiSearch.value = ""; // clear search when opening
  filterEmojis("");       // show all
});

// Add emoji to input
emojiList.addEventListener('click', (e) => {
  if (e.target.tagName === 'SPAN') {
    textInput.value += e.target.textContent;
  }
});

// Search filter
emojiSearch.addEventListener('input', () => {
  const searchTerm = emojiSearch.value.toLowerCase();
  filterEmojis(searchTerm);
});

function filterEmojis(searchTerm) {
  const emojis = emojiList.querySelectorAll('span');
  emojis.forEach(emoji => {
    const keywords = emoji.dataset.keywords;
    if (keywords.includes(searchTerm)) {
      emoji.style.display = "block";
    } else {
      emoji.style.display = "none";
    }
  });
}
