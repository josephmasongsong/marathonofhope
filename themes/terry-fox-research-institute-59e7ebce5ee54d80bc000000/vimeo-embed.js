$(document).ready(function() {

    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    player.on('play', function() {

        $('.main-nav').fadeTo('slow', 0);

    });


    player.on('pause', function() {

        $('.main-nav').fadeTo('slow', 1);

    });

});