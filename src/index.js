document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const closeModal = document.getElementById('closeModal');
  const videoThumbnails = document.querySelectorAll('.video-thumbnail');

  let touchStartTime = 0;
  let touchStartX = 0;
  let touchStartY = 0;

  videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('touchstart', (e) => {
      touchStartTime = Date.now();
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    });

    thumbnail.addEventListener('touchend', (e) => {
      const touchDuration = Date.now() - touchStartTime;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const moveX = Math.abs(touchEndX - touchStartX);
      const moveY = Math.abs(touchEndY - touchStartY);

      // On ouvre la modale uniquement si l'appui a duré moins de 200ms et s'il n'y a presque pas eu de mouvement
      if (touchDuration < 200 && moveX < 10 && moveY < 10) {
        const videoSrc = thumbnail.getAttribute('data-video-src');
        modalVideo.src = videoSrc;
        modal.classList.remove('hidden');
      }
    });

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