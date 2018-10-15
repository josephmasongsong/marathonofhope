
$(document).ready(function($) {
    $(".campaign").click(function() {
        window.location = $(this).data("href");
    });

    $(".item").click(function() {
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

$(document).ready(function($) {
  setTimeout(function() {
    $('.alert').slideUp();
  }, 4000);
});
