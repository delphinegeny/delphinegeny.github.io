$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});


$(function() {
  var selectedClass = "";
  $(".fil-cat").click(function() {
    selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("." + selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300);

  });
});

$(function() {
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.visibility = "visible";
       modal.style.opacity = "1";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.visibility = "hidden";
   modal.style.opacity = "0";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});



function readmore() {
    var x = document.getElementById('Read');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href");if($(window).scrollTop()!="0"){$(this).fadeIn("slow")}var scrollDiv=$(this);$(window).scroll(function(){if($(window).scrollTop()=="0"){$(scrollDiv).fadeOut("slow")}else{$(scrollDiv).fadeIn("slow")}});$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}});

$(function(){
	$("#toTop").scrollToTop();
});
