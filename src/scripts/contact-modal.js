// src/scripts/contact-modal.js
export default function initContactModal() {
  const contactInfoBtn = document.getElementById('contact-info-btn');
  const contactModal = document.getElementById('contact-modal');

  if (contactInfoBtn && contactModal) {
    const closeButtonContact = contactModal.querySelector('.close-button');

    // Abrir modal
    contactInfoBtn.addEventListener('click', () => {
      contactModal.classList.remove('hidden');
    });

    // Cerrar con botón
    closeButtonContact.addEventListener('click', () => {
      contactModal.classList.add('hidden');
    });

    // Cerrar clickeando fuera del modal
    window.addEventListener('click', (event) => {
      if (event.target === contactModal) {
        contactModal.classList.add('hidden');
      }
    });
  }
}
