document.addEventListener("DOMContentLoaded", function () {
  // 1. Nạp Header & Xử lý Toggle Menu Mobile
  loadHeader();

  // 2. Nạp Author Box (Thông tin tác giả)
  loadAuthorBox();

  // 3. Nạp Footer (Chân trang)
  loadFooter();

  // 4. Nạp Floating CTA (Nút liên hệ nhanh)
  loadFloatingCTA();
});

// --- Hàm 1: Render Header & Toggle Mobile Menu ---
function loadHeader() {
  const headerContainer = document.getElementById("site-header");
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header style="background-color: #1a1a1a; padding-top: 20px; border-bottom: 1px solid #333; text-align: center; position: relative;">
      <div class="brand-banner" style="display: inline-block; margin-bottom: 10px;">
        <a href="/">
          <img src="https://raw.githubusercontent.com/ecoplasthn/ktsnguyenthanh-blog/refs/heads/main/KTS%20Nguy%E1%BB%85n%20thanh.webp" alt="KTS Nguyễn Thanh" class="site-logo" style="width: 120px; height: auto; display: block; margin: 0 auto 10px auto; border-radius: 50%; border: 2px solid #f37021;" />
        </a>
      </div>

      <!-- Nút Hamburger Toggle Mobile -->
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle Navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="siteNav">
        <ul class="nav-list">
          <li><a href="/">TRANG CHỦ</a></li>
          <li><a href="/tu-nhua-quan-ao-ecoplast.html">TỦ QUẦN ÁO</a></li>
          <li><a href="/tu-bep-nhua-ecoplast.html" style="color: #f37021;">TỦ BẾP</a></li>
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

  // Gán sự kiện click cho nút 3 vạch
  const toggleBtn = document.getElementById("menuToggle");
  const navMenu = document.getElementById("siteNav");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("active");
      toggleBtn.classList.toggle("open");
    });

    // Tự đóng menu khi click vào bất kỳ đường dẫn nào trong menu
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        toggleBtn.classList.remove("open");
      });
    });

    // Click ra ngoài menu thì tự động đóng
    document.addEventListener("click", function (e) {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove("active");
        toggleBtn.classList.remove("open");
      }
    });
  }
}

// --- Hàm 2: Render Author Box ---
function loadAuthorBox() {
  const authorContainer = document.getElementById("site-author");
  if (!authorContainer) return;

  authorContainer.innerHTML = `
    <div style="background: #1a1a1a; padding: 20px; border-radius: 8px; margin-top: 40px; border-left: 4px solid #008744; display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
      <img src="https://raw.githubusercontent.com/ecoplasthn/ktsnguyenthanh-blog/refs/heads/main/KTS%20Nguy%E1%BB%85n%20thanh.webp" alt="KTS Nguyễn Thanh" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid #f37021;" />
      <div style="flex: 1; min-width: 250px;">
        <h4 style="color: #fff; margin-bottom: 5px; font-size: 16px;">TÁC GIẢ: KTS NGUYỄN THANH</h4>
        <p style="font-size: 13px; color: #ccc; margin-bottom: 0;">Kiến trúc sư trưởng tại Nội Thất Nhựa Ecoplast Hà Nội. Chuyên tư vấn, thiết kế và thi công giải pháp nội thất nhựa cao cấp chống ẩm mốc, mối mọt cho không gian sống hiện đại.</p>
      </div>
    </div>
  `;
}

// --- Hàm 3: Render Footer ---
function loadFooter() {
  const footerContainer = document.getElementById("site-footer");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer style="text-align: center; padding: 25px; background: #101010; color: #777; font-size: 13px; margin-top: 50px; border-top: 1px solid #222;">
      <p>&copy; 2026 KTS Nguyễn Thanh • Hotline/Zalo: 0886 374 043 • Xưởng sản xuất: Ngõ 19 Kim Quan, Việt Hưng, Long Biên, Hà Nội</p>
      <p style="margin-top: 8px;">
        <a href="https://ecoplasthanoi.io.vn/" target="_blank" style="color: #aaa; text-decoration: none;">www.ecoplasthanoi.io.vn</a> | 
        <a href="https://ktsnguyenthanh.io.vn/" style="color: #aaa; text-decoration: none;">www.ktsnguyenthanh.io.vn</a>
      </p>
    </footer>
  `;
}

// --- Hàm 4: Render Floating CTA (Hotline/Zalo) ---
function loadFloatingCTA() {
  const ctaContainer = document.getElementById("site-cta");
  if (!ctaContainer) return;

  ctaContainer.innerHTML = `
    <div style="position: fixed; bottom: 20px; right: 20px; z-index: 999; display: flex; flex-direction: column; gap: 10px;">
      <a href="https://zalo.me/0886374043" target="_blank" rel="noopener" style="background: #0088FF; color: #fff; padding: 10px 16px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 13px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); display: flex; align-items: center; gap: 8px;">
        💬 Zalo Tư Vấn
      </a>
      <a href="tel:0886374043" style="background: #f37021; color: #fff; padding: 10px 16px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 13px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); display: flex; align-items: center; gap: 8px;">
        📞 Gọi 0886 374 043
      </a>
    </div>
  `;
}
