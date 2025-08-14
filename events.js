const whyPoints = document.querySelectorAll('.why-point');
const mainImage = document.getElementById('main-why-us-image');
const mainContainer = document.getElementById('whyUsMainContainer');

let currentIndex = 0;

// Function to update image and selection
function updateWhyUs(index) {
  const point = whyPoints[index];
  const newImageSrc = point.getAttribute('data-image');

  if (newImageSrc && mainImage) {
    mainImage.style.opacity = 0;
    setTimeout(() => {
      mainImage.setAttribute('src', newImageSrc);
      mainImage.style.opacity = 1;

      // Restart animation
      mainContainer.classList.remove('scaling-div');
      void mainContainer.offsetWidth;
      mainContainer.classList.add('scaling-div');
    }, 150);
  }

  whyPoints.forEach(p => p.classList.remove('selected'));
  point.classList.add('selected');
}

// Click listeners
whyPoints.forEach((point, index) => {
  point.addEventListener('click', () => {
    currentIndex = index; // Update current index
    updateWhyUs(currentIndex);
  });
});

// Highlight and set first image on load
window.addEventListener('DOMContentLoaded', () => {
  updateWhyUs(currentIndex);

  // Start auto-rotation
  setInterval(() => {
    currentIndex = (currentIndex + 1) % whyPoints.length;
    updateWhyUs(currentIndex);
  }, 2000); // 3 seconds
});

  const eventImages = document.querySelectorAll('.event-tile img');
  let currentImage = 0;

  function applyFilter() {
    // Remove 'filtered' from all images
    eventImages.forEach(img => img.classList.remove('filtered'));

    // Apply 'filtered' to the current image
    eventImages[currentImage].classList.add('filtered');

    // Move to next index
    currentImage = (currentImage + 1) % eventImages.length;
  }

  window.addEventListener('DOMContentLoaded', () => {
    // Start the filter cycle
    applyFilter();
    setInterval(applyFilter, 2000);
  });
  
const servicesData = [
  {
    id: "dj",
    title: "DJ",
    description:
      "Our professional DJ services are tailored to elevate every event—from intimate gatherings to large-scale celebrations. We offer personalized music curation across genres including Bollywood, Punjabi, EDM, Hip-Hop, and Top 40, using high-end DJ consoles and audio equipment. Our DJs are skilled in reading the crowd, adjusting tempo, and delivering seamless transitions to keep the energy high and the dance floor packed. From bride and groom entries to late-night parties, we provide the soundtrack for unforgettable moments.",
    img: "./resources/services-detail/dj.webp",
  },
  {
    id: "led",
    title: "LED SCREEN",
    description:
      "Our high-definition LED screens provide vibrant, dynamic visuals that enhance any event atmosphere. Ideal for live video streaming, event backdrops, branding, or multimedia presentations, our screens are customizable in size and layout. Whether used for weddings, concerts, or corporate events, we ensure crisp image quality and full-service setup. Our technical team handles everything from installation to live display management, ensuring smooth visuals throughout your event.",
    img: "./resources/services-detail/led.webp",
  },
  {
    id: "lighting",
    title: "LIGHTING",
    description:
      "Our advanced event lighting solutions are designed to transform your venue and create immersive environments. From ambient lighting for elegant receptions to synchronized stage effects for performances, we use a range of intelligent lighting systems including moving heads, uplights, lasers, and custom RGB LEDs. Our lighting design is customized to match your theme and coordinated with your event flow and music. Installation and on-site operation are handled by experienced technicians for a flawless visual experience.",
    img: "./resources/services-detail/lighting.webp",
  },
  {
    id: "sound",
    title: "SOUND SYSTEM",
    description:
      "Crystal-clear audio is essential for a successful event, and our professional sound system rentals ensure powerful, distortion-free sound throughout any space. We provide complete audio solutions including line-array speakers, subwoofers, wireless microphones, mixers, and monitors. Whether it's speeches, DJ sets, live music, or cultural performances, our sound systems are configured to match your venue's acoustics and audience size. On-site audio engineers manage sound checks and live mixing for smooth execution.",
    img: "./resources/services-detail/sound-system.webp",
  },
  {
    id: "dance",
title: "MALWAI GIDHA PERFORMANCES",
description:"Bring the rustic charm and unmatched energy of Punjab to your celebration with our Malwai Gidha performances. Known for its vibrant rhythm, witty boliyan, and lively traditional moves, Malwai Gidha adds a touch of cultural authenticity to weddings, receptions, cultural festivals, and corporate events. Our seasoned performers capture the true spirit of this folk dance—complete with colorful attire, synchronized choreography, and engaging stage presence. We also offer personalized boliyan for the bride, groom, or special guests, making every performance a heartfelt and unforgettable experience.",
    img: "./resources/services-detail/malwai-gidha.webp",
  },
  {
    id: "jaago-night",
    title: "Jaago Night",
    description:
      "Jaago Night by RPD Events is our signature all-night celebration that keeps the vibe alive till sunrise. With non-stop music, dazzling lights, and a crowd that refuses to slow down, it’s where unforgettable memories are made. When the city sleeps, we turn up the energy and own the night.",
    img: "./resources/services-detail/jaago-night.webp",
  },
  {
    id: "brass",
    title: "BRASS BAND",
    description:
      "Make a bold, traditional statement with our live brass band—perfect for baraat processions, religious ceremonies, cultural parades, or festive entrances. Our ensemble of skilled musicians delivers lively tunes from classic Indian wedding songs to upbeat Bollywood anthems. Dressed in ceremonial uniforms and trained in choreographed formations, our band brings unmatched energy and authenticity to your event. Optional services include dhol accompaniment and LED instruments for a modern twist.",
    img: "./resources/services-detail/brass-band.webp",
  },
  {
     id: "dhol",
    title: "DHOL SERVICES",
   description:"Ignite the spirit of your celebration with our powerful live Dhol performances—perfect for weddings, baraat processions, cultural events, and high-energy entrances. Our skilled Dhol players combine traditional Punjabi rhythms with modern beats, creating an irresistible sound that gets everyone moving. Whether you want a grand solo entry, synchronized group performance, or accompaniment with other musicians, we tailor every beat to match the mood of your event. Optional fusion with brass band, DJ, or LED Dhols adds a unique, unforgettable touch.",  
   img: "./resources/services-detail/dhol.webp",
  }
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
      <div class="service-slide" id="${id}">
        <img src="${img}" alt="${title}" />
        <h2>${title}</h2>
       
        <p>${description}</p>
      </div>
    `;
    wrapper.appendChild(slide);
  });

window.addEventListener("load", () => {
  const swiper = new Swiper("#servicesCarousel", {
    loop: false,
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