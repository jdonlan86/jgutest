$(document).ready(function(){

$('.jcarousel')
    .jcarousel({
        // Core configuration goes here
    })
    .jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true,
       
    });


$('.jcarousel').jcarousel({
    animation: 'fast'
});

$('.jcarousel').jcarousel({
    animation: {
        duration: 1000,
        easing:   'linear',
        complete: function() {
        }
    }
});

$('.jcarousel').jcarousel({
    wrap: 'both'
});





$('.jcarousel2')
    .jcarousel({
        // Core configuration goes here
    })
    .jcarouselAutoscroll({
        interval: 2000,
        target: '+=1',
        autostart: true,
       
    });


$('.jcarousel2').jcarousel({
    animation: 'slow'
});

$('.jcarousel2').jcarousel({
    animation: {
        duration: 1000,
        easing:   'linear',
        complete: function() {
        }
    }
});

$('.jcarousel2').jcarousel({
    wrap: 'both'
});





});
