const homepage = document.querySelector('.home-page');
const resume_page = document.querySelector('.resume-page');
const contact_page = document.querySelector('.contact-page');
const skill_page = document.querySelector('.skill-page');
const project_page = document.querySelector('.project-page');
const site_menu = document.querySelector('#site-main-menu');



const home = () => {
    homepage.style.display = "block";
    resume_page.style.display = "none";
    contact_page.style.display = "none";
    skill_page.style.display = "none"; 
    project_page.style.display = "none";
}

const resume = () => {
    homepage.style.display = "none";
    resume_page.style.display = "block";
    contact_page.style.display = "none";
    skill_page.style.display = "none";
    project_page.style.display = "none";
}

const contact = () => {
    homepage.style.display = "none";
    resume_page.style.display = "none";
    contact_page.style.display = "block";
    skill_page.style.display = "none";
    project_page.style.display = "none";
}

const skill = () => {
    homepage.style.display = "none";
    resume_page.style.display = "none";
    contact_page.style.display = "none";
    skill_page.style.display = "block";
    project_page.style.display = "none";

}

const mobile = () => {
    if (site_menu.className === "site-main-menu") {
      site_menu.className += " responsive";
    } else {
      site_menu.className = "site-main-menu";
    }
}


const project = () => {
    homepage.style.display = "none";
    resume_page.style.display = "none";
    contact_page.style.display = "none";
    skill_page.style.display = "none";
    project_page.style.display = "block";
}