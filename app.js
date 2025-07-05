// Search bar functionality
document.getElementById("searchBtn").addEventListener("click", function () {
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

  if (!found) {
    alert("No matching destination found.");
  }
});

// Trip package options
const packages = {
  India: {
    low: [
      "3D Budget Goa Getaway – ₹8,500",
      "2N Jaipur Heritage Trip – ₹9,000",
      "3D Rishikesh Adventure Camp – ₹9,500"
    ],
    mid: [
      "5D Kerala Backwater Tour – ₹15,000",
      "4D North East Explorer – ₹17,500",
      "5D Ooty Scenic Escape – ₹19,800"
    ],
    high: [
      "7D Kashmir Luxury Escape – ₹25,000",
      "6D Rajasthan Royal Tour – ₹28,000",
      "8D Andaman Island Cruise – ₹32,500"
    ]
  },
  Tokyo: {
    low: [
      "2D Tokyo Backpacking – ₹9,500",
      "3D Food & Culture Tour – ₹9,800",
      "2N Capsule Hotel + City Pass – ₹9,999"
    ],
    mid: [
      "4D Tokyo & Mt. Fuji – ₹18,000",
      "5D Anime & Temple Trail – ₹19,500",
      "4D Cherry Blossom Walk – ₹17,800"
    ],
    high: [
      "6D Premium Tokyo Tour – ₹30,000",
      "7D Tokyo-Kyoto Bullet Tour – ₹35,000",
      "5D Disney Tokyo Luxury Stay – ₹33,500"
    ]
  },
  London: {
    low: [
      "2D Budget Walk – ₹9,800",
      "3D Museums & Markets – ₹9,500",
      "Hop-on Hop-off Weekend – ₹9,999"
    ],
    mid: [
      "4D City & Museum Tour – ₹17,000",
      "5D Harry Potter + Windsor – ₹18,200",
      "Thames Cruise + Tower Tour – ₹19,000"
    ],
    high: [
      "6D Royal Luxury Stay – ₹28,000",
      "7D London-Edinburgh Train – ₹30,000",
      "5D Elite Shopping + Dining – ₹32,000"
    ]
  },
  Paris: {
    low: [
      "3D Paris Essentials – ₹9,500",
      "2N Eiffel & Louvre Tour – ₹9,800",
      "3D Street Café Tour – ₹9,999"
    ],
    mid: [
      "5D Paris + Disneyland – ₹19,000",
      "4D Bakery Crawl – ₹17,800",
      "5D Paris + Versailles – ₹18,700"
    ],
    high: [
      "7D Romantic Getaway – ₹32,000",
      "6D Shopping Tour – ₹30,500",
      "Seine Cruise + Gourmet Nights – ₹34,000"
    ]
  },
  Dubai: {
    low: [
      "3D Desert Tour – ₹9,800",
      "Creek + Gold Souk – ₹9,600",
      "Burj Khalifa Weekend – ₹9,999"
    ],
    mid: [
      "5D Marina + Safari – ₹18,500",
      "Abu Dhabi + Mosque – ₹17,000",
      "Palm Jumeirah + Global Village – ₹19,500"
    ],
    high: [
      "7D Cruise & Skydive – ₹35,000",
      "Atlantis + Balloon Ride – ₹32,500",
      "VIP Shopping Festival – ₹36,000"
    ]
  },
  "New York": {
    low: [
      "2D Walking Tour – ₹9,900",
      "3D Times Square – ₹9,800",
      "Central Park + Museum – ₹9,999"
    ],
    mid: [
      "4D Broadway + Park – ₹18,000",
      "5D Statue + Brooklyn – ₹19,200",
      "NY Pass + Nightlife – ₹17,800"
    ],
    high: [
      "6D Manhattan Experience – ₹40,000",
      "7D NY + DC Train Trip – ₹38,500",
      "Empire State Elite Stay – ₹36,000"
    ]
  }
};

// Suggest Trip
function suggestTrip() {
  const dest = document.getElementById("dest").value;
  const budget = document.getElementById("budget").value;
  const resultBox = document.getElementById("trip-result");

  const list = packages[dest][budget];
  const suggestionList = list.map(item => `<li>${item}</li>`).join("");
  resultBox.innerHTML = `
    <p><strong>Recommended Packages:</strong></p>
    <ul>${suggestionList}</ul>
  `;
}
