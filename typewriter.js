const text = "DUNG AN PORTFOLIO";
const typingElement = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingElement) return;

  if (!isDeleting && index <= text.length) {
    typingElement.textContent = text.slice(0, index++);
    setTimeout(typeEffect, 100);
  }
  // Xóa từng chữ
  else if (isDeleting && index >= 0) {
    typingElement.textContent = text.slice(0, index--);
    setTimeout(typeEffect, 60);
  }
  else if (!isDeleting && index > text.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); 
  }
  else if (isDeleting && index < 0) {
    isDeleting = false;
    index = 0;
    setTimeout(typeEffect, 500); 
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
