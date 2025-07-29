const whyPoints = document.querySelectorAll('.why-point');
  const mainImage = document.getElementById('main-why-us-image');
  
  const mainContainer = document.getElementById('whyUsMainContainer');

  // Add click listeners
 whyPoints.forEach(point => {
  point.addEventListener('click', () => {
    const newImageSrc = point.getAttribute('data-image');
    if (newImageSrc && mainImage) {
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.setAttribute('src', newImageSrc);
        mainImage.style.opacity = 1;

        // Remove and re-add class to restart animation
        mainContainer.classList.remove('rotating-div');
        void mainContainer.offsetWidth;  // Trigger reflow
        mainContainer.classList.add('rotating-div');
      }, 150);
    }

    whyPoints.forEach(p => p.classList.remove('selected'));
    point.classList.add('selected');
  });
});

  // Highlight and set first image on load
  window.addEventListener('DOMContentLoaded', () => {
    const firstPoint = document.querySelector('.why-point');
    if (firstPoint) {
      const firstImage = firstPoint.getAttribute('data-image');
      firstPoint.classList.add('selected');
      if (firstImage && mainImage) {
        mainImage.setAttribute('src', firstImage);
        mainImage.style.opacity = 1;
      }
    }
  });