// Get elements
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const iconPath1 = document.getElementById('icon-path-1');
const iconPath2 = document.getElementById('icon-path-2');
const iconPath3 = document.getElementById('icon-path-3');
const navLinks = document.querySelectorAll('#mobile-menu a');

// Toggle menu visibility
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden'); // Show or hide the mobile menu

  // Animate hamburger icon to 'X' on open and reset on close
  if (mobileMenu.classList.contains('hidden')) {
    // Close the menu - Reset icon
    iconPath1.style.transform = 'rotate(0)';
    iconPath2.style.opacity = '1';
    iconPath3.style.transform = 'rotate(0)';
  } else {
    // Open the menu - Change icon to 'X'
    // Open the menu - Change icon to 'X'
iconPath1.style.transform = 'rotate(39deg)';
iconPath1.style.transformOrigin = 'center'; // Ensure rotation happens from the center
iconPath1.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition for rotation

iconPath2.style.opacity = '0';
iconPath2.style.transition = 'opacity 0.3s ease-in-out'; // Smooth transition for fading

iconPath3.style.transform = 'rotate(-39deg)';
iconPath3.style.transformOrigin = 'center'; // Ensure rotation happens from the center
iconPath3.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition for rotation

  }
});

// Hide mobile menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden'); // Hide the mobile menu after navigation
    // Reset the hamburger icon to the original state
    iconPath1.style.transform = 'rotate(0)';
    iconPath2.style.opacity = '1';
    iconPath3.style.transform = 'rotate(0)';
  });
});



// Example: Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


function sendemail(){

  var email=document.getElementById("email").value;
  var name=document.getElementById("name").value;
  var from_name=document.getElementById("name").value;
  var message=document.getElementById("message").value;
  
  var templateParams = {
    from_name : from_name,
        email: email,
        name: name,
    message: message
      };
  
      emailjs.send('service_ymx2u0s', 'template_crse832', templateParams)
    .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     window.alert("Message Sent successfully!");
     
  })  
  }
    


// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  },
  { threshold: 0.1 }
);

// Observe all animated elements in the competencies section
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-up');
  animatedElements.forEach(el => observer.observe(el));
});











// Function to handle scroll animation triggering
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.fade-up'); // Select all elements with the fade-up class

  elements.forEach(element => {
    const rect = element.getBoundingClientRect(); // Get the element's position relative to the viewport
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight; // Check if the element is within the viewport

    if (isVisible && !element.classList.contains('animate-in')) {
      element.classList.add('animate-in'); // Add the animate-in class to trigger the animation
    }
  });
}

// Call the handleScrollAnimation function on scroll and load events
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Run once to handle initial loading
handleScrollAnimation();












function showSection(section) {
  // Hide all sections
  document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
  
  // Show the clicked section
  document.getElementById(section).style.display = 'block';

  // Update button active state
  document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('active');
  });
  document.getElementById(section + '-btn').classList.add('active');
}

// Initialize default visible section (Internships)
document.addEventListener('DOMContentLoaded', () => {
  showSection('internships');
});












