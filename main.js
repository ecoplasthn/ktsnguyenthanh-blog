/* ==========================================================
   MAIN.JS - SCRIPT NẠP COMPONENT TỰ ĐỘNG
   ========================================================== */

document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Tự động nạp Header
  const headerElem = document.getElementById('site-header');
  if (headerElem) {
    fetch('/header.html')
      .then(res => res.text())
      .then(html => headerElem.innerHTML = html)
      .catch(err => console.error('Lỗi nạp header.html:', err));
  }

  // 2. Tự động nạp Footer
  const footerElem = document.getElementById('site-footer');
  if (footerElem) {
    fetch('/footer.html')
      .then(res => res.text())
      .then(html => footerElem.innerHTML = html)
      .catch(err => console.error('Lỗi nạp footer.html:', err));
  }

  // 3. Tự động nạp Khối Tác Giả
  const authorElem = document.getElementById('site-author');
  if (authorElem) {
    fetch('/author-box.html')
      .then(res => res.text())
      .then(html => authorElem.innerHTML = html)
      .catch(err => console.error('Lỗi nạp author-box.html:', err));
  }

  // 4. Tự động nạp Nút Liên Hệ Floating CTA
  const ctaElem = document.getElementById('site-cta');
  if (ctaElem) {
    fetch('/cta-buttons.html')
      .then(res => res.text())
      .then(html => ctaElem.innerHTML = html)
      .catch(err => console.error('Lỗi nạp cta-buttons.html:', err));
  }

});
