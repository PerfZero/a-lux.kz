var modalIn = $('#modal-open');


$(document).ready(function(){
			$('.owl-carousel').owlCarousel({
				items: 1,
				loop: true,
				mouseDrag: false,
				autoplay:true,
        smartSpeed: 1000,
        autoplayTimeout: 11000
			});
			var dot = $('.owl-carousel .owl-dot');
			dot.each(function() {
				var index = $(this).index();
			  $(this).html(index + 1);
			});
		});


	function rightOpen() {
		$('.right-modal').css({
			display: 'block',
			right: '0'
		});
	}
	function rightClose() {
		$('.right-modal').css({
			display: 'block',
			right: '-1200px'
		});
	}

$(".right-menu" ).click(function() {
    console.log("dasdsadasdasdsa");
});

	function choiceFun() {
		if (document.getElementById("multiChoice").options[0].selected == true) {
			$('#img0').css('display', 'block');
			$('#img1').css('display', 'none');
			$('#img2').css('display', 'none');
		} else if (document.getElementById("multiChoice").options[1].selected == true) {
			$('#img1').css('display', 'block');
			$('#img0').css('display', 'none');
			$('#img2').css('display', 'none');
		} else if (document.getElementById("multiChoice").options[2].selected == true) {
			$('#img2').css('display', 'block');
			$('#img1').css('display', 'none');
			$('#img0').css('display', 'none');
		}
	}
    $(".review").fancybox();
