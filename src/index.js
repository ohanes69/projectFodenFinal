  // Sélectionne les éléments nécessaires
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const closeModal = document.getElementById('closeModal');
  const videoThumbnails = document.querySelectorAll('.video-thumbnail');

  // Ajoute un événement pour ouvrir la modal
  videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
      const videoSrc = this.getAttribute('data-video-src'); // Récupère l'URL de la vidéo
      modalVideo.src = videoSrc; // Charge la vidéo dans la modal
      modal.classList.remove('hidden'); // Affiche la modal
    });
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