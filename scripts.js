
document.getElementById("home-link").addEventListener("click", function () {
  window.location.href = "/index.html";
});

document.getElementById("about-link").addEventListener("click", function () {
  window.location.href = "/pages/about/about.html";
});

document.getElementById("models-link").addEventListener("click", function () {
  window.location.href = "/pages/models/models.html";
});

document.getElementById("gallery-link").addEventListener("click", function () {
  window.location.href = "/pages/gallery/gallery.html";
});

document.getElementById("configurator").addEventListener("click", function () {
  window.location.href = "/pages/configurator/configurator.html";
});


document.getElementById("explore-car-btn").addEventListener("click", function () {
  window.location.href = "/pages/models/models.html";
});


document.getElementById("explore-car-btn").addEventListener("click", function () {
  window.location.href = "/pages/models/models.html"; 
});


document.querySelectorAll('nav ul li').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.id.replace('-link', '');
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});


document.getElementById("explore-car-btn").addEventListener("click", function () {
  window.location.href = "/pages/models/models.html"; 
});


document.getElementById("explore-car-btn").addEventListener("click", function () {
  window.location.href = "/pages/models/models.html";
});

document.getElementById("configurator-btn").addEventListener("click", function () {
  window.location.href = "/pages/configurator/configurator.html";
});

document.getElementById("newsletter-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email-input");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(emailInput.value)) {
      successMessage.style.display = "block";
      errorMessage.style.display = "none";
      emailInput.value = ""; 
  } else {
      errorMessage.style.display = "block";
      successMessage.style.display = "none";
  }
});


document.getElementById("home-link").addEventListener("click", function () {
  window.location.href = "/index.html";
});

document.getElementById("about-link").addEventListener("click", function () {
  window.location.href = "/pages/about/about.html";
});

document.getElementById("models-link").addEventListener("click", function () {
  window.location.href = "/pages/models/models.html";
});



document.getElementById("explore-models-btn").addEventListener("click", function () {
  window.location.href = "/pages/models/models.html"; 
});


