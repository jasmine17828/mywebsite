document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  const caption = document.getElementById("carousel-caption");
  const indicatorContainer = document.querySelector(".carousel-indicators");

  let index = 0;
  let dots = [];

  // 🔧 根據圖片數量建立指示點
  function createDots() {
    images.forEach((_, i) => {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active"); // 預設第一個是 active
      indicatorContainer.appendChild(dot);
      dots.push(dot);
    });
  }

  // 顯示指定 index 的圖片與更新點
  function showImage(idx) {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(-${idx * width}px)`;
    caption.textContent = images[idx].alt;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === idx);
    });
  }

  // 初始化 dots 並設定點擊事件
  createDots();
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      showImage(index);
    });
  });

  // 響應式對齊圖片
  window.addEventListener("resize", () => {
    showImage(index);
  });

  // 自動輪播
  setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
  }, 3000);

  // 初始顯示
  showImage(index);
});

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTop");

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
