const homepage = document.querySelector(".home-page");
const resume_page = document.querySelector(".resume-page");
const contact_page = document.querySelector(".contact-page");
const skill_page = document.querySelector(".skill-page");
const project_page = document.querySelector(".project-page");
const site_menu = document.querySelector("#site-main-menu");
const toggle = document.querySelectorAll(".toggle");
const dropdown = document.querySelectorAll(".dropdown");
const more = document.querySelector(".read-more");
const more_project = document.querySelector(".more-project");

const home = () => {
  homepage.style.display = "block";
  resume_page.style.display = "none";
  contact_page.style.display = "none";
  skill_page.style.display = "none";
  project_page.style.display = "none";
};

const resume = () => {
  homepage.style.display = "none";
  resume_page.style.display = "block";
  contact_page.style.display = "none";
  skill_page.style.display = "none";
  project_page.style.display = "none";
};

const contact = () => {
  homepage.style.display = "none";
  resume_page.style.display = "none";
  contact_page.style.display = "block";
  skill_page.style.display = "none";
  project_page.style.display = "none";
};

const skill = () => {
  homepage.style.display = "none";
  resume_page.style.display = "none";
  contact_page.style.display = "none";
  skill_page.style.display = "block";
  project_page.style.display = "none";
};

const mobile = () => {
  if (site_menu.className === "site-main-menu") {
    site_menu.className += " responsive";
  } else {
    site_menu.className = "site-main-menu";
  }
};

const project = () => {
  homepage.style.display = "none";
  resume_page.style.display = "none";
  contact_page.style.display = "none";
  skill_page.style.display = "none";
  project_page.style.display = "block";
};

const toggling = () => {
  for (var i = 0; i < toggle.length; i += 1) {
    toggle[i].style.display = "block";
  }
  more.style.display = "none";
};

const read_more = () => {
  for (var i = 0; i < dropdown.length; i += 1) {
    dropdown[i].style.display = "block";
  }
  more_project.style.display = "none";
};


document.querySelector(".send-message").addEventListener('click', function(){
  Swal.fire(
    'This is a fake form!',
    'Please contact me via e-mail',
    'success'
  )
});

