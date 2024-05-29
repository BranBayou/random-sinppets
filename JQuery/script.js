//Jquery inline css color set

$("h1").css("color", "green");

//Jquery see color of selected h2
console.log($('h2').css('color'));

//Jquery add css class name in  selected element 
$('h2').addClass('big-font');

//Jquery remove class name in selected element
$('h2').removeClass('mg-50');

//Jquery check if the selected element has a class
console.log($('h2').hasClass('mg-50'));

//Jquery change text
$('h2').text('Bye');

//Jquery change html content
$('h1').html("<strong>Hello</strong> World!");

//Jquery manipulate attributes
$('h2').attr('style', 'color: red');
$('a').attr('href', 'https://www.google.com')


//Jquery add event listeners
$('h2').click(function () {
    $('h2').css('color', 'purple');
});

//Jquery more add event listeners
$('button').click(function () {
    $('h1').css('color', 'blue');
});

//Jquery more add event listeners
$('h2').on('mouseover',function () {
    $('h2').css('color', 'orange');
});

//Jquery add and remove elements
$('h2').before('<p>Good</p>');
$('h2').after('<p>bro</p>');

$('h1').prepend('<p>Well</p>');
$('h1').append('<p>people</p>');

//Jquery common animation hide

$('button').on('click', function () {
    // $('h2').hied();
    // $('h2').toggle();
    // $('h2').fadeOut();
    // $('h2').fadeIn();
    // $('h2').fadeToggle();
    // $('h2').slideUp();
    // $('h2').slideDown();
    // $('h2').slideToggle();
    // $('h2').animate({opacity: .5});
    $('h2').slideUp().slideDown().animate({margin: "20px"});
})