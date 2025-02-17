var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");
}

const menuLinks = document.querySelectorAll("#navbar a");

menuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    if (this.getAttribute("href").startsWith("#")) {
      event.preventDefault();
      menuLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("#about, #services, #contact");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});