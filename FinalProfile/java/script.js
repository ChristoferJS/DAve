$(document).ready(function () {
  $(document).bind('scroll', function (e) {
    $('section').each(function () {
      if ($(this).offset().top < window.pageYOffset + 10 && $(this).offset().top + $(this).height() > window.pageYOffset + 10) {
        window.location.hash = $(this).attr('id');
        if ($(this).attr('id') == "home") {
          $('a.link').removeClass('active');
          $("#link1").toggleClass('active')
        } else if ($(this).attr('id') == "about-us") {
          $('a.link').removeClass('active');
          $("#link2").toggleClass('active')
        } else if ($(this).attr('id') == "resume") {
          $('a.link').removeClass('active');
          $("#link3").toggleClass('active')
        } else if ($(this).attr('id') == "contact") {
          $('a.link').removeClass('active');
          $("#link4").toggleClass('active')
        }
      }
    });
  });
})

