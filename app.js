// Trip packages
const packages = {
  India: {
    low: ["3D Goa Getaway – ₹8,500", "2N Jaipur Trip – ₹9,000", "3D Rishikesh Camp – ₹9,500"],
    mid: ["5D Kerala Backwater – ₹15,000", "4D NE Explorer – ₹17,500", "5D Ooty Escape – ₹19,800"],
    high: ["7D Kashmir – ₹25,000", "6D Rajasthan Royal – ₹28,000", "8D Andaman Cruise – ₹32,500"]
  },
  Tokyo: {
    low: ["2D Backpack – ₹9,500", "3D Food Tour – ₹9,800", "2N Capsule Stay – ₹9,999"],
    mid: ["4D Mt. Fuji – ₹18,000", "5D Anime Trail – ₹19,500", "4D Blossom Tour – ₹17,800"],
    high: ["6D Premium Tokyo – ₹30,000", "7D Kyoto Bullet – ₹35,000", "5D Disney Stay – ₹33,500"]
  },
  London: {
    low: ["2D Budget Walk – ₹9,800", "3D Museums – ₹9,500", "Hop-on Hop-off – ₹9,999"],
    mid: ["4D City Tour – ₹17,000", "5D Potter + Windsor – ₹18,200", "Thames Cruise – ₹19,000"],
    high: ["6D Luxury Stay – ₹28,000", "7D London-Edinburgh – ₹30,000", "5D Shopping – ₹32,000"]
  },
  Paris: {
    low: ["3D Paris Essentials – ₹9,500", "2N Eiffel + Louvre – ₹9,800", "3D Café Tour – ₹9,999"],
    mid: ["5D Disneyland – ₹19,000", "4D Bakery Crawl – ₹17,800", "5D Versailles – ₹18,700"],
    high: ["7D Romantic – ₹32,000", "6D Shopping – ₹30,500", "Seine Cruise – ₹34,000"]
  },
  Dubai: {
    low: ["3D Desert Tour – ₹9,800", "Creek + Souk – ₹9,600", "Burj Khalifa – ₹9,999"],
    mid: ["5D Marina + Safari – ₹18,500", "Abu Dhabi Tour – ₹17,000", "Global Village – ₹19,500"],
    high: ["7D Cruise + Skydive – ₹35,000", "Atlantis Ride – ₹32,500", "VIP Shopping – ₹36,000"]
  },
  "New York": {
    low: ["2D Walking Tour – ₹9,900", "3D Times Sq – ₹9,800", "Central Park – ₹9,999"],
    mid: ["4D Broadway – ₹18,000", "5D Statue Tour – ₹19,200", "Nightlife – ₹17,800"],
    high: ["6D Manhattan – ₹40,000", "7D NY + DC – ₹38,500", "Empire State – ₹36,000"]
  }
};

// Search
document.getElementById("searchBtn").addEventListener("click", () => {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const cards = document.querySelectorAll(".card");
  let found = false;

  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(input)) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.style.border = "2px solid #00aa6c";
      card.style.boxShadow = "0 0 15px rgba(0,170,108,0.6)";
      setTimeout(() => {
        card.style.border = "";
        card.style.boxShadow = "";
      }, 2000);
      found = true;
    }
  });

  if (!found) alert("No matching destination found.");
});

// Suggest Trip
function suggestTrip() {
  const dest = document.getElementById("dest").value;
  const budget = document.getElementById("budget").value;
  const resultBox = document.getElementById("trip-result");

  const list = packages[dest][budget];
  const suggestion = list[Math.floor(Math.random() * list.length)];

  resultBox.innerHTML = `
    <p><strong>Recommended:</strong> ${suggestion}</p>
    <button onclick="saveFavorite('${suggestion}')">❤️ Save to Favorites</button>
  `;
}

// Save to Favorites
function saveFavorite(pkg) {
  let favs = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favs.includes(pkg)) {
    favs.push(pkg);
    localStorage.setItem('favorites', JSON.stringify(favs));
    alert("Added to favorites!");
  } else {
    alert("Already saved.");
  }
}

// Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
