$(document).ready(function (){

    $(".button-collapse").sideNav();


    //remove pointer from google maps on page load
    $('#google-maps').addClass('scroll');

    //change the pointer to the default when user clicks within the map
    $('#maps').on('click', function(){

        $('#google-maps').removeClass('scroll');

    });

    //remove pointer when user moves pointer out of the maps
    $('#google-maps').mouseleave(function(){

        $('#google-maps').addClass('scroll');

    });

    $("#button").click(function (e){
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $('#footer-wrapper').offset().top
                    }, 1500);

        });

});