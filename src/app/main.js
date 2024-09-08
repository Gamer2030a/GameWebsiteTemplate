var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Initialize Main Swiper
var mainSwiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Initialize Nested Swiper
var nestedSwiper = new Swiper(".nestedSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".nested-swiper .swiper-pagination",
    clickable: true,
  },
});

function openVideo(url) {
  const videoFrame = document.getElementById('video-frame');
  videoFrame.src = url;
  document.getElementById('video-modal').style.display = 'flex';
}


function closeVideo() {
  document.getElementById('video-frame').src = '';
  document.getElementById('video-modal').style.display = 'none';
}




const cursorSmall = document.querySelector('.small');

const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

let isMoving = false;

const animate = (e) => {
  if (!isMoving) {
    isMoving = true;
    requestAnimationFrame(() => {
      positionElement(e);
      isMoving = false;
    });
  }
};

window.addEventListener('mousemove', animate);
