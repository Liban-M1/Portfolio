
// Intro video
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("fs-video");
    video.style.display = "block"; 
  
    setTimeout(function() {
      video.style.display = "none";
    }, 4200);
  });
  
// Typing effect
document.addEventListener("DOMContentLoaded", function() {
const heading = document.getElementById("typing-effect");
const text = "Welcome To My Portfolio!";
let index = 0;

function type() {
  if (index < text.length) {
    heading.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}


setTimeout(function() {
type();
 }, 4200);
});
  
  
  
  