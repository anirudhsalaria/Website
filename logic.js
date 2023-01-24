// JavaScript code to handle navigation
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const sectionId = e.target.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth"
    });
  });
});
document.getElementById("menu-btn").addEventListener("click", function() {
  document.getElementById("menu").classList.toggle("show");
});



// to handle form submission and validation
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    var name = document.querySelector("input[name='name']").value;
    var dob = document.querySelector("input[name='dob']").value;
    var email = document.querySelector("input[name='email']").value;
    var phone = document.querySelector("input[name='phone']").value;
    
    if (name && dob && email && phone) {
      console.log("Form data:", name, dob, email, phone);
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
  