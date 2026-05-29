import './styles/main.css';
import { initController } from './js/ppt-controller.js';

// Load all slides
const slideModules = import.meta.glob('./slides/slide-*.js');
const loadPromises = [];

for (let i = 1; i <= 19; i++) {
  const padded = String(i).padStart(2, '0');
  const path = `./slides/slide-${padded}.js`;
  if (slideModules[path]) {
    loadPromises.push(slideModules[path]());
  } else {
    // Try without padding
    const path2 = `./slides/slide-${i}.js`;
    if (slideModules[path2]) {
      loadPromises.push(slideModules[path2]());
    }
  }
}

Promise.all(loadPromises).then(() => {
  initController();
}).catch(err => {
  console.error('Failed to load slides:', err);
  document.getElementById('root').innerHTML = '<div style="color:white;text-align:center;padding:100px;">Error loading slides</div>';
});
