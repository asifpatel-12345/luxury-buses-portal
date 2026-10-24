// Data for 10 Luxury Buses
const luxuryBuses = [
  {
    id: 1,
    name: "Volvo B11R Celestial Sleeper",
    category: "volvo",
    route: "Mumbai ⇄ Goa Express",
    price: "₹2,499",
    tag: "A/C Multi-Axle",
    features: ["Massaging Seats", "Free Wi-Fi", "Personal TV", "Washroom"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800"
  },
  {
    id: 2,
    name: "Scania Metrolink HD Executive",
    category: "scania",
    route: "Bangalore ⇄ Hyderabad",
    price: "₹1,899",
    tag: "VIP Lounge",
    features: ["Recliner Club", "Pantry Service", "Type-C Charging"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800"
  },
  {
    id: 3,
    name: "Mercedes-Benz Super High-Deck",
    category: "sleeper",
    route: "Delhi ⇄ Manali Royale",
    price: "₹2,999",
    tag: "Ultra Luxury",
    features: ["Heated Blanket", "Live GPS", "HEPA Air Filter"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800"
  },
  {
    id: 4,
    name: "Mahindra Cruzio Grand VIP",
    category: "volvo",
    route: "Pune ⇄ Ahmedabad Direct",
    price: "₹1,750",
    tag: "Multi-Axle 9600",
    features: ["Extra Legroom", "Reading Lights", "Snack Box"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800"
  },
  {
    id: 5,
    name: "BharatBenz Glider 12m Sleeper",
    category: "sleeper",
    route: "Chennai ⇄ Coimbatore",
    price: "₹1,650",
    tag: "Night Liner",
    features: ["Privacy Curtains", "Soft Pillow", "Ambient Lighting"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800"
  },
  {
    id: 6,
    name: "Volvo 9600 Premium Double Axle",
    category: "volvo",
    route: "Delhi ⇄ Udaipur Sunset",
    price: "₹2,200",
    tag: "Flagship",
    features: ["Suspension Control", "4K Display", "Mini Bar"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800"
  },
  {
    id: 7,
    name: "Scania Touring HD Business Class",
    category: "scania",
    route: "Kolkata ⇄ Siliguri Liner",
    price: "₹1,950",
    tag: "Business Suite",
    features: ["Work Desk", "5G Hotspot", "Attendant Call"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800"
  },
  {
    id: 8,
    name: "Eicher Intercity Skyline Suite",
    category: "sleeper",
    route: "Indore ⇄ Jaipur Express",
    price: "₹1,550",
    tag: "Sleeper Luxury",
    features: ["Orthopedic Foam", "Noise Cancellation", "USB Ports"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800"
  },
  {
    id: 9,
    name: "Volvo B11R Night Rider Edition",
    category: "volvo",
    route: "Bangalore ⇄ Goa Beach Route",
    price: "₹2,600",
    tag: "Custom Interiors",
    features: ["Personal Locker", "Audio Jack", "CCTV Secured"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800"
  },
  {
    id: 10,
    name: "Tata Garud Executive Cruiser",
    category: "sleeper",
    route: "Hyderabad ⇄ Visakhapatnam",
    price: "₹1,800",
    tag: "Comfort Line",
    features: ["Panoramic Windows", "Emergency Response", "Hot Tea/Coffee"],
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800"
  }
];

// Render Buses to Grid
const busGrid = document.getElementById("busGrid");

function renderBuses(filter = "all") {
  busGrid.innerHTML = "";
  const filtered = filter === "all" ? luxuryBuses : luxuryBuses.filter(b => b.category === filter);

  filtered.forEach(bus => {
    const card = document.createElement("div");
    card.className = "bus-card";
    card.innerHTML = `
      <div class="bus-img-box">
        <img src="${bus.image}" alt="${bus.name}">
        <span class="tag-badge">${bus.tag}</span>
      </div>
      <div class="bus-details">
        <h3>${bus.name}</h3>
        <p class="route-info"><i class="fa-solid fa-route"></i> ${bus.route}</p>
        <div class="bus-features-tags">
          ${bus.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
        </div>
        <div class="card-footer">
          <div class="price">
            <span>Starting from</span>
            <strong>${bus.price}</strong>
          </div>
          <button class="btn-primary" onclick="openBooking('${bus.name}', '${bus.route}')">Book Seat</button>
        </div>
      </div>
    `;
    busGrid.appendChild(card);
  });
}

// Filter Functionality
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderBuses(btn.dataset.filter);
  });
});

// Modal Logic
const modal = document.getElementById("bookingModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalBusTitle");
const modalSubtitle = document.getElementById("modalBusSubtitle");

function openBooking(busName, route) {
  modalTitle.textContent = busName;
  modalSubtitle.textContent = route;
  modal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("🎉 Booking Request Received! Our VIP Concierge will call you shortly.");
  modal.style.display = "none";
});

// Initialize Grid
renderBuses();