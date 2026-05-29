// PPT Controller - manages slide navigation
const slideDataMap = new Map();
window.slideDataMap = slideDataMap;

let currentSlide = 1;
let totalSlides = 0;

function initController() {
  // Count slides
  for (let i = 1; i <= 30; i++) {
    if (slideDataMap.has(i)) {
      totalSlides = i;
    } else {
      break;
    }
  }

  if (totalSlides === 0) {
    document.getElementById('root').innerHTML = '<div style="color:white;text-align:center;padding:100px;">Loading slides...</div>';
    return;
  }

  renderSlide(currentSlide);
  renderNavigation();
}

function renderSlide(n) {
  const html = slideDataMap.get(n);
  if (!html) return;
  
  const root = document.getElementById('root');
  root.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;background:#000;">
      ${html}
    </div>
    <div id="nav-bar" style="position:fixed;bottom:20px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:16px;z-index:1000;">
      <button onclick="prevSlide()" style="padding:8px 20px;background:rgba(13,148,136,0.8);color:white;border:none;border-radius:4px;cursor:pointer;font-size:14px;">Prev</button>
      <span id="page-info" style="color:rgba(255,255,255,0.8);font-size:14px;font-family:monospace;">${n} / ${totalSlides}</span>
      <button onclick="nextSlide()" style="padding:8px 20px;background:rgba(13,148,136,0.8);color:white;border:none;border-radius:4px;cursor:pointer;font-size:14px;">Next</button>
    </div>
  `;
}

function renderNavigation() {
  // Already rendered in renderSlide
}

window.prevSlide = function() {
  if (currentSlide > 1) {
    currentSlide--;
    renderSlide(currentSlide);
  }
};

window.nextSlide = function() {
  if (currentSlide < totalSlides) {
    currentSlide++;
    renderSlide(currentSlide);
  }
};

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    window.prevSlide();
  } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
    window.nextSlide();
  }
});

export { initController, slideDataMap };
