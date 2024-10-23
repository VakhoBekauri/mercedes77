
document.getElementById("carForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const selectedColor = document.getElementById("color").value;
  document.getElementById("carDisplay").style.backgroundColor = selectedColor;
});


let index = 0;
const testimonials = document.querySelectorAll(".testimonial");
const showTestimonial = () => {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? "block" : "none";
  });
};

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  showTestimonial();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial();
});

document.getElementById("showAll").addEventListener("click", () => {
  testimonials.forEach((testimonial) => {
    testimonial.style.display = "block";
  });
});

showTestimonial();


document.getElementById("learnMore").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
