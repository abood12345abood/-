document.addEventListener("DOMContentLoaded", function() {
  // Sidebar & Hamburger
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");
  const closeSidebar = document.getElementById("closeSidebar");

  if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
      sidebar.style.width = "250px";
    });
  }

  if (closeSidebar && sidebar) {
    closeSidebar.addEventListener("click", () => {
      sidebar.style.width = "0";
    });
  }

  // Close sidebar if click outside
  window.addEventListener("click", (event) => {
    if (sidebar && hamburger) {
      if (event.target !== sidebar && event.target !== hamburger) {
        sidebar.style.width = "0";
      }
    }
  });

  // Dark mode
  const darkBtn = document.getElementById("darkmode");
  if (darkBtn && sidebar) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      sidebar.classList.toggle("dark-mode");
      darkBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ الوضع النهاري"
        : "🌙 الوضع الليلي";
    });
  }

  // Search functionality
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", () => {
      let filter = searchInput.value.toLowerCase();
      document.querySelectorAll(".doctor-section").forEach((sec) => {
        sec.style.display = sec.textContent.toLowerCase().includes(filter)
          ? "block"
          : "none";
      });
    });
  }

  // Toggle buttons in doctor sections
  document.querySelectorAll(".toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      if (content) {
        if (content.style.display === "block") {
          content.style.display = "none";
          btn.textContent = btn.textContent.replace("➖", "➕");
        } else {
          content.style.display = "block";
          btn.textContent = btn.textContent.replace("➕", "➖");
        }
      }
    });
  });
});