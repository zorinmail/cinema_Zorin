
let arrowTop = document.getElementById('arrowTop');

$('#arrowTop').click(function() {
    $('html, body').animate({scrollTop: 0},700);
})

$(window).scroll(function() {
    arrowTop.hidden = (pageYOffset < (document.documentElement.clientHeight*.75));
})