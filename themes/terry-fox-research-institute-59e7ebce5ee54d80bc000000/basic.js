$(window).scroll(function() {
  if ($(document).scrollTop() >= 50) {
    $('.navbar-brand img').attr('src', 'https://d3n8a8pro7vhmx.cloudfront.net/themes/59e7ebce5ee54d80bc000000/attachments/original/1538025314/marathonofhope1.png?1538025314');
  } else if ($(document).scrollTop() <= 50) {
    $('.navbar-brand img').attr('src', 'https://d3n8a8pro7vhmx.cloudfront.net/themes/59e7ebce5ee54d80bc000000/attachments/original/1538025314/marathonofhope_whitetext1.png?1538025314');
  }
});


$(document).ready(function($) {
    $(".campaign").click(function() {
        window.location = $(this).data("href");
    });
});

$(document).ready(function($) {
  $('.hamburger').on('click', function() {
    if (!$(this).hasClass("is-active")) {
      $(this).addClass('is-active');
      $('.main-nav').addClass('shrink');
    }
    else {
      $(this).removeClass('is-active');
    }
  });
});


$(document).ready(function($) {
	$('.twitter-block').on('DOMSubtreeModified propertychange',"#twitter-widget-0", function() {
		$(".twitter-timeline").contents().find(".timeline-Tweet-media").css("display", "none");
		$(".twitter-block").css("height", "100%");
	});
});


$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.main-nav').addClass('shrink');
  } else {
    $('.main-nav').removeClass('shrink');
  }
});