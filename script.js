/********* Slider ********/
$(document).ready(function () {
  var avengerHeroSlider = new Swiper(".avenger-container .swiper-container", {
    loop: false,
    autoplay: true,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    on: {
      init: function () {
        var index = this.activeIndex; // current slide index
        $(".avenger-container .img-wrapper")
          .removeClass("active")
          .eq(index)
          .addClass("active");
      },
    },
  }).on("slideChange", function () {
    var index = this.activeIndex; // current slide index
    $(".avenger-container .img-wrapper")
      .removeClass("active")
      .eq(index)
      .addClass("active");
  });
  $(window).on("resize", function () {
    avengerHeroSlider.update();
  });
});

/*******  Navbar Sidebar  *********/
function openNav() {
  document.getElementById("mySidenav").style.width = "310px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const toggle = document.getElementById("toggle");
const mySidenav = document.getElementById("mySidenav");

document.onclick = function (e) {
  if (e.target.id !== "mySidenav" && e.target.id !== "toggle") {
    closeNav();
  }
};

function App() {}

window.onload = function (event) {
  var app = new App();
  window.app = app;
};

App.prototype.processingButton = function (event) {
  const btn = event.currentTarget;
  const slickList = event.currentTarget.parentNode;
  const track = event.currentTarget.parentNode.querySelector("#track");
  const slick = track.querySelectorAll(".slick");

  const slickWidth = slick[0].offsetWidth;

  const trackWidth = track.offsetWidth;
  const listWidth = slickList.offsetWidth;

  track.style.left == ""
    ? (leftPosition = track.style.left = 0)
    : (leftPosition = parseFloat(track.style.left.slice(0, -2) * -1));

  btn.dataset.button == "button-prev"
    ? prevAction(leftPosition, slickWidth, track)
    : nextAction(leftPosition, trackWidth, listWidth, slickWidth, track);
};

let prevAction = (leftPosition, slickWidth, track) => {
  if (leftPosition > 0) {
    console.log("entro 2");
    track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
  }
};

let nextAction = (leftPosition, trackWidth, listWidth, slickWidth, track) => {
  if (leftPosition < trackWidth - listWidth) {
    track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
  }
};
