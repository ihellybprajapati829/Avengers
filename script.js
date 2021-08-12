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
