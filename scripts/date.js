let footer = document.getElementById("footer-content");
let updated = document.getElementById("lastModified");

const today = new Date();
const year = today.getFullYear();
const modified = new Date(document.lastModified);
const formatted = modified.toLocaleString();

footer.innerHTML = `Good Trouble Alliance | Springfield, IL |©️ ${year}`;
updated.innerHTML = `Last Update: ${formatted}`;
