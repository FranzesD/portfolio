const links = document.querySelectorAll('.nav a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const trailContainer = document.querySelector('.cursor-trail');

window.addEventListener('mousemove', event => {
  const dot = document.createElement('span');
  dot.className = 'trail-dot';
  dot.style.left = `${event.clientX}px`;
  dot.style.top = `${event.clientY}px`;
  trailContainer.appendChild(dot);

  requestAnimationFrame(() => {
    dot.style.transform = 'translate(-50%, -50%) scale(2.4)';
    dot.style.opacity = '0';
  });

  setTimeout(() => {
    dot.remove();
  }, 420);
});
