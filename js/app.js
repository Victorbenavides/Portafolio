particlesJS(
    {
        "particles": {
          "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#7e00a4" },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.5, "random": false },
          "size": { "value": 3, "random": true },
          "line_linked": { "enable": true, "distance": 150, "color": "#9b07c8", "opacity": 0.3, "width": 1 },
          "move": { "enable": true, "speed": 4 }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
          "modes": { "repulse": { "distance": 100, "duration": 0.4 } }
        },
        "retina_detect": true
      }
);

function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
  );
}

function handleBioScroll() {
  var bioSection = document.querySelector('.bio');
  if (isInViewport(bioSection)) {
    bioSection.classList.add('show');
  }
}

const scrollElements = document.querySelectorAll(".animate-on-scroll");

const handleProjectScroll = () => {
  scrollElements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add("is-visible");
    }
  });
};

window.addEventListener('scroll', () => {
    handleBioScroll();
    handleProjectScroll();
});

handleBioScroll();
handleProjectScroll();



const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("expandedImg");
const captionText = document.getElementById("modal-caption");
const closeBtn = document.getElementsByClassName("close-modal")[0];
const images = document.querySelectorAll('.clickable-image');

images.forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = "flex";     
        modal.style.flexDirection = "column"; 
        modal.style.alignItems = "center"; 
        modal.style.justifyContent = "center";
        
        modalImg.src = this.src;          
        captionText.innerHTML = this.alt; 
        document.body.style.overflow = "hidden"; 
    });
});

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}

closeBtn.onclick = function() { closeModal(); }

modal.onclick = function(event) {
    if (event.target === modal) { closeModal(); }
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && modal.style.display === "flex") { closeModal(); }
});