const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const aboutMeButton = document.getElementById('about-me-button')
const projectsButton = document.getElementById('projects-button')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

function scrollToAboutMe(){
    document.getElementById('about-me').scrollIntoView({
        behavior: 'smooth'
      });
}

aboutMeButton.addEventListener('click', scrollToAboutMe)

function scrollToProjects(){
    document.getElementById('projects').scrollIntoView({
        behavior: 'smooth'
      });
}

projectsButton.addEventListener('click', scrollToProjects)
