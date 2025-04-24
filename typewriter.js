const text = "DUNG AN PORTFOLIO";
const typingElement = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingElement) return;

  // Gõ từng chữ
  if (!isDeleting && index <= text.length) {
    typingElement.textContent = text.slice(0, index++);
    setTimeout(typeEffect, 100);
  }
  // Xóa từng chữ
  else if (isDeleting && index >= 0) {
    typingElement.textContent = text.slice(0, index--);
    setTimeout(typeEffect, 60);
  }
  // Sau khi gõ xong, chuyển sang xóa
  else if (!isDeleting && index > text.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // đợi 1 giây rồi bắt đầu xóa
  }
  // Sau khi xóa xong, bắt đầu lại mà KHÔNG hiển nguyên dòng
  else if (isDeleting && index < 0) {
    isDeleting = false;
    index = 0;
    setTimeout(typeEffect, 500); // đợi 0.5s rồi gõ lại
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
