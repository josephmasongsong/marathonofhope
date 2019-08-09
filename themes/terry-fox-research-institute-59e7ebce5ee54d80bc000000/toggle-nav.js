$(window).scroll(function() {
if ($(document).scrollTop() >= 50) {
  $('.navbar-brand img').attr('src', 'http://d3n8a8pro7vhmx.cloudfront.net/themes/59e7ebce5ee54d80bc000000/attachments/original/1562692843/moh-logo.png?1562692843');
} else if ($(document).scrollTop() <= 50) {
  $('.navbar-brand img').attr('src', 'http://d3n8a8pro7vhmx.cloudfront.net/themes/59e7ebce5ee54d80bc000000/attachments/original/1562692844/moh-logo-white-transparent.png?1562692844');
}
});
$(window).scroll(function() {
if ($(document).scrollTop() > 50) {
  $('.main-nav').removeClass('navbar-static-top');
  $('.main-nav').addClass('navbar-fixed-top');
  $('.main-nav').addClass('shrink');
} else {
  $('.main-nav').removeClass('shrink');
  $('.main-nav').removeClass('navbar-fixed-top');
  $('.main-nav').addClass('navbar-static-top');  
}
});
