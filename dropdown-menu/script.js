const projectButton = document.querySelector('.projects-btn');
const showProjectsList = () => {
  const projectsContainer = document.querySelector('.projects-container');
  projectsContainer.classList.toggle('show-projects-list');
};

projectButton.addEventListener('click', showProjectsList);
