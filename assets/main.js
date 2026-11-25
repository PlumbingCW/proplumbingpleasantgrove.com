(function () {
  var doc = document.documentElement;
  var BP = 768;
  var drawer = document.getElementById("mob-drawer");
  var overlay = document.getElementById("mob-overlay");
  var burger = document.getElementById("hamburger");
  var closeBtn = document.getElementById("mob-close");
  function openMenu() {
    drawer.classList.add("open");
    overlay.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    doc.style.overflow = "hidden";
  }
  function closeMenu() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    doc.style.overflow = "";
  }
  if (burger && drawer) {
    burger.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
    drawer.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > BP) closeMenu();
    });
  }
  var qs = document.querySelectorAll(".faq-q");
  qs.forEach(function (q) {
    q.addEventListener("click", function () {
      var a = q.nextElementSibling;
      var open = q.getAttribute("aria-expanded") === "true";
      q.setAttribute("aria-expanded", open ? "false" : "true");
      a.style.maxHeight = open ? "0px" : a.scrollHeight + "px";
    });
  });
  var fc = document.getElementById("float-call");
  var ft = document.querySelector("footer");
  if (fc && ft && "IntersectionObserver" in window) {
    new IntersectionObserver(function (en) {
      fc.classList.toggle("hide", en[0].isIntersecting);
    }).observe(ft);
  }
})();
