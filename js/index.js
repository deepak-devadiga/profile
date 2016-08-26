var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
$(document).ready(function(){
$('.start').click(function(){
	 $('html, body').animate({
                'scrollTop': $(".row1").position().top
            }, 1000);
});
$('.page1 span').click(function(){
	 $('html, body').animate({
                'scrollTop': $(".row2").offset().top
            }, 1000);
});
$('.page2 span').click(function(){
	 $('html, body').animate({
                'scrollTop': $(".row3").offset().top
            }, 1000);
});
$('.page3 span').click(function(){
	 $('html, body').animate({
                'scrollTop': $(".row4").offset().top
            }, 1000);
});


});

