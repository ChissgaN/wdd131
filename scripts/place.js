const lastModifiedEl = document.getElementById("lastModified");
lastModifiedEl.textContent = new Date()
    .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    })
    .replace(",", "");

const footerYearEls = document.querySelectorAll(".footer-content");
const currentYear = new Date().getFullYear();
footerYearEls.forEach(el => {
    el.innerHTML = el.innerHTML.replace("©2025", `©${currentYear}`);
});


const temperatureC = 12;
const windSpeedKmh = 10;

function calculateWindChill(T, V) {
    return 13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16);
}

const windChillEl = document.getElementById("windchill");

if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    const windChillValue = calculateWindChill(temperatureC, windSpeedKmh);
    windChillEl.textContent = `${windChillValue.toFixed(1)} °C`;
} else {
    windChillEl.textContent = "N/A";
}