const galleryData = [
    {
      thumb: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=60",
      full: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      alt: "DJ Party 1"
    },
    {
      thumb: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=60",
      full: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
      alt: "DJ Party 2"
    },
    {
      thumb: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=400&q=60",
      full: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=80",
      alt: "DJ Party 3"
    },
    {
        thumb: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=60",
        full: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        alt: "DJ Party 1"
      },
      {
        thumb: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=60",
        full: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        alt: "DJ Party 2"
      },
      {
        thumb: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=400&q=60",
        full: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=80",
        alt: "DJ Party 3"
      },
      {
        thumb: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=60",
        full: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        alt: "DJ Party 1"
      },
      {
        thumb: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=60",
        full: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        alt: "DJ Party 2"
      },
      {
        thumb: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=400&q=60",
        full: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=80",
        alt: "DJ Party 3"
      },
      {
        thumb: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=60",
        full: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        alt: "DJ Party 1"
      },
      {
        thumb: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=60",
        full: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        alt: "DJ Party 2"
      },
      {
        thumb: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=400&q=60",
        full: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1200&q=80",
        alt: "DJ Party 3"
      },
  ];
  
  const galleryContainer = document.getElementById('lightgallery');
  if(galleryContainer){
    galleryData.forEach(({ thumb, full, alt }) => {
        const link = document.createElement('a');
        link.href = full;
        
        const img = document.createElement('img');
        img.src = thumb;
        img.alt = alt;
      
        link.appendChild(img);
        galleryContainer.appendChild(link);
      });
  }

  
  // Initialize LightGallery AFTER images added to DOM
  lightGallery(galleryContainer, {
    selector: 'a',      // all <a> inside #gallery are gallery items
    download: true,
    thumbnail: true,
    zoom: true,
    fullscreen: true,
    autoplay: false,
    loop: true,
    speed: 500,
  });
  
  const toggleBtn = document.getElementById('toggleSocial');
const socialPopup = document.getElementById('socialPopup');

toggleBtn.addEventListener('click', () => {
  socialPopup.classList.toggle('hidden');
});


document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      current += increment;
      obj.textContent = current + ' +';
      if (current === end) clearInterval(timer);
    }, step);
  }

  let hasAnimated = false;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counter("count1", 0, 400, 3000);
        counter("count2", 100, 50, 2500);
        counter("count3", 0, 40, 3000);
        counter("count4", 0, 40, 3000);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.getElementById('counterSection'));
});



 const track = document.getElementById('track');
  const cards = track.querySelectorAll('.testimonial');
  let scrollX = 0;
  const speed = 1;

  function animateScroll() {
    scrollX += speed;
    if (scrollX >= track.scrollWidth / 2) {
      scrollX = 0;
    }
    track.style.transform = `translateX(${-scrollX}px)`;
    highlightCenterCard();
    requestAnimationFrame(animateScroll);
  }

  function highlightCenterCard() {
    const containerCenter = window.innerWidth / 2;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < rect.width / 2) {
        card.classList.add('focused');
      } else {
        card.classList.remove('focused');
      }
    });
  }

  animateScroll();












  