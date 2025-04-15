document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const closeModal = document.getElementById('closeModal');
  const videoThumbnails = document.querySelectorAll('.video-thumbnail');

  let touchStartTime = 0;

  videoThumbnails.forEach(thumbnail => {
    // Sur mobile, stocker le début du toucher
    thumbnail.addEventListener('touchstart', () => {
      touchStartTime = Date.now();
    });

    // Fin du toucher
    thumbnail.addEventListener('touchend', function () {
      const touchDuration = Date.now() - touchStartTime;
      if (touchDuration > 100 && touchDuration < 400) {
        openModal(this.getAttribute('data-video-src'));
      }
    });

    // Sur desktop
    thumbnail.addEventListener('click', function () {
      openModal(this.getAttribute('data-video-src'));
    });
  });

  function openModal(videoSrc) {
    modalVideo.src = videoSrc;
    modal.classList.remove('hidden');
    modalVideo.play();
  }

  closeModal.addEventListener('click', () => {
    closeVideo();
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeVideo();
    }
  });

  function closeVideo() {
    modal.classList.add('hidden');
    modalVideo.pause();
    modalVideo.src = '';
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