( function($){

	'use strict'
	//CODE START
 $(window).scroll( function() {

	var count = $(window).scrollTop();

		if (count > 100) {
			$('.nav-top').fadeIn();
		}

		else {
			$('.nav-top').fadeOut();
		}


}); 

  $('.scrl-btn').hide();

  $(window).scroll(function() {

  	var count = $(window).scrollTop();

  		if (count > 350) {
  			$('.scrl-btn').fadeIn();
  		}

  		else {
  			$('.scrl-btn').fadeOut();
  		}
  });
 
  $('.scrl-btn ').on('click', function(){
  	$('html').animate({ scrollTop : 0})

  });

		//isotop
		// filter items on button click
		$('.filter-button-group').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		var $grid = $('.grid').isotope({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  masonry: {
		    // use element for option
		    columnWidth: '.grid-item'
		  }
		})


 //active button
  $('.gallary-button button').on('click', function() {
  	$('.gallary-button button').removeClass('active');
  	$(this).addClass('active');
  })

	// Feedback
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay: true,
	    autoplayTimeout:3000,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:5
	        }
	    }
	})

	//Extra Side Bar 
	$('.menu-bar').on('click', function(){
		$('.extra-info').animate( {'right': 0} );
	});

	$('.close-icon').on('click', function(){
		$('.extra-info').animate( {'right': -340} );
	});



	//Side menu
	$('.menu-bar-2').on('click', function(){
		$('.side-nav').animate({ 'left' : 0 })
	});

	$('.close-icon').on('click', function(){
		$('.side-nav').animate( {'left': -340} );
	});


 	//Side menu to sub menu open
 	$('.side-nav ul li').on('click', function(){
 		$('.side-nav ul ul').slideUp();
 		$(this).children('ul').slideDown();
 	});







}) (jQuery);