// script.js
// Design by Kofi Fosu | cosmoscoderr@gmail.com

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic novel about the American Dream.",
    filePath: "books/great-gatsby.pdf",
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about totalitarianism.",
    filePath: "books/1984.pdf",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A story of racial injustice in the American South.",
    filePath: "books/to-kill-a-mockingbird.pdf",
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
    title: "Twin tips",
    author: "Kofi Fosu",
    description: " A Sci-Fi Adventure Thrilling Series.",
    filePath: "h1.pdf",
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
