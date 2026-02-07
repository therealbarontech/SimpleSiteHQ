function loadPartial(selector, file, callback) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.querySelector(selector).innerHTML = data;
      if (callback) callback(); // run after loading
    })
    .catch((err) => console.error("partial load error", err));
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("#header", "partials/header.html", () => {
    // Attach WhatsApp links & mobile menu toggle AFTER header loads
    attachWhatsappLinks();
    setupMobileMenu();
  });
  loadPartial("#footer", "partials/footer.html");
});
