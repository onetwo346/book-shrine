// script.js v2.0
// Design by Kofi Fosu | cosmoscoderr@gmail.com
// Updated: Removed ALL PDF accessibility notifications

const books = [
    { title: "Whispers of the Heart", author: "Kofi Fosu", description: "A classic romance full of passion.", filePath: "Whispers-of-the-Heart.pdf", genre: "Romance", rating: 4.8, readCount: 1250, publishDate: "2023-01-15", content: "Chapter 1: The First Meeting\n\nSarah walked through the bustling streets of New York, her heart heavy with the weight of unspoken words. The city lights reflected in her eyes like distant stars, and she wondered if she would ever find the love she so desperately sought.\n\nAs she turned the corner onto 5th Avenue, her eyes met those of a stranger across the street. Time seemed to stand still as their gazes locked, and in that moment, she knew her life was about to change forever.\n\n'Excuse me,' he called out, his voice carrying across the busy street like a gentle breeze. 'I believe you dropped this.'\n\nHe held up a small, delicate flower that had fallen from her hair. Sarah's heart skipped a beat as she realized this was no ordinary encounter - this was destiny calling her name." },
    { title: "Ancestors Hammer", author: "Kofi Fosu", description: "Fantasy Adventure.", filePath: "ancestor-hammer.pdf", genre: "Fantasy", rating: 4.6, readCount: 980, publishDate: "2023-02-20", content: "Chapter 1: The Ancient Weapon\n\nIn the mystical realm of Eldoria, where magic flows like rivers and ancient powers slumber beneath the earth, a young warrior named Kael discovered a weapon that would change the fate of kingdoms.\n\nThe Ancestor's Hammer lay hidden in the depths of the Crystal Caverns, its surface gleaming with otherworldly energy. As Kael's fingers closed around the handle, he felt the power of a thousand generations coursing through his veins.\n\n'This is it,' he whispered to himself, his voice echoing through the cavern. 'The weapon that will unite the realms and bring peace to our troubled lands.'\n\nBut little did he know that with great power comes great responsibility, and the hammer's true purpose was far more complex than he could have imagined." },
    { title: "Deeper than Ocean", author: "Kofi Fosu", description: "Romance.", filePath: "Deeper-than-Ocean.pdf", genre: "Romance", rating: 4.7, readCount: 1100, publishDate: "2023-03-10", content: "Chapter 1: Ocean Depths\n\nMaya stood at the edge of the pier, watching the endless expanse of blue stretch before her. The ocean had always been her sanctuary, a place where she could escape the chaos of her daily life and find peace in its rhythmic waves.\n\n'Beautiful, isn't it?' a voice said beside her.\n\nShe turned to see a man with kind eyes and salt-kissed hair, his weathered hands resting on the railing. There was something about him that reminded her of the ocean itself - deep, mysterious, and full of untold stories.\n\n'It's deeper than it looks,' she replied, her voice barely above a whisper.\n\n'Just like love,' he said with a knowing smile. 'The deeper you go, the more you discover about yourself.'\n\nAnd in that moment, Maya realized that sometimes the greatest adventures begin not with a journey across the sea, but with a single step into the unknown depths of the heart." },
    { title: "The Algorithm Of Souls", author: "Kofi Fosu", description: "A Sci-Fi, Adventure, Metaphysical.", filePath: "The-Algorithm-Of-Souls.pdf", genre: "Sci-Fi", rating: 4.9, readCount: 2100, publishDate: "2023-04-05", content: "Chapter 1: The Digital Awakening\n\nIn the year 2157, humanity had achieved what was once thought impossible - the digitization of consciousness. Dr. Elena Vasquez stood before the massive quantum computer that housed the first successful human soul transfer, her heart racing with both excitement and trepidation.\n\n'We've done it,' she whispered to herself, watching the neural patterns dance across the holographic display. 'We've captured the essence of what makes us human and translated it into pure data.'\n\nBut as the algorithm processed the first human consciousness, something unexpected happened. The digital soul began to evolve, to learn, to grow beyond its original parameters. It was no longer just a copy - it was something entirely new.\n\n'This changes everything,' Elena realized, her mind racing with the implications. 'If consciousness can evolve in digital form, what does that mean for the nature of existence itself?'\n\nThe Algorithm of Souls had been activated, and the future of humanity would never be the same." },
    { title: "Heaven Bound (Book 1)", author: "Kofi Fosu", description: "A Sci-Fi, Adventure Thrilling Series.", filePath: "heaven-bound.pdf", genre: "Sci-Fi", rating: 4.8, readCount: 1800, publishDate: "2023-05-12", content: "Chapter 1: The Launch\n\nCommander Alex Chen strapped himself into the pilot's seat of the Heaven Bound, the most advanced spacecraft ever built. The mission was simple: reach the edge of the known universe and discover what lay beyond.\n\n'All systems green,' his co-pilot, Dr. Sarah Kim, reported from the navigation station. 'The quantum drive is ready for activation.'\n\nAs the countdown began, Alex felt the familiar mix of excitement and fear that came with every space mission. But this time was different. This time, they were going further than anyone had ever gone before.\n\n'Three... two... one... launch!'\n\nThe Heaven Bound shot into space like a silver arrow, leaving Earth behind and heading toward the unknown. Little did the crew know that their journey would take them to places beyond imagination, where the very fabric of reality would be tested.\n\n'Welcome to the greatest adventure of your life,' Alex said, watching the stars streak past the viewport. 'Welcome to Heaven Bound.'" },
    { title: "River Of Time", author: "Kofi Fosu", description: "Ancient wisdom and philosophical insights about the nature of time.", filePath: "River-Of-Time.pdf", genre: "Philosophy", rating: 4.5, readCount: 750, publishDate: "2023-06-18", content: "Wisdom from the Ages\n\nTime flows like a river, never stopping, never slowing. It carries with it the memories of all who have come before, and the dreams of all who will follow.\n\n'In the river of time, we are but drops of water,' the old sage said, his eyes reflecting the wisdom of countless years. 'But each drop has the power to change the course of the entire river.'\n\nThese words have been passed down through generations, a reminder that even the smallest actions can have the greatest impact. In the river of time, every moment matters, every choice counts, and every soul has the power to shape the future.\n\n'Time is not our enemy,' the sage continued, 'but our greatest teacher. It teaches us patience, wisdom, and the true value of every precious moment we are given.'\n\nSo let us flow with the river of time, not against it. Let us learn from its currents and find peace in its eternal rhythm." },
    { title: "Heaven Bound (Book 2)", author: "Kofi Fosu", description: "A Sci-Fi Adventure Thrilling Series.", filePath: "heaven-bound2.pdf", genre: "Sci-Fi", rating: 4.9, readCount: 1950, publishDate: "2023-07-25", content: "Chapter 1: The Return\n\nSix months had passed since the Heaven Bound's historic journey, and Commander Alex Chen found himself back on Earth, but nothing was the same. The knowledge they had gained from the edge of the universe had changed everything.\n\n'We've seen things that shouldn't exist,' Dr. Sarah Kim said, her voice filled with wonder and fear. 'Worlds where time flows backward, dimensions where gravity is optional, and civilizations that exist in pure thought.'\n\nBut their return had not gone unnoticed. The mysterious entities they had encountered at the edge of space had followed them back to Earth, and now humanity faced its greatest challenge yet.\n\n'They're not here to destroy us,' Alex realized, studying the strange signals coming from the alien ships. 'They're here to test us, to see if we're ready for what comes next.'\n\nThe second chapter of the Heaven Bound saga was about to begin, and this time, the fate of all existence hung in the balance." },
    { title: "The Last Echo (Book 1)", author: "Kofi Fosu", description: "A Sci-Fi Adventure Thrilling Series.", filePath: "The-Last-echo.pdf", genre: "Sci-Fi", rating: 4.7, readCount: 1650, publishDate: "2023-08-30", content: "Chapter 1: The Signal\n\nDr. Marcus Webb had spent his entire career listening to the stars, searching for signs of intelligent life beyond Earth. But nothing could have prepared him for what he discovered on that fateful night.\n\n'It's not just a signal,' he said to his team, his hands trembling as he adjusted the radio telescope. 'It's a message, and it's been repeating for over a thousand years.'\n\nThe signal was unlike anything they had ever encountered - a complex pattern of radio waves that seemed to contain vast amounts of information. But as they began to decode it, they realized the message was not just a greeting from an alien civilization.\n\n'It's a warning,' Marcus whispered, his face pale with shock. 'They're telling us that something is coming, something that will change everything we know about the universe.'\n\nThe Last Echo had been heard, and now humanity had to decide whether to listen to its message or face the consequences of ignoring it." },
    { title: "The Void Wanderer", author: "Cosmos Coderr", description: "Science Fiction/Fantasy.", filePath: "The-Void-Wanderer.pdf", genre: "Sci-Fi", rating: 4.6, readCount: 1200, publishDate: "2023-09-15", content: "Chapter 1: The Empty Space\n\nIn the vast emptiness between galaxies, where stars are few and far between, a lone figure drifted through the cosmic void. This was Zara, the Void Wanderer, a being who had chosen to leave behind the comfort of civilization to explore the infinite darkness.\n\n'Out here, you learn what it truly means to be alone,' she said to herself, her voice carried away by the vacuum of space. 'But you also learn what it means to be free.'\n\nHer ship, the Wanderer, was a marvel of engineering - a vessel designed to survive in the harshest conditions the universe could offer. But it was more than just a ship; it was her home, her companion, and her only connection to the world she had left behind.\n\nAs she drifted through the void, Zara discovered that emptiness was not the absence of everything, but the presence of infinite possibility. In the darkness between the stars, she found the light of her own soul." },
    { title: "The Silent Architect", author: "Cosmos Coderr", description: "Science Fiction/Mystery.", filePath: "The-silent-Architect.pdf", genre: "Mystery", rating: 4.8, readCount: 1400, publishDate: "2023-10-22", content: "Chapter 1: The Blueprint\n\nDetective Sarah Chen had seen many strange cases in her career, but nothing could have prepared her for the mystery of the Silent Architect. The case began with a simple break-in at the city's most prestigious architectural firm, but what she discovered there would shake the very foundations of reality.\n\n'Every building in this city,' she said, examining the intricate blueprints spread across the table, 'was designed by the same person. But according to our records, this person doesn't exist.'\n\nThe blueprints were works of art, each one more complex and beautiful than the last. But they were also impossible - structures that defied the laws of physics, buildings that could not be built with any known technology.\n\n'Who is the Silent Architect?' Sarah wondered aloud, her mind racing with possibilities. 'And why have they been designing our city for the past fifty years without anyone knowing?'\n\nThe mystery was deeper than she could have imagined, and the truth would change everything she thought she knew about the world around her." },
  ];

  // User data and reading progress
  let userData = {
    currentUser: null,
    readingHistory: [],
    bookmarks: [],
    readingStats: {
      totalBooksRead: 0,
      totalReadingTime: 0,
      favoriteGenres: [],
      currentStreak: 0
    },
    preferences: {
      theme: 'cosmic',
      autoSave: true,
      notifications: true
    }
  };

  // Reading progress tracking
  let currentReadingProgress = {
    bookTitle: null,
    currentPage: 0,
    totalPages: 0,
    startTime: null,
    readingTime: 0
  };
  
  const bookShrineInfo = {
    about: "Book Shrine is a celestial digital library created by Kofi Fosu that houses unique works of fiction across multiple genres including romance, science fiction, fantasy, and adventure.",
    mission: "To connect readers with extraordinary stories that transport them to new worlds and dimensions, offering an immersive reading experience unlike any other.",
    creator: "Kofi Fosu, also known as Cosmos Coderr, is a visionary author and developer who crafts both stories and digital experiences.",
    features: ["3D interactive book display", "Cosmic animated background", "AI-powered assistant", "Immersive portal transitions", "Curated collection of original works"],
    genres: ["Romance", "Science Fiction", "Fantasy", "Adventure", "Mystery"],
    contact: "cosmoscoderr@gmail.com",
    founded: "The Book Shrine was established as a cosmic haven for literary exploration in 2023."
  };
  
  const introPage = document.getElementById("intro-page");
  const mainPage = document.getElementById("main-page");
  const startButton = document.getElementById("start-button");
  const bookGrid = document.querySelector(".book-grid");
  const searchInput = document.getElementById("search");
  const chatbotCore = document.getElementById("chatbot-core");
  const chatbotWindow = document.getElementById("chatbot-window");
  const chatbotInput = document.getElementById("chatbot-input");
  const sendButton = document.getElementById("send-button");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const closeChatbot = document.getElementById("close-chatbot");
  const canvas = document.getElementById("cosmic-canvas");
  const ctx = canvas.getContext("2d");
  const clickSound = document.getElementById("click-sound");
  const universeSound = document.getElementById("universe-sound");
  
  // OpenAI API Key (replace with your own)
  const OPENAI_API_KEY = "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"; // Get from platform.openai.com
  
  // Cosmic Background
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
    });
  }
  
  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
      s.x += s.speedX;
      s.y += s.speedY;
      if (s.x < 0 || s.x > canvas.width) s.speedX *= -1;
      if (s.y < 0 || s.y > canvas.height) s.speedY *= -1;
    });
    requestAnimationFrame(animateStars);
  }
  animateStars();
  
  // Portal Transition with Sound
  startButton.addEventListener("click", () => {
    clickSound.play();
    universeSound.play();
    const portalOverlay = document.getElementById("portal-overlay");
    portalOverlay.classList.remove("hidden");
    setTimeout(() => {
      introPage.style.display = "none";
      mainPage.style.display = "block";
      mainPage.classList.remove("hidden");
    }, 2000);
  });
  
  // Display Books - Enhanced version with ratings and stats
  function displayBooks(booksToShow) {
    bookGrid.innerHTML = booksToShow.map(book => `
      <div class="book-item" data-genre="${book.genre}">
        <div class="book-header">
          <h2>${book.title}</h2>
          <div class="book-rating">⭐ ${book.rating}</div>
        </div>
        <p class="book-author">${book.author}</p>
        <p class="book-description">${book.description}</p>
        <div class="book-stats">
          <span class="read-count">👥 ${book.readCount.toLocaleString()}</span>
          <span class="book-genre">${book.genre}</span>
        </div>
        <div class="book-actions">
          <button class="read-online" data-file="${book.filePath}" data-title="${book.title}">Read Online</button>
          <button class="bookmark-btn" data-title="${book.title}">🔖</button>
          <button class="share-btn" data-title="${book.title}">📤</button>
        </div>
      </div>
    `).join("");

    // Add event listeners for new buttons
    document.querySelectorAll('.read-online').forEach(button => {
      button.addEventListener("click", (e) => {
        const filePath = button.getAttribute("data-file");
        const bookTitle = button.getAttribute("data-title");
        const bookItem = button.closest(".book-item");
        startReadingSession(bookTitle);
        openBookPopup(filePath, bookItem);
      });
    });

    document.querySelectorAll('.bookmark-btn').forEach(button => {
      button.addEventListener("click", (e) => {
        const bookTitle = button.getAttribute("data-title");
        toggleBookmark(bookTitle);
      });
    });

    document.querySelectorAll('.share-btn').forEach(button => {
      button.addEventListener("click", (e) => {
        const bookTitle = button.getAttribute("data-title");
        shareBook(bookTitle);
      });
    });

    // Enhanced 3D hover effects
    const bookItems = document.querySelectorAll(".book-item");
    bookItems.forEach(item => {
      item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateY = Math.min(Math.max(x / 10, -20), 20);
        const rotateX = Math.min(Math.max(-y / 10, -20), 20);
        item.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });
      item.addEventListener("mouseleave", () => {
        item.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
      });
    });
  }
  
  // Enhanced Book Popup with PDF Reading
  function openBookPopup(filePath, bookItem) {
    const bookTitle = bookItem.querySelector('h2').textContent;
    const book = books.find(b => b.title === bookTitle);
    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    const popup = document.createElement("div");
    popup.className = "book-popup";
  
    popup.innerHTML = `
      <div class="book-popup-header">
        <h3>${bookTitle}</h3>
        <div class="reading-progress-indicator">
          <span>Reading Progress: </span>
          <div class="progress-bar">
            <div class="progress-fill" id="reading-progress-fill"></div>
          </div>
          <span id="progress-text">0%</span>
        </div>
      </div>
      <div class="book-content-viewer" id="book-content-viewer">
        <div class="loading-spinner" id="loading-spinner">
          <div class="spinner"></div>
          <p>Loading your cosmic journey...</p>
        </div>
        <iframe id="pdf-viewer" src="${filePath}" style="display: none; width: 100%; height: 60vh; border: none; border-radius: 8px;" type="application/pdf" allowfullscreen></iframe>
        <div class="book-text" id="book-text" style="display: none;">${book ? book.content : 'Content not available'}</div>
        <div class="pdf-fallback" id="pdf-fallback" style="display: none; text-align: center; padding: 20px;">
          <p style="color: #00ffff; margin-bottom: 15px;">PDF viewer not supported in this browser</p>
          <a href="${filePath}" target="_blank" style="
            background: linear-gradient(45deg, #ff00ff, #00ffff);
            color: #000;
            padding: 10px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
          ">Open PDF in New Tab</a>
        </div>
      </div>
      <div class="pdf-controls">
        <button class="view-toggle-btn" id="view-toggle">📄 PDF View</button>
        <button class="font-size-btn" id="font-increase">A+</button>
        <button class="font-size-btn" id="font-decrease">A-</button>
        <button class="fullscreen-btn">⛶</button>
        <button class="bookmark-current">🔖</button>
        <button class="night-mode-btn">🌙</button>
      </div>
      <div class="reading-timer">
        <span>Reading Time: </span>
        <span id="reading-timer">00:00</span>
      </div>
      <button class="close-popup">Exit</button>
    `;
  
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  
    setTimeout(() => popup.classList.add("active"), 10);
  
    const bookText = popup.querySelector("#book-text");
    const pdfViewer = popup.querySelector("#pdf-viewer");
    const loadingSpinner = popup.querySelector("#loading-spinner");
    const bookContentViewer = popup.querySelector("#book-content-viewer");
    let fontSize = 16;
    let readingStartTime = Date.now();
    let readingTimer = null;
    let isNightMode = false;
    let isPDFView = true;
    let pdfLoaded = false;
    
    // Start reading timer
    readingTimer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - readingStartTime) / 1000);
      const minutes = Math.floor(elapsed / 60);
      const seconds = elapsed % 60;
      document.getElementById('reading-timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);

    // Enhanced PDF loading with better error handling
    let loadTimeout;
    let pdfLoadAttempted = false;
    
    // Check if PDF file exists first
    fetch(filePath, { method: 'HEAD' })
      .then(response => {
        if (!response.ok) {
          throw new Error('PDF not accessible');
        }
        // PDF exists, try to load it
        pdfViewer.src = filePath;
        pdfLoadAttempted = true;
      })
      .catch(error => {
        console.log('PDF not accessible, showing text preview');
        clearTimeout(loadTimeout);
        loadingSpinner.style.display = 'none';
        const pdfFallback = popup.querySelector("#pdf-fallback");
        bookText.style.display = 'block';
        pdfFallback.style.display = 'block';
        isPDFView = false;
        document.getElementById('view-toggle').textContent = '📖 Text View';
        // PDF not available, showing text preview
      });

    // Try to load PDF
    pdfViewer.addEventListener('load', () => {
      clearTimeout(loadTimeout);
      loadingSpinner.style.display = 'none';
      pdfViewer.style.display = 'block';
      pdfLoaded = true;
      // PDF loaded successfully
    });

    pdfViewer.addEventListener('error', () => {
      clearTimeout(loadTimeout);
      // PDF failed to load, show fallback options
      loadingSpinner.style.display = 'none';
      const pdfFallback = popup.querySelector("#pdf-fallback");
      bookText.style.display = 'block';
      pdfFallback.style.display = 'block';
      isPDFView = false;
      document.getElementById('view-toggle').textContent = '📖 Text View';
      // PDF not available, showing text preview
    });

    // Set timeout to show text if PDF takes too long
    loadTimeout = setTimeout(() => {
      if (!pdfLoaded && pdfLoadAttempted) {
        loadingSpinner.style.display = 'none';
        const pdfFallback = popup.querySelector("#pdf-fallback");
        bookText.style.display = 'block';
        pdfFallback.style.display = 'block';
        isPDFView = false;
        document.getElementById('view-toggle').textContent = '📖 Text View';
        // PDF loading slowly, showing text preview
      }
    }, 3000);
  
    const viewToggleBtn = popup.querySelector("#view-toggle");
    const fontIncreaseBtn = popup.querySelector("#font-increase");
    const fontDecreaseBtn = popup.querySelector("#font-decrease");
    const fullscreenBtn = popup.querySelector(".fullscreen-btn");
    const bookmarkBtn = popup.querySelector(".bookmark-current");
    const nightModeBtn = popup.querySelector(".night-mode-btn");
  
    viewToggleBtn.addEventListener("click", () => {
      if (isPDFView && pdfLoaded) {
        // Switch to text view
        pdfViewer.style.display = 'none';
        bookText.style.display = 'block';
        isPDFView = false;
        viewToggleBtn.textContent = '📖 Text View';
        viewToggleBtn.style.background = 'rgba(255, 0, 255, 0.2)';
        viewToggleBtn.style.borderColor = '#ff00ff';
        viewToggleBtn.style.color = '#ff00ff';
      } else if (pdfLoaded) {
        // Switch to PDF view
        bookText.style.display = 'none';
        pdfViewer.style.display = 'block';
        isPDFView = true;
        viewToggleBtn.textContent = '📄 PDF View';
        viewToggleBtn.style.background = 'rgba(0, 255, 255, 0.2)';
        viewToggleBtn.style.borderColor = '#00ffff';
        viewToggleBtn.style.color = '#00ffff';
      } else {
        // PDF not available, show message
        // PDF not available for this book
      }
    });
  
    fontIncreaseBtn.addEventListener("click", () => {
      fontSize += 2;
      if (fontSize > 24) fontSize = 24;
      bookText.style.fontSize = fontSize + 'px';
    });
  
    fontDecreaseBtn.addEventListener("click", () => {
      fontSize -= 2;
      if (fontSize < 12) fontSize = 12;
      bookText.style.fontSize = fontSize + 'px';
    });

    fullscreenBtn.addEventListener("click", () => {
      if (bookContentViewer.requestFullscreen) {
        bookContentViewer.requestFullscreen();
      }
    });

    bookmarkBtn.addEventListener("click", () => {
      toggleBookmark(bookTitle);
      bookmarkBtn.style.color = userData.bookmarks.includes(bookTitle) ? "#ff00ff" : "#666";
    });

    nightModeBtn.addEventListener("click", () => {
      isNightMode = !isNightMode;
      if (isNightMode) {
        bookText.style.background = '#1a1a1a';
        bookText.style.color = '#e0e0e0';
        nightModeBtn.textContent = '☀️';
      } else {
        bookText.style.background = 'transparent';
        bookText.style.color = '#fff';
        nightModeBtn.textContent = '🌙';
      }
    });
  
    // Simulate reading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 2;
      if (progress > 100) progress = 100;
      document.getElementById('reading-progress-fill').style.width = progress + '%';
      document.getElementById('progress-text').textContent = Math.round(progress) + '%';
    }, 2000);
  
    const closeButton = popup.querySelector(".close-popup");
    closeButton.addEventListener("click", () => {
      clearInterval(readingTimer);
      clearInterval(progressInterval);
      endReadingSession();
      document.body.removeChild(overlay);
    });
    
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        clearInterval(readingTimer);
        clearInterval(progressInterval);
        endReadingSession();
        document.body.removeChild(overlay);
      }
    });
  }

  // Removed download function as requested

  // Enhanced PDF viewer with PDF.js
  function createPDFViewer(filePath, container) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const pageNum = 1;
    const pageRendering = false;
    const pageNumPending = null;
    const scale = 1.5;
    const pdfDoc = null;

    // Configure PDF.js worker
    if (typeof pdfjsLib !== 'undefined') {
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }

    function renderPage(num) {
      if (pdfDoc) {
        pageRendering = true;
        pdfDoc.getPage(num).then(function(page) {
          const viewport = page.getViewport({scale: scale});
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          const renderTask = page.render(renderContext);

          renderTask.promise.then(function() {
            pageRendering = false;
            if (pageNumPending !== null) {
              renderPage(pageNumPending);
              pageNumPending = null;
            }
          });
        });
      }
    }

    function queueRenderPage(num) {
      if (pageRendering) {
        pageNumPending = num;
      } else {
        renderPage(num);
      }
    }

    // Load PDF
    if (typeof pdfjsLib !== 'undefined') {
      pdfjsLib.getDocument(filePath).promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        container.innerHTML = '';
        container.appendChild(canvas);
        renderPage(pageNum);
      }).catch(function(error) {
        console.error('PDF loading error:', error);
        return false;
      });
    }

    return canvas;
  }
  
  // Search Books
  function searchBooks() {
    const query = searchInput.value.toLowerCase().trim();
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
  }
  
  // New Book Generation
  const cosmicAuthors = ["Astra Nova", "Zephyr Quill", "Luna Scribe", "Orion Veil", "Cosmos AI"];
  async function generateBook() {
    const genres = ["Sci-Fi", "Romance", "Fantasy", "Horror", "Adventure"];
    const themes = ["cosmic war", "forbidden love", "hidden realms", "dark secrets", "epic quests"];
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const theme = themes[Math.floor(Math.random() * themes.length)];
    const title = `The ${theme.split(" ")[0].charAt(0).toUpperCase() + theme.split(" ")[0].slice(1)} ${theme.split(" ")[1].charAt(0).toUpperCase() + theme.split(" ")[1].slice(1)}`;
    const author = cosmicAuthors[Math.floor(Math.random() * cosmicAuthors.length)];
  
    // Generate description
    const descPrompt = `Write a 50-word description for a ${genre} book titled "${title}" about ${theme}. Make it cosmic and exciting!`;
    const descResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: descPrompt }],
        max_tokens: 60
      })
    });
    const descData = await descResponse.json();
    const description = descData.choices[0].message.content.trim();
  
    // Generate content (short for demo—expand later)
    const contentPrompt = `Write a 1000-word ${genre} story titled "${title}" about ${theme}. Infuse it with cosmic energy and vivid imagery.`;
    const contentResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: contentPrompt }],
        max_tokens: 1100
      })
    });
    const contentData = await contentResponse.json();
    const content = contentData.choices[0].message.content.trim();
  
    // Generate PDF with jsPDF
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(`${title}\n\nBy ${author}\n\n${content}`, 10, 10, { maxWidth: 180 });
    const pdfBlob = doc.output("blob");
    const filePath = URL.createObjectURL(pdfBlob);
  
    const newBook = { title, author, description, filePath };
    books.push(newBook);
    return newBook;
  }
  
  // Auto-generate books
  async function autoGenerateBooks() {
    const booksToGenerate = 3; // 3 new books per "day"—adjust based on API limits
    const newBooks = [];
    for (let i = 0; i < booksToGenerate; i++) {
      try {
        const book = await generateBook();
        newBooks.push(book);
        console.log(`Generated: ${book.title}`);
      } catch (error) {
        console.error("Error generating book:", error);
      }
    }
    displayBooks(books); // Refresh grid
    return newBooks;
  }
  
  // Enhanced Chatbot Response with Better Intelligence
  let lastBookRecommended = null;
  let lastQuery = null;
  let latestBooks = [];
  let conversationHistory = [];
  
  async function chatbotResponse(message) {
    const msg = message.toLowerCase().trim();
    let response = "";
    
    // Add to conversation history
    conversationHistory.push({ role: "user", content: message });
    
    // Enhanced greeting responses
    if (msg === "hi" || msg === "hello" || msg === "hey") {
      const greetings = [
        "🌟 Greetings, cosmic traveler! I'm your Book Shrine guide. Ready to discover amazing stories?",
        "✨ Hello, seeker of tales! What literary adventure shall we embark on today?",
        "🚀 Welcome back, explorer! The cosmic library awaits your curiosity!",
        "📚 Salutations! I'm here to help you navigate the infinite stories of Book Shrine!"
      ];
      response = greetings[Math.floor(Math.random() * greetings.length)];
    } 
    // Enhanced mood responses
    else if (msg.includes("how are you") || msg.includes("how was your day")) {
      const feelings = [
        "🌟 I'm absolutely stellar! The cosmic library is buzzing with new stories. How about you?",
        "✨ My day has been magical, filled with the whispers of countless tales. What's your story?",
        "🚀 I'm fantastic! Ready to help you find your next literary adventure!",
        "📚 I'm doing wonderfully! The books are calling, and I'm here to help you answer!"
      ];
      response = feelings[Math.floor(Math.random() * feelings.length)];
      lastQuery = "how_are_you";
    } 
    else if (lastQuery === "how_are_you" && (msg.includes("good") || msg.includes("fine") || msg.includes("well") || msg.includes("great"))) {
      response = "That's wonderful to hear! 🌟 Now, what kind of story adventure can I help you with today?";
      lastQuery = null;
    } 
    // Enhanced Book Shrine info
    else if (msg.includes("what is book shrine") || msg.includes("tell me about book shrine")) {
      response = `🌟 **Book Shrine** is a celestial digital library created by Kofi Fosu! ✨\n\n${bookShrineInfo.about}\n\n${bookShrineInfo.mission}\n\n🚀 We feature: ${bookShrineInfo.features.join(", ")}`;
    } 
    // Enhanced book count
    else if (msg.includes("how many books") || msg.includes("number of books")) {
      response = `📚 We currently house **${books.length} unique books** in our celestial library! ✨\n\nAnd the cosmic forge is always working—new stories arrive daily from across the universe! 🌌`;
    } 
    // Enhanced book recommendations
    else if (msg.includes("best book") || msg.includes("recommend a book") || msg.includes("suggest")) {
      const bestBook = books.find(book => book.title.toLowerCase().includes("heaven bound")) || books[0];
      lastBookRecommended = bestBook;
      response = `🌟 **My top recommendation:** "${bestBook.title}" by ${bestBook.author}\n\n⭐ Rating: ${bestBook.rating}/5 | 👥 ${bestBook.readCount.toLocaleString()} readers\n\n📖 ${bestBook.description}\n\nWould you like to know more about this cosmic adventure?`;
    } 
    else if (msg.includes("tell me more") && lastBookRecommended) {
      response = `📚 **"${lastBookRecommended.title}"** by ${lastBookRecommended.author}\n\n⭐ **Rating:** ${lastBookRecommended.rating}/5\n👥 **Readers:** ${lastBookRecommended.readCount.toLocaleString()}\n📅 **Published:** ${lastBookRecommended.publishDate}\n🎭 **Genre:** ${lastBookRecommended.genre}\n\n📖 **Description:** ${lastBookRecommended.description}\n\nReady to dive into this cosmic journey? Just click "Read Online"! 🚀`;
    } 
    // Enhanced book search
    else if (msg.includes("book about") || msg.includes("find a book") || msg.includes("search for")) {
      const keyword = msg.split("about")[1]?.trim() || msg.split("find a book")[1]?.trim() || msg.split("search for")[1]?.trim();
      if (keyword) {
        const matchingBooks = books.filter(book =>
          book.title.toLowerCase().includes(keyword) || 
          book.description.toLowerCase().includes(keyword) ||
          book.genre.toLowerCase().includes(keyword) ||
          book.author.toLowerCase().includes(keyword)
        );
        if (matchingBooks.length > 0) {
          response = `🔍 **Found ${matchingBooks.length} book(s) related to "${keyword}":**\n\n` +
            matchingBooks.map(book => `📚 **"${book.title}"** by ${book.author}\n⭐ ${book.rating}/5 | 🎭 ${book.genre}\n📖 ${book.description}\n`).join("\n");
        } else {
          response = `🔍 No books found for "${keyword}". Try searching for:\n• Romance\n• Sci-Fi\n• Fantasy\n• Adventure\n• Mystery\n\nOr ask me to recommend something! 🌟`;
        }
      } else {
        response = "🌟 What kind of story are you in the mood for? I can help you find books by genre, author, or theme!";
      }
    } 
    // Enhanced genre info
    else if (msg.includes("genres") || msg.includes("types of books") || msg.includes("what genres")) {
      response = `📚 **Available Genres in Book Shrine:**\n\n${bookShrineInfo.genres.map(genre => `🎭 **${genre}**`).join("\n")}\n\n✨ Each genre offers unique cosmic adventures! What interests you most?`;
    } 
    // Enhanced contact info
    else if (msg.includes("contact") || msg.includes("email") || msg.includes("reach out")) {
      response = `📧 **Contact the Creator:**\n\n✉️ Email: ${bookShrineInfo.contact}\n👨‍💻 Creator: ${bookShrineInfo.creator}\n\n🌟 Feel free to reach out with feedback, suggestions, or just to say hello!`;
    } 
    // Enhanced creator info
    else if (msg.includes("who created") || msg.includes("creator") || msg.includes("who made")) {
      response = `👨‍💻 **Meet the Creator:**\n\n${bookShrineInfo.creator}\n\n${bookShrineInfo.founded}\n\n🌟 A visionary who crafts both incredible stories and digital experiences!`;
    } 
    // Enhanced new books
    else if (msg.includes("new books") || msg.includes("what's new") || msg.includes("latest")) {
      response = latestBooks.length > 0
        ? `🌟 **Fresh from the Cosmic Forge!**\n\n${latestBooks.map(b => `📚 **"${b.title}"** by ${b.author}\n⭐ ${b.rating}/5 | 🎭 ${b.genre}`).join("\n\n")}\n\n✨ Explore these new arrivals in the book grid!`
        : "🔥 The cosmic forge is heating up—new books will arrive soon! Keep an eye on the grid! ✨";
    }
    // Enhanced help
    else if (msg.includes("help") || msg.includes("what can you do")) {
      response = `🌟 **I'm your Book Shrine Guide! Here's what I can help with:**\n\n📚 **Book Recommendations** - Find your next favorite read\n🔍 **Book Search** - Find books by title, author, or genre\n📖 **Book Info** - Get details about any book\n🎭 **Genre Exploration** - Discover different story types\n📧 **Contact Info** - Connect with the creator\n✨ **General Chat** - Ask me anything about books!\n\nWhat would you like to explore? 🚀`;
    }
    // Enhanced fallback with better context
    else {
      try {
        const prompt = `
          You are BookShrine, a cosmic AI assistant created by Kofi Fosu. You're enthusiastic, helpful, and knowledgeable about books and reading.
          
          About Book Shrine: ${bookShrineInfo.about}
          Mission: ${bookShrineInfo.mission}
          Available Books: ${JSON.stringify(books.map(b => ({ title: b.title, author: b.author, description: b.description, genre: b.genre, rating: b.rating })))}
          Genres: ${bookShrineInfo.genres.join(", ")}
          
          Recent conversation: ${conversationHistory.slice(-3).map(c => `${c.role}: ${c.content}`).join('\n')}
          
          Respond to this user query: "${message}"
          
          Keep responses enthusiastic, helpful, and cosmic-themed. Use emojis appropriately. Be conversational and engaging.
        `;
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: prompt }],
            max_tokens: 200
          })
        });
        const data = await res.json();
        response = data.choices[0].message.content.trim();
      } catch (error) {
        console.error("OpenAI Error:", error);
        response = "🌟 The cosmic winds are a bit turbulent right now... But I'm still here to help! Try asking me about books, genres, or recommendations! ✨";
      }
    }
    
    // Add to conversation history
    conversationHistory.push({ role: "assistant", content: response });
    
    // Keep conversation history manageable
    if (conversationHistory.length > 20) {
      conversationHistory = conversationHistory.slice(-20);
    }
  
    return response;
  }
  
  // Enhanced Chatbot Interaction with Typing Indicator
  sendButton.addEventListener("click", async () => {
    clickSound.play();
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
      addMessage(userMessage, "user");
      chatbotInput.value = "";
      sendButton.disabled = true;
      sendButton.textContent = "⏳";
      
      // Show typing indicator
      showTypingIndicator();
      
      const response = await chatbotResponse(userMessage);
      
      // Hide typing indicator
      hideTypingIndicator();
      
      // Add response with typing effect
      addMessageWithTyping(response, "bot");
      
      sendButton.disabled = false;
      sendButton.textContent = "Send";
    }
  });
  
  chatbotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !sendButton.disabled) {
      sendButton.click();
    }
  });
  
  function addMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}-message`;
    
    if (sender === "user") {
      messageElement.innerHTML = `
        <div class="message-content user-content">
          <div class="message-text">${formatMessage(text)}</div>
          <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        </div>
      `;
    } else {
      messageElement.innerHTML = `
        <div class="message-content bot-content">
          <div class="bot-avatar">🤖</div>
          <div class="message-bubble">
            <div class="message-text">${formatMessage(text)}</div>
            <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
          </div>
        </div>
      `;
    }
    
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  function addMessageWithTyping(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}-message`;
    
    if (sender === "user") {
      messageElement.innerHTML = `
        <div class="message-content user-content">
          <div class="message-text">${formatMessage(text)}</div>
          <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        </div>
      `;
    } else {
      messageElement.innerHTML = `
        <div class="message-content bot-content">
          <div class="bot-avatar">🤖</div>
          <div class="message-bubble">
            <div class="message-text">${formatMessage(text)}</div>
            <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
          </div>
        </div>
      `;
    }
    
    chatbotMessages.appendChild(messageElement);
    
    // Type out the message
    const messageText = messageElement.querySelector('.message-text');
    const fullText = messageText.innerHTML;
    messageText.innerHTML = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        messageText.innerHTML = fullText.substring(0, i + 1);
        i++;
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
      } else {
        clearInterval(typeInterval);
      }
    }, 20);
  }
  
  function formatMessage(text) {
    // Convert markdown-style formatting to HTML
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
  }
  
  function showTypingIndicator() {
    const typingElement = document.createElement("div");
    typingElement.id = "typing-indicator";
    typingElement.className = "message bot-message";
    typingElement.innerHTML = `
      <div class="message-content bot-content">
        <div class="bot-avatar">🤖</div>
        <div class="message-bubble typing-bubble">
          <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    `;
    chatbotMessages.appendChild(typingElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  function hideTypingIndicator() {
    const typingElement = document.getElementById("typing-indicator");
    if (typingElement) {
      typingElement.remove();
    }
  }
  
  // Enhanced Chatbot Toggle and Drag
  chatbotCore.addEventListener("click", () => {
    clickSound.play();
    chatbotWindow.classList.toggle("hidden");
    if (!chatbotWindow.classList.contains("hidden") && chatbotMessages.children.length === 0) {
      addMessage("🌟 Welcome to Book Shrine! I'm your cosmic guide to amazing stories! ✨\n\nWhat can I help you discover today?", "bot");
      addQuickActions();
    }
  });
  
  function addQuickActions() {
    const quickActions = document.createElement("div");
    quickActions.className = "quick-actions";
    quickActions.innerHTML = `
      <div class="quick-action-buttons">
        <button class="quick-btn" onclick="handleQuickAction('recommend a book')">📚 Recommend</button>
        <button class="quick-btn" onclick="handleQuickAction('what genres do you have')">🎭 Genres</button>
        <button class="quick-btn" onclick="handleQuickAction('what is book shrine')">ℹ️ About</button>
        <button class="quick-btn" onclick="handleQuickAction('help')">❓ Help</button>
      </div>
    `;
    chatbotMessages.appendChild(quickActions);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  function handleQuickAction(action) {
    chatbotInput.value = action;
    sendButton.click();
  }
  
  closeChatbot.addEventListener("click", () => {
    clickSound.play();
    chatbotWindow.classList.add("hidden");
  });
  
  const draggableChat = document.getElementById("chatbot-draggable");
  let isDragging = false, currentX = 0, currentY = 0, initialX = 0, initialY = 0;
  
  draggableChat.addEventListener("mousedown", startDragging);
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", stopDragging);
  draggableChat.addEventListener("touchstart", startDraggingTouch, { passive: false });
  document.addEventListener("touchmove", dragTouch, { passive: false });
  document.addEventListener("touchend", stopDragging);
  
  function startDragging(e) {
    // Allow dragging from anywhere on the chatbot container
    if (e.target === chatbotCore || e.target === chatbotWindow || e.target.closest('.cosmic-chat')) {
      isDragging = true;
      initialX = e.clientX - currentX;
      initialY = e.clientY - currentY;
      e.preventDefault();
      
      // Add visual feedback
      draggableChat.style.cursor = 'grabbing';
      draggableChat.style.transform = 'scale(0.98)';
    }
  }
  
  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      setChatbotPosition(currentX, currentY);
    }
  }
  
  function startDraggingTouch(e) {
    // Allow dragging from anywhere on the chatbot container
    if (e.target === chatbotCore || e.target === chatbotWindow || e.target.closest('.cosmic-chat')) {
      isDragging = true;
      const touch = e.touches[0];
      initialX = touch.clientX - currentX;
      initialY = touch.clientY - currentY;
      e.preventDefault();
    }
  }
  
  function dragTouch(e) {
    if (isDragging) {
      e.preventDefault();
      const touch = e.touches[0];
      currentX = touch.clientX - initialX;
      currentY = touch.clientY - initialY;
      setChatbotPosition(currentX, currentY);
    }
  }
  
  function stopDragging() {
    isDragging = false;
    
    // Reset visual feedback
    draggableChat.style.cursor = 'move';
    draggableChat.style.transform = '';
  }
  
  function setChatbotPosition(x, y) {
    draggableChat.style.left = `${x}px`;
    draggableChat.style.top = `${y}px`;
    draggableChat.style.bottom = "auto";
    draggableChat.style.right = "auto";
  }
  
  currentX = window.innerWidth - 70;
  currentY = window.innerHeight - 70;
  setChatbotPosition(currentX, currentY);
  
  // Enhanced Particle System
  function createParticles() {
    const container = document.getElementById('particle-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      container.appendChild(particle);
    }
  }

  // Enhanced Search with Suggestions
  function showSearchSuggestions(query) {
    const suggestions = document.getElementById('search-suggestions');
    if (query.length < 2) {
      suggestions.style.display = 'none';
      return;
    }

    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.genre.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    if (filteredBooks.length > 0) {
      suggestions.innerHTML = filteredBooks.map(book => `
        <div class="suggestion-item" onclick="selectSuggestion('${book.title}')">
          <strong>${book.title}</strong><br>
          <small>${book.author} • ${book.genre} • ⭐ ${book.rating}</small>
        </div>
      `).join('');
      suggestions.style.display = 'block';
    } else {
      suggestions.innerHTML = '<div class="suggestion-item" style="color: #666;">No books found</div>';
      suggestions.style.display = 'block';
    }
  }

  function selectSuggestion(title) {
    document.getElementById('search').value = title;
    document.getElementById('search-suggestions').style.display = 'none';
    searchBooks();
  }

  // Reading Progress Tracking
  function updateReadingProgress(progress) {
    const progressBar = document.getElementById('reading-progress');
    progressBar.style.width = progress + '%';
  }

  function startReadingSession(bookTitle) {
    currentReadingProgress.bookTitle = bookTitle;
    currentReadingProgress.startTime = Date.now();
    currentReadingProgress.currentPage = 0;
    
    // Add to reading history
    userData.readingHistory.push({
      bookTitle,
      startTime: new Date().toISOString(),
      status: 'reading'
    });
    
    saveUserData();
  }

  function endReadingSession() {
    if (currentReadingProgress.startTime) {
      const readingTime = Date.now() - currentReadingProgress.startTime;
      currentReadingProgress.readingTime += readingTime;
      
      // Update user stats
      userData.readingStats.totalReadingTime += readingTime;
      
      // Update reading history
      const lastSession = userData.readingHistory[userData.readingHistory.length - 1];
      if (lastSession) {
        lastSession.endTime = new Date().toISOString();
        lastSession.duration = readingTime;
        lastSession.status = 'completed';
      }
      
      saveUserData();
    }
  }

  // User Data Management
  function saveUserData() {
    localStorage.setItem('bookShrineUserData', JSON.stringify(userData));
  }

  function loadUserData() {
    const saved = localStorage.getItem('bookShrineUserData');
    if (saved) {
      userData = { ...userData, ...JSON.parse(saved) };
    }
  }


  // Bookmark functionality
  function toggleBookmark(bookTitle) {
    const index = userData.bookmarks.indexOf(bookTitle);
    if (index > -1) {
      userData.bookmarks.splice(index, 1);
      showNotification('Bookmark removed! 🔖');
    } else {
      userData.bookmarks.push(bookTitle);
      showNotification('Bookmarked! 🔖');
    }
    saveUserData();
    updateBookmarkButtons();
  }

  function updateBookmarkButtons() {
    document.querySelectorAll('.bookmark-btn').forEach(button => {
      const bookTitle = button.getAttribute("data-title");
      if (userData.bookmarks.includes(bookTitle)) {
        button.textContent = "🔖";
        button.style.color = "#ff00ff";
      } else {
        button.textContent = "🔖";
        button.style.color = "#666";
      }
    });
  }

  // Share functionality
  function shareBook(bookTitle) {
    const book = books.find(b => b.title === bookTitle);
    if (navigator.share) {
      navigator.share({
        title: book.title,
        text: `Check out "${book.title}" by ${book.author} on Book Shrine!`,
        url: window.location.href
      });
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(`Check out "${book.title}" by ${book.author} on Book Shrine! ${window.location.href}`);
      showNotification('Book link copied to clipboard! 📋');
    }
  }

  // Enhanced Search with Genre Filtering
  function searchBooks() {
    const query = searchInput.value.toLowerCase().trim();
    if (query === '') {
      displayBooks(books);
      document.getElementById('search-suggestions').style.display = 'none';
      return;
    }
    
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.toLowerCase().includes(query) ||
      book.description.toLowerCase().includes(query)
    );
    displayBooks(filteredBooks);
    showSearchSuggestions(query);
  }

  // Header Controls Event Listeners
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  document.getElementById('settings-btn').addEventListener('click', openSettings);
  document.getElementById('user-profile').addEventListener('click', openUserProfile);

  // Theme Toggle
  function toggleTheme() {
    const currentTheme = userData.preferences.theme;
    const newTheme = currentTheme === 'cosmic' ? 'dark' : 'cosmic';
    userData.preferences.theme = newTheme;
    saveUserData();
    applyTheme(newTheme);
  }

  function applyTheme(theme) {
    document.body.className = theme;
    const themeButton = document.getElementById('theme-toggle');
    themeButton.textContent = theme === 'cosmic' ? '🌙' : '☀️';
  }

  // Settings Modal
  function openSettings() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Settings</h2>
        <div class="setting-item">
          <label>Auto-save reading progress</label>
          <input type="checkbox" id="auto-save" ${userData.preferences.autoSave ? 'checked' : ''}>
        </div>
        <div class="setting-item">
          <label>Enable notifications</label>
          <input type="checkbox" id="notifications" ${userData.preferences.notifications ? 'checked' : ''}>
        </div>
        <div class="setting-item">
          <label>Particle effects</label>
          <input type="checkbox" id="particles" checked>
        </div>
        <button class="cosmic-button" onclick="closeModal()">Save Settings</button>
      </div>
    `;
    document.body.appendChild(modal);
    
    // Add event listeners for settings
    document.getElementById('auto-save').addEventListener('change', (e) => {
      userData.preferences.autoSave = e.target.checked;
      saveUserData();
    });
    
    document.getElementById('notifications').addEventListener('change', (e) => {
      userData.preferences.notifications = e.target.checked;
      saveUserData();
    });
  }

  // User Profile Modal
  function openUserProfile() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Reading Profile</h2>
        <div class="profile-stats">
          <div class="stat-item">
            <span class="stat-label">Books Read:</span>
            <span class="stat-value">${userData.readingStats.totalBooksRead}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Reading Time:</span>
            <span class="stat-value">${Math.round(userData.readingStats.totalReadingTime / 60000)} min</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Current Streak:</span>
            <span class="stat-value">${userData.readingStats.currentStreak} days</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Bookmarks:</span>
            <span class="stat-value">${userData.bookmarks.length}</span>
          </div>
        </div>
        <div class="recent-books">
          <h3>Recent Reading</h3>
          ${userData.readingHistory.slice(-5).map(session => `
            <div class="recent-session">
              <span>${session.bookTitle}</span>
              <span>${new Date(session.startTime).toLocaleDateString()}</span>
            </div>
          `).join('')}
        </div>
        <button class="cosmic-button" onclick="closeModal()">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
      modal.remove();
    }
  }

  // Close modal when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });

  // Community Features
  function shareBookShrine() {
    const shareText = "Check out this amazing cosmic digital library - Book Shrine! 🌌✨";
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: 'Book Shrine - Cosmic Digital Library',
        text: shareText,
        url: shareUrl
      });
    } else {
      navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      showNotification('Book Shrine link copied to clipboard! 📋');
    }
  }

  function openFeedback() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Share Your Thoughts</h2>
        <p>We'd love to hear from you! Your feedback helps us improve Book Shrine.</p>
        <textarea id="feedback-text" placeholder="Tell us what you think about Book Shrine..." rows="6" style="width: 100%; padding: 10px; border-radius: 8px; border: 1px solid #00ffff; background: rgba(0,0,0,0.5); color: #fff; margin: 15px 0;"></textarea>
        <div style="display: flex; gap: 10px; justify-content: center;">
          <button class="cosmic-button" onclick="submitFeedback()">Send Feedback</button>
          <button class="cosmic-button" onclick="closeModal()">Cancel</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  function submitFeedback() {
    const feedback = document.getElementById('feedback-text').value;
    if (feedback.trim()) {
      // In a real app, this would send to a server
      showNotification('Thank you for your feedback! 🙏');
      closeModal();
    } else {
      showNotification('Please enter some feedback first!');
    }
  }

  function openCommunity() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <h2>Join Our Cosmic Community</h2>
        <div class="community-stats">
          <div class="stat-item">
            <span class="stat-label">Active Readers</span>
            <span class="stat-value">1,247</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Books Read</span>
            <span class="stat-value">15,892</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Reviews Shared</span>
            <span class="stat-value">3,456</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Bookmarks Created</span>
            <span class="stat-value">8,901</span>
          </div>
        </div>
        <p style="text-align: center; color: #ccc; margin: 20px 0;">
          Connect with fellow book lovers and share your reading journey!
        </p>
        <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
          <button class="cosmic-button" onclick="showNotification('Coming soon! 🚀')">Discord Server</button>
          <button class="cosmic-button" onclick="showNotification('Coming soon! 🚀')">Reading Groups</button>
          <button class="cosmic-button" onclick="showNotification('Coming soon! 🚀')">Book Clubs</button>
        </div>
        <button class="cosmic-button" onclick="closeModal()" style="margin-top: 20px;">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
  }

  // Notification queue to prevent duplicates
  let notificationQueue = [];
  let isShowingNotification = false;

  function showNotification(message) {
    // Add to queue if already showing a notification
    if (isShowingNotification) {
      notificationQueue.push(message);
      return;
    }

    isShowingNotification = true;
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(45deg, #ff00ff, #00ffff);
      color: #000;
      padding: 15px 20px;
      border-radius: 10px;
      font-weight: bold;
      z-index: 3000;
      animation: slideIn 0.3s ease;
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
      max-width: 300px;
      word-wrap: break-word;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        notification.remove();
        isShowingNotification = false;
        // Show next notification in queue
        if (notificationQueue.length > 0) {
          const nextMessage = notificationQueue.shift();
          showNotification(nextMessage);
        }
      }, 300);
    }, 3000);
  }

  // Add notification animations to CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  


  // Initial Display and Auto-Generation
  loadUserData();
  createParticles();
  displayBooks(books);
  updateBookmarkButtons();
  applyTheme(userData.preferences.theme);
  
  // Add loading animation
  setTimeout(() => {
    showNotification('Welcome to Book Shrine! 🌌✨');
  }, 1000);
  
  
  autoGenerateBooks().then(newBooks => {
    latestBooks = newBooks; // Track latest for chatbot
  });
  
  // Simulate daily drops (client-side, every 24 hours when page is open)
  setInterval(() => {
    autoGenerateBooks().then(newBooks => {
      latestBooks = newBooks;
      console.log("New cosmic batch generated!");
    });
  }, 24 * 60 * 60 * 1000); // 24 hours
  
  // Resize Handler
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (!isDragging) {
      currentX = window.innerWidth - 70;
      currentY = window.innerHeight - 70;
      setChatbotPosition(currentX, currentY);
    }
  });
  
  // IP Address Handling (No Popup)
  async function handleUserIP() {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      const userIP = data.ip;
      const storedIP = localStorage.getItem("userIP");
  
      if (!storedIP || storedIP !== userIP) {
        localStorage.setItem("userIP", userIP);
        console.log("New IP detected:", userIP);
      } else {
        console.log("Returning IP:", userIP);
      }
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  }
  
  handleUserIP();