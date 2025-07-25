const toggleBtn1 = document.getElementById('menu-toggle');
const menu = document.getElementById('slide-menu');

toggleBtn1.addEventListener('click', () => {
  toggleBtn1.classList.toggle('open');
  menu.classList.toggle('open');
});

const toggleBtn = document.getElementById('toggleSocial');
const socialPopup = document.getElementById('socialPopup');

toggleBtn.addEventListener('click', () => {
  socialPopup.classList.toggle('hidden');
});


 if (document.body.classList.contains("gallery-page")) {

  const imageData = [
  { src: "http://unsplash.it/600?image=50", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=10", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=70", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=200", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=90", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=450", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=239", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=510", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=315", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=199", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=78", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=116", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=95", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=87", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=329", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=81", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=122", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=206", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=62", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=331", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=159", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=310", link: "https://www.instagram.com/CodePen/" },
  { src: "http://unsplash.it/600?image=77", link: "https://www.instagram.com/CodePen/" }
];



    const galleryContainer = document.getElementById("imageGrid");

imageData.forEach(({ src, link }) => {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  const anchor = document.createElement("a");
  anchor.href = link;
  anchor.target = "_blank";

  const img = document.createElement("img");
  img.src = src;
  img.alt = "Instagram Image";

  anchor.appendChild(img);
  gridItem.appendChild(anchor);
  galleryContainer.appendChild(gridItem);
});
  }
 if (document.body.classList.contains("event-page")) {


  const faqToggles = document.querySelectorAll(".faq-toggle");

  faqToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const parent = toggle.closest(".faq-card");
      parent.classList.toggle("active");

      // Close others (optional)
      faqToggles.forEach(other => {
        if (other !== toggle) {
          other.closest(".faq-card").classList.remove("active");
        }
      });
    });
  });


 const servicesData = [
    {
      id: "dj",
      title: "DJ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni fugiat molestias iure.",
      img: "https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: "led",
      title: "LED SCREEN",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni fugiat molestias iure.",
      img: "https://images.unsplash.com/photo-1588282322673-c31965a75c3e?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: "lighting",
      title: "LIGHTING",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni fugiat molestias iure.",
      img: "https://images.unsplash.com/photo-1588117472013-59bb13edafec?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: "sound",
      title: "SOUND SYSTEM",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni fugiat molestias iure.",
      img: "https://images.unsplash.com/photo-1587588354456-ae376af71a25?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: "dance",
      title: "DANCE PERFORMANCES",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni fugiat molestias iure.",
      img: "https://images.unsplash.com/photo-1558980663-3685c1d673c4?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: "photography",
      title: "PHOTOGRAPHY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni fugiat molestias iure.",
      img: "https://images.unsplash.com/photo-1588499756884-d72584d84df5?auto=format&fit=crop&w=600&q=60",
    },
    {
      id: "brass",
      title: "BRASS BAND",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor magni fugiat molestias iure.",
      img: "https://images.unsplash.com/photo-1588492885706-b8917f06df77?auto=format&fit=crop&w=600&q=60",
    },
  ];

  // Function to get URL query param by name
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Add slides dynamically to Swiper wrapper
  const wrapper = document.getElementById("swiperWrapper");
  servicesData.forEach(({ id, title, description, img }) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.innerHTML = `
      <div class="service-slide">
        <img src="${img}" alt="${title}" />
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
    `;
    wrapper.appendChild(slide);
  });

window.addEventListener("load", () => {
  const swiper = new Swiper("#servicesCarousel", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const selectedServiceId = getQueryParam("service");
  if (selectedServiceId) {
    const index = servicesData.findIndex((s) => s.id === selectedServiceId);
    if (index >= 0) {
      swiper.slideToLoop(index, 0); // jump to slide instantly
    }

    // Scroll to carousel section smoothly
    const carouselSection = document.getElementById("serviceDetails");
    if (carouselSection) {
      carouselSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});




  }




if (document.body.classList.contains("home-page")) {

  document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".dj-image-container").classList.add("show");
  }, 2000); 
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
       // counter("count4", 0, 40, 3000);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.getElementById('whoWeAre'));
});



 const track = document.getElementById('track');
if (track) {
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
}

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      const service = card.dataset.service;
      // Navigate to events.html with service query param
      window.location.href = `events.html?service=${service}`;
    });
  });




}




