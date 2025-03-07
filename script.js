// script.js
// Design by Kofi Fosu | cosmoscoderr@gmail.com

const books = [
  {
    title: "Whispers of the heart",
    author: "Kofi Fosu",
    description: "A classic romance full of passion.",
    filePath: "Whispers-of-the-Heart.pdf",
  },
  {
    title: "Ancestors Hammer",
    author: "Kofi Fosu",
    description: "Fantasy Adventure.",
    filePath: "ancestor-hammer.pdf",
  },
  {
    title: "Deeper than Ocean",
    author: "Kofi Fosu",
    description: "Romance.",
    filePath: "Deeper-than-Ocean.pdf",
  },
  {
    title: "Heaven bound (book 1)",
    author: "Kofi Fosu",
    description: " A Sci-Fi Adventure Thrilling Series.",
    filePath: "heaven-bound.pdf",
  },
  {
    title: "Heaven bound (book 2)",
    author: "Kofi Fosu",
    description: " A Sci-Fi Adventure Thrilling Series.",
    filePath: "heaven-bound2.pdf",
  },
  {
    title: "The-Last-echo (book1)",
    author: "Kofi Fosu",
    description: " A Sci-Fi Adventure Thrilling Series.",
    filePath: "The-Last-echo.pdf",
  },
  {
    title: "The Void Wanderer",
    author: "Cosmos Coderr",
    description: "Science Fiction/Fantasy.",
    filePath: "The-Void-Wanderer.pdf",
  },
{
    title: "The silent Achitect",
    author: "Cosmos Coderr",
    description: "Science Fiction/Mystery.",
    filePath: "The-silent-Achitect.pdf",
  },
  {
    title: "The Algorithm Of Souls (book1)",
    author: "Kofi Fosu",
    description: " A Sci-Fi Adventure Thrilling Series.",
    filePath: "The-Algorithm-Of-Souls.pdf",
  },



];

const introPage = document.getElementById("intro-page");
const mainPage = document.getElementById("main-page");
const startButton = document.getElementById("start-button");
const bookList = document.querySelector(".book-list");
const searchInput = document.getElementById("search");
const chatbotButton = document.getElementById("chatbot-button");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotInput = document.getElementById("chatbot-input");
const sendButton = document.getElementById("send-button");
const chatbotMessages = document.getElementById("chatbot-messages");

// Show main page and hide intro page
startButton.addEventListener("click", () => {
  introPage.style.display = "none";
  mainPage.style.display = "block";
});

// Display books
function displayBooks(books) {
  bookList.innerHTML = books
    .map(
      (book) => `
      <div class="book-item">
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.description}</p>
        <a href="${book.filePath}" target="_blank">Read Online</a>
      </div>
    `
    )
    .join("");
}

// Search books
function searchBooks() {
  const query = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
  );
  displayBooks(filteredBooks);
}

// Chatbot functionality
sendButton.addEventListener("click", () => {
  const userMessage = chatbotInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, "user");
    chatbotInput.value = "";
    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      addMessage("This is a simulated response from the AI.", "bot");
    }, 1000);
  }
});

function addMessage(text, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.textContent = text;
  chatbotMessages.appendChild(messageElement);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Chatbot toggle
chatbotButton.addEventListener("click", () => {
  chatbotWindow.classList.toggle("hidden");
});

// Initial display
displayBooks(books);
