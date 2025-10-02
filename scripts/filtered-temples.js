const temples = [
  {
    name: "Washington",
    location: "USA",
    year: 1974,
    size: 160000,
    image: "images/temples/washington-temple.webp",
  },
  {
    name: "Quetzaltenango",
    location: "Guatemala",
    year: 2011,
    size: 160000,
    image: "images/temples/quetzaltenango-temple.webp",
  },
  {
    name: "Fiji",
    location: "Fiji",
    year: 2000,
    size: 18000,
    image: "images/temples/fiji-temple.webp",
  },
  {
    name: "Colorado",
    location: "USA",
    year: 1986,
    size: 29300,
    image: "images/temples/colorado-temple.webp",
  },
  {
    name: "Australia",
    location: "Australia",
    year: 1984,
    size: 48200,
    image: "images/temples/australia.webp",
  },
  {
    name: "Hamilton",
    location: "New Zealand",
    year: 1958,
    size: 44000,
    image: "images/temples/hamilton.webp",
  },
  {
    name: "Salt Lake",
    location: "USA",
    year: 1893,
    size: 253000,
    image: "images/temples/salt-lake.webp",
  },
  {
    name: "London",
    location: "England",
    year: 1958,
    size: 42000,
    image: "images/temples/london-england.webp",
  },
  {
    name: "South Africa",
    location: "South Africa",
    year: 1985,
    size: 19000,
    image: "images/temples/south-africa-temple.webp",
  },
];

function renderTemples(list) {
  const container = document.getElementById("templeGallery");
  container.innerHTML = "";

  list.forEach((temple) => {
    const fig = document.createElement("figure");
    fig.innerHTML = `
        <img src="${temple.image}" alt="${temple.name} Temple">
        <figcaption>
            <div class="name">${temple.name}</div>
            <div class="location-year">${temple.location} | ${temple.year}</div>
            <div class="size">${temple.size.toLocaleString()} sq ft</div>
        </figcaption>
        `;

    container.appendChild(fig);
  });
}

const h2 = document.querySelector('main h2');

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.dataset.filter;
    let filtered = [...temples];

    switch (filter) {
      case "old":
        filtered.sort((a, b) => a.year - b.year);
        h2.textContent = "Old Temples";
        break;
      case "new":
        filtered.sort((a, b) => b.year - a.year);
        h2.textContent = "New Temples";
        break;
      case "large":
        filtered.sort((a, b) => b.size - a.size);
        h2.textContent = "Large Temples";
        break;
      case "small":
        filtered.sort((a, b) => a.size - b.size);
        h2.textContent = "Small Temples";
        break;
      default:
        filtered = [...temples];
        h2.textContent = "Home";
    }

    renderTemples(filtered);
  });
});

document.getElementById("hamburger").addEventListener("click", () => {
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.dataset.filter;
    let filtered = [...temples];

    switch (filter) {
      case "old":
        filtered.sort((a, b) => a.year - b.year);
        break;
      case "new":
        filtered.sort((a, b) => b.year - a.year);
        break;
      case "large":
        filtered.sort((a, b) => b.size - a.size);
        break;
      case "small":
        filtered.sort((a, b) => a.size - b.size);
        break;
      default:
        filtered = [...temples];
    }

    renderTemples(filtered);
  });
});

// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

renderTemples(temples);
