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

document.addEventListener('DOMContentLoaded', function () {
  const joinUs = document.querySelector('.shake-effect');
  let hasShaken = false; // to prevent repeated shaking

  window.addEventListener('scroll', function () {
    const rect = joinUs.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !hasShaken) {
      joinUs.classList.add('shake');
      hasShaken = true;

      // Optional: remove class after animation ends if you want it reusable
      setTimeout(() => {
        joinUs.classList.remove('shake');
      }, 500);
    }
  });
});
 document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".go-to-contact").forEach(button => {
      button.addEventListener("click", () => {
        window.location.href = "/contact.html";
      });
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  const topImg = document.querySelector(".hero-img-top");
  const bottomImg = document.querySelector(".hero-img-bottom");

  setTimeout(() => {
    topImg.classList.add("show");
    bottomImg.classList.add("show");
  }, 2000); // Show after 1 second
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


  

const servicesData = [
  {
    id: "dj",
    title: "DJ",
    description:
      "Our professional DJ services are tailored to elevate every event—from intimate gatherings to large-scale celebrations. We offer personalized music curation across genres including Bollywood, Punjabi, EDM, Hip-Hop, and Top 40, using high-end DJ consoles and audio equipment. Our DJs are skilled in reading the crowd, adjusting tempo, and delivering seamless transitions to keep the energy high and the dance floor packed. From bride and groom entries to late-night parties, we provide the soundtrack for unforgettable moments.",
    img: "https://images.unsplash.com/photo-1541845157-a6d2d100c931?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "led",
    title: "LED SCREEN",
    description:
      "Our high-definition LED screens provide vibrant, dynamic visuals that enhance any event atmosphere. Ideal for live video streaming, event backdrops, branding, or multimedia presentations, our screens are customizable in size and layout. Whether used for weddings, concerts, or corporate events, we ensure crisp image quality and full-service setup. Our technical team handles everything from installation to live display management, ensuring smooth visuals throughout your event.",
    img: "https://images.unsplash.com/photo-1588282322673-c31965a75c3e?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "lighting",
    title: "LIGHTING",
    description:
      "Our advanced event lighting solutions are designed to transform your venue and create immersive environments. From ambient lighting for elegant receptions to synchronized stage effects for performances, we use a range of intelligent lighting systems including moving heads, uplights, lasers, and custom RGB LEDs. Our lighting design is customized to match your theme and coordinated with your event flow and music. Installation and on-site operation are handled by experienced technicians for a flawless visual experience.",
    img: "https://images.unsplash.com/photo-1588117472013-59bb13edafec?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "sound",
    title: "SOUND SYSTEM",
    description:
      "Crystal-clear audio is essential for a successful event, and our professional sound system rentals ensure powerful, distortion-free sound throughout any space. We provide complete audio solutions including line-array speakers, subwoofers, wireless microphones, mixers, and monitors. Whether it's speeches, DJ sets, live music, or cultural performances, our sound systems are configured to match your venue's acoustics and audience size. On-site audio engineers manage sound checks and live mixing for smooth execution.",
    img: "https://images.unsplash.com/photo-1587588354456-ae376af71a25?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "dance",
    title: "DANCE PERFORMANCES",
    description:
      "Elevate your celebration with vibrant, high-energy dance performances that blend cultural tradition with modern choreography. Our dancers specialize in Punjabi Bhangra, Gidha, Bollywood fusion, and custom routines tailored for weddings, receptions, corporate shows, and special events. Each performance is professionally choreographed, synchronized with music, and designed to captivate and energize your guests. We also offer personalized entries for the bride, groom, or special guests for an unforgettable moment on stage.",
    img: "https://images.unsplash.com/photo-1558980663-3685c1d673c4?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "photography",
    title: "PHOTOGRAPHY",
    description:
      "Our photography and videography services capture every unforgettable moment with clarity, creativity, and storytelling finesse. From candid emotions to cinematic wedding films, we cover events with a journalistic eye and professional-grade equipment. Services include pre-event shoots, drone coverage, highlight reels, photo booths, and next-day edits. Whether you want traditional portraits, slow-motion footage, or modern reels for social media, we deliver polished memories that last a lifetime.",
    img: "https://images.unsplash.com/photo-1588499756884-d72584d84df5?auto=format&fit=crop&w=600&q=60",
  },
  {
    id: "brass",
    title: "BRASS BAND",
    description:
      "Make a bold, traditional statement with our live brass band—perfect for baraat processions, religious ceremonies, cultural parades, or festive entrances. Our ensemble of skilled musicians delivers lively tunes from classic Indian wedding songs to upbeat Bollywood anthems. Dressed in ceremonial uniforms and trained in choreographed formations, our band brings unmatched energy and authenticity to your event. Optional services include dhol accompaniment and LED instruments for a modern twist.",
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
        <div class="underline"></div>
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

  if (document.body.classList.contains("contact-page")) {

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

}




if (document.body.classList.contains("home-page")) {

//   document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     document.querySelector(".left-animate").classList.add("show");
//   }, 2000); 
// });

const testimonialsData = [
  {
    "name": "Himani Thakur",
    "role": "34 reviews",
    "time": "3 years ago",
    "text": "I have learnt bhangra from here and they not only teach bhangra but also polish the skills out of a person. It's pretty disciplined place where everybody focus on their hard work and sincerity to learn bhangra.",
    "likes": "🙏"
  },
  {
    "name": "Gurjit Virk",
    "role": "1 review",
    "time": "2 years ago",
    "text": "RPD bhangra academy is one of the best academy, my kids are doing great in bhangra only because of the best coaching skills they get taught by the fantastic coach",
    "likes": "❤️"
  },
  {
    "name": "Ekjot Sarang",
    "role": "2 reviews",
    "time": "3 years ago",
    "text": "Not good I used to go there and the owner is really unprofessional, unorganized, occasionally hits older students \"as a joke\" and doesn't account for students mental health",
    "likes": "🙏1"
  },
  {
    "name": "Sukh Toor Dhaliwal",
    "role": "2 reviews",
    "time": "6 years ago",
    "text": "Hi the teacher here at this academy has so much discipline in him and does so much hard work",
    "likes": "🙏❤️4"
  },
  {
    "name": "Mehtab Brahm",
    "role": "5 reviews",
    "time": "6 years ago",
    "text": "Learn from the best! Great coach!",
    "likes": "🙏2"
  },
  {
    "name": "Tanvir Johal",
    "role": "7 reviews",
    "time": "6 years ago",
    "text": "AMAZING BHANGRA ACADEMY! LEARN THE BEST FROM THE BEST!",
    "likes": "🙏1"
  },
  {
    "name": "Esha Bedi",
    "role": "4 reviews",
    "time": "5 years ago",
    "text": "This place is amazing on how they teach step by step",
    "likes": "🙏1"
  },
  {
    "name": "Amneesh Singh",
    "role": "5 reviews",
    "time": "1 year ago",
    "text": "RPD Events truly transformed our wedding! Their professionalism and energy were unmatched.",
    "likes": "🌟5"
  }
]

const colors = [
  '#6c5ce7', '#00b894', '#d63031', '#0984e3', '#fd79a8',
  '#e17055', '#00cec9', '#2d3436'
];

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

function truncateWords(str, limit) {
  const words = str.split(' ');
  if (words.length <= limit) return str;
  return words.slice(0, limit).join(' ') + '...';
}


// Create testimonial divs dynamically
const track = document.getElementById('track');
  track.innerHTML = ''; // Clear if needed

 testimonialsData.forEach(test => {
  const firstLetter = test.name.charAt(0).toUpperCase();
  const colorIndex = firstLetter.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];

  const testimonialHTML = `
   
     <div class="testimonial-card flex flex-col justify-between items-center">
        <div class="t-card-header flex flex-row justify-between items-center gap-2">
          <div class="avatar" style="background-color: ${bgColor};">${firstLetter}</div>
          <h4>${test.name}</h4>
        </div>
        <div class="t-card-body">
        <p>${truncateWords(test.text, 10)}</p>
        </div>
        <div class="t-card-footer flex flex-row justify-between items-center">
         <img src="./resources/google-logo.png" class="google-logo" alt="">
          <p> ${test.role}</p>
        </div>
      </div>
    
  `;

  // Create a container and set innerHTML to safely parse the string into DOM elements
  const wrapper = document.createElement('div');
  wrapper.innerHTML = testimonialHTML;

  // Append the parsed element to the track
  track.appendChild(wrapper.firstElementChild);
});


if (track) {
  const cards = track.querySelectorAll('.testimonial-card');
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




