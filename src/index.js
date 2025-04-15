  // Sélectionne les éléments nécessaires
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const closeModal = document.getElementById('closeModal');
  const videoThumbnails = document.querySelectorAll('.video-thumbnail');

  // Ajoute un événement pour ouvrir la modal
  // Variable pour éviter les clics involontaires
let tapTimer = null;

videoThumbnails.forEach(thumbnail => {
  // Pour mobile (tap)
  thumbnail.addEventListener('touchend', function () {
    if (tapTimer) {
      clearTimeout(tapTimer);
      tapTimer = null;
    }

    tapTimer = setTimeout(() => {
      const videoSrc = this.getAttribute('data-video-src');
      modalVideo.src = videoSrc;
      modal.classList.remove('hidden');
    }, 100); // 100ms pour éviter déclenchement trop rapide
  });

  // Pour desktop (click)
  thumbnail.addEventListener('click', function () {
    const videoSrc = this.getAttribute('data-video-src');
    modalVideo.src = videoSrc;
    modal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalVideo.pause();
  modalVideo.src = '';
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal.click();
  }
});

  // Ajoute un événement pour fermer la modal
  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden'); // Cache la modal
    modalVideo.pause(); // Met la vidéo en pause
    modalVideo.src = ''; // Vide la source pour arrêter complètement la vidéo
  });

  // Ferme la modal en cliquant en dehors du contenu
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal.click();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const anchors = document.querySelectorAll("[data-scroll-to]");
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault(); // Empêcher le comportement par défaut
        const targetId = anchor.getAttribute("data-scroll-to");
        const target = document.getElementById(targetId);
        if (target) {
          const offset = -71.5; // Ajuste cette valeur selon la hauteur désirée (en pixels)
          const top = target.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
    });
  });