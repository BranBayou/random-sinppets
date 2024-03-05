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

$('button');