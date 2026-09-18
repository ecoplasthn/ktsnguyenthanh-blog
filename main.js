// Hàm nạp Header động
function loadHeader() {
  const headerContainer = document.getElementById('site-header');
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header>
      <div class="brand-banner">
        <a href="/">
          <img src="https://raw.githubusercontent.com/ecoplasthn/ktsnguyenthanh-blog/refs/heads/main/KTS%20Nguy%E1%BB%85n%20thanh.webp" alt="KTS Nguyễn Thanh" class="site-logo" />
        </a>
      </div>
      <!-- Nút Hamburger Toggle -->
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle Navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="siteNav">
        <ul class="nav-list">
          <li><a href="/">TRANG CHỦ</a></li>
          <li><a href="/tu-nhua-quan-ao-ecoplast.html">TỦ QUẦN ÁO</a></li>
          <li><a href="/tu-bep-nhua-ecoplast.html" class="text-orange">TỦ BẾP</a></li>
          <li><a href="/giuong-ngu-nhua-ecoplast.html">GIƯỜNG NGỦ</a></li>
          <li><a href="/ban-hoc-nhua-ecoplast.html">BÀN HỌC</a></li>
          <li><a href="/combo-phong-ngu-nhua-ecoplast.html">COMBO PHÒNG NGỦ</a></li>
          <li><a href="/ke-tivi-nhua-ecoplast.html">KỆ TIVI</a></li>
          <li><a href="/tu-giay-nhua-ecoplast.html">TỦ GIẦY</a></li>
          <li><a href="/tu-cau-thang-nhua-ecoplast.html">TỦ CẦU THANG</a></li>
          <li><a href="/tu-van-noi-that.html">TƯ VẤN NỘI THẤT</a></li>
        </ul>
      </nav>
    </header>
  `;

  // GẮN SỰ KIỆN CLICK MỞ MENU TRÊN MOBILE
  const toggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('siteNav');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      toggleBtn.classList.toggle('open');
    });
  }
}

// Gọi hàm khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', loadHeader);
