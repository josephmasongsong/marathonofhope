$(document).ready(function() {

    var iframe = document.getElementById('video');
    var player = new Vimeo.Player(iframe);

    player.on('play', function() {

        $('.navbar, .video-toggle').fadeTo('slow', 0);
        $('#play-video').fadeTo('slow', 0);
        $('.video-container-splash').removeClass('overlay');
        $(iframe).fadeTo('slow', 1);

    });


    player.on('pause', function() {

        $('.navbar, .video-toggle').fadeTo('slow', 1);
        $('#play-video').fadeTo('slow', 1).removeClass('test');

        $('.video-container-splash').addClass('overlay');
        $(iframe).fadeTo('slow', 0);

    });


  $('#play-video').on('click', function(ev) {
        ev.preventDefault();
    
    if (!$(this).hasClass("test")) {


        $(this).addClass('test');


        player.play()

    }

  });

});