// Centralized WhatsApp logic
console.log("main.js loaded");
const WHATSAPP_NUMBER = "2347089670306";

// Build WhatsApp URL
function buildWhatsappURL(phone, message = "") {
  const baseURL = "https://wa.me/";
  const encodedMessage = encodeURIComponent(message.trim());
  return encodedMessage
    ? `${baseURL}${phone}?text=${encodedMessage}`
    : `${baseURL}${phone}`;
}

// Attach WhatsApp links to CTA buttons
function attachWhatsappLinks() {
  const ctas = document.querySelectorAll(".whatsapp-cta");
  if (!ctas.length) return;

  ctas.forEach((cta) => {
    const customMessage =
      cta.getAttribute("data-message") ||
      "Hello, I would like to inquire about your services.";
    const whatsappURL = buildWhatsappURL(WHATSAPP_NUMBER, customMessage);
    cta.setAttribute("href", whatsappURL);
    cta.setAttribute("target", "_blank");
    cta.setAttribute("rel", "noopener noreferrer");
  });
}

// Mobile menu toggle
function setupMobileMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}
