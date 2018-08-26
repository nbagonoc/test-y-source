$(document).ready(function() {
  // Cover slider image
  $(".slider-cover").backstretch(
    ["img/cover_a.jpg", "img/cover_b.jpg", "img/cover_c.jpg"],
    {
      fade: 750,
      duration: 5000
    }
  );

  // scroll spy navbar
  function checkScroll() {
    var startY = $(".navbar").height() * 1; //The point where the navbar changes in px

    if ($(window).scrollTop() > startY) {
      $(".navbar").addClass("scrolled shadow-sm");
    } else {
      $(".navbar").removeClass("scrolled shadow-sm");
    }
  }
  if ($(".navbar").length > 0) {
    $(window).on("scroll load resize", function() {
      checkScroll();
    });
  }

  // Animation
  $(".slide-from-right")
    .css("opacity", 0)
    .viewportChecker({
      classToAdd: "animated fadeInRight",
      offset: "30%"
    });
  $(".slide-from-left")
    .css("opacity", 0)
    .viewportChecker({
      classToAdd: "animated fadeInLeft",
      offset: "30%"
    });
  $(".fade-in")
    .css("opacity", 0)
    .viewportChecker({
      classToAdd: "animated fadeInUp",
      offset: "30%"
    });

  // controls the easing of the jquery plugin easing
  $(document).on("click", "a.page-scroll", function(event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});
