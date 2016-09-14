var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
	
$(document).ready(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		console.log('Mobile');
		 $('body').html("<div style='text-align:center'><p>Sorry...!!!</p><p>This website is not supported on mobiles and tablets.</p><p>Kindly open this site on desktop.</p></div>");
		}
	 
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

