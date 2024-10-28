// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('bg-dark', 'bg-opacity-90', 'backdrop-blur-md', 'shadow-lg');
  } else {
    header.classList.remove('bg-dark', 'bg-opacity-90', 'backdrop-blur-md', 'shadow-lg');
  }
});

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');

function openModal(element) {
  const title = element.querySelector('h3').textContent;
  const image = element.querySelector('img').src;
  const description = "Este projeto demonstra minha expertise em design digital, combinando criatividade e técnica para criar uma experiência visual única e impactante. Trabalhei em estreita colaboração com o cliente para garantir que cada detalhe refletisse sua visão e objetivos.";

  modalTitle.textContent = title;
  modalImage.src = image;
  modalImage.alt = title;
  modalDescription.textContent = description;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModal() {
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});