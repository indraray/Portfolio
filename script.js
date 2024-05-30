function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const scrollButton = document.getElementById('scrollButton');
const scrollButton1 = document.getElementById('scrollButton1');

// Add an event listener for the click event
scrollButton.onclick = function() {
    // Scroll to the bottom of the page
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Smooth scrolling
    });
};

// Add an event listener for the click event
scrollButton1.onclick = function() {
    // Scroll to the bottom of the page
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Smooth scrolling
    });
};