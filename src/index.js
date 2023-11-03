import "./styles/main.scss";

const btn = document.querySelector(".f__button");
const btn1 = document.querySelector(".f__button1");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownList1 = document.querySelector(".dropdown__list1");

btn.addEventListener("click", () => {
  dropdownList.classList.toggle("dropdown__list-visible");
  btn.classList.toggle("active");
});
btn1.addEventListener("click", () => {
  dropdownList1.classList.toggle("dropdown__list-visible1");
  btn1.classList.toggle("active");
});

new Swiper(".swiper1", {
  loop: true,
  centeredSlides: true,

  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    speed: 1000,
  },
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".swiper2", {
  loop: true,
  centeredSlides: true,

  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    speed: 1000,
  },
  speed: 1000,
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1.9,
    },
    420: {
      slidesPerView: 2.1,
    },
    480: {
      slidesPerView: 2.8,
    },
    680: {
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 5,
    },
  },
});

new Swiper(".swiper3", {
  loop: true,
  centeredSlides: true,

  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    speed: 1000,
  },
  speed: 1000,
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1.43,
    },
    480: {
      slidesPerView: 1.64,
    },
    680: {
      slidesPerView: 2.3,
    },

    768: {
      slidesPerView: 3,
    },
  },
});

// отправка формы

const submitBtn = document.querySelector(".submit__button");
const f = document.querySelector(".f__form");
console.log(f);

f.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(this);
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.id === 101) {
        submitBtn.innerText = "Отправлено";
      }
      console.log(json);
    })
    .catch((err) => console.log(err));
});

// воспроизведение видео

const videoPlay = document.querySelector("#icon__video");
console.log(videoPlay);

if (!videoPlay.playing) {
  videoPlay.onmouseover = function () {
    videoPlay.play();
  } 
  
} else {
  videoPlay.onmouseout = function () {
    videoPlay.stop();
  };
}


