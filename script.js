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

//  const canvas = document.getElementById('banner');
//   const ctx = canvas.getContext('2d');
//   const width = canvas.width;
//   const height = canvas.height;

//   class LightBeam {
//     constructor(x, width, speed, color) {
//       this.x = x;
//       this.y = -200; // start above canvas
//       this.width = width;
//       this.speed = speed;
//       this.color = color;
//       this.height = 200;
//     }

//     update() {
//       this.y += this.speed;
//       if (this.y > height) {
//         this.y = -this.height;
//       }
//     }

//     draw(ctx) {
//       const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
//       gradient.addColorStop(0, this.color + '80'); // semi-transparent start
//       gradient.addColorStop(0.5, this.color + 'cc'); // brighter middle
//       gradient.addColorStop(1, this.color + '00'); // transparent end

//       ctx.fillStyle = gradient;
//       ctx.fillRect(this.x, this.y, this.width, this.height);
//     }
//   }

//   // Create an array of beams
//   const beams = [];
//   const colors = ['#FF69B4', '#800080']; // pink and purple hex colors

//   for(let i = 0; i < 12; i++) {
//     const x = i * 160 + Math.random() * 40; // spread beams horizontally with some randomness
//     const width = 20 + Math.random() * 10;
//     const speed = 1 + Math.random() * 1.5;
//     const color = colors[i % colors.length];
//     beams.push(new LightBeam(x, width, speed, color));
//   }

//   function animate() {
//     ctx.clearRect(0, 0, width, height);

//     // Draw black gradient background from bottom
//     const bgGradient = ctx.createLinearGradient(0, height, 0, 0);
//     bgGradient.addColorStop(0, 'black');
//     bgGradient.addColorStop(0.7, 'rgba(0,0,0,0)');
//     ctx.fillStyle = bgGradient;
//     ctx.fillRect(0, 0, width, height);

//     beams.forEach(beam => {
//       beam.update();
//       beam.draw(ctx);
//     });

//     requestAnimationFrame(animate);
//   }

//   animate();