function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  

  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }


const modelLinks = document.querySelectorAll('.model-link');
const initialImage = document.querySelector('.hero-image.active');
const images = document.querySelectorAll('.hero-image');

initialImage.dataset.model = 'Cayman';

function switchImage(targetModel) {
  const activeImage = document.querySelector('.hero-image.active');
  const newImage = document.querySelector(`.hero-image[data-model="${targetModel}"]`);

  if (activeImage !== newImage) {
    activeImage.classList.remove('active');
    activeImage.style.opacity = 0;

    newImage.classList.add('active');
    newImage.style.opacity = 1;
  }

  modelLinks.forEach(link => {
    link.classList.remove('active');
  });

  const activeLink = document.querySelector(`.model-link[data-target="${targetModel}"]`);
  activeLink.classList.add('active');
}

modelLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    switchImage(link.dataset.target);
  });
});
