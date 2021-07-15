$( "#about-menu" ).on( "click", function() {
    $( ".about" ).first().slideDown();
    $('#clicklayer').show();
});

$( "#clicklayer" ).on( "click", function() {
    $( ".about" ).first().slideUp();
    $('#clicklayer').hide();
});
