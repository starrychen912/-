/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Home Slider
4. Init Date Picker
5. Init Gallery
6. Init Testimonials Slider
7. Init Booking Slider
8. Init Blog Slider


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.gdaib-header');

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initHomeSlider();
	initDatePicker();
	initGallery();
	initTestSlider();
	initBookingSlider();
	initBlogSlider();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	
	/* 

	3. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.gdaib-home_slider').length)
		{
			var homeSlider = $('.gdaib-home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				autoplay:true,
				loop:true,
				nav:false,
				smartSpeed:1200
			});

			/* Custom dots events */
			if($('.gdaib-home_slider_custom_dot').length)
			{
				$('.gdaib-home_slider_custom_dot').on('click', function()
				{
					$('.gdaib-home_slider_custom_dot').removeClass('gdaib-active');
					$(this).addClass('gdaib-active');
					homeSlider.trigger('to.owl.carousel', [$(this).index(), 1200]);
				});
			}

			/* Change gdaib-active class for dots when slide changes by nav or touch */
			homeSlider.on('changed.owl.carousel', function(event)
			{
				$('.gdaib-home_slider_custom_dot').removeClass('gdaib-active');
				$('.gdaib-home_slider_custom_dots li').eq(event.page.index).addClass('gdaib-active');
			});
		}
	}

	/* 

	4. Init Date Picker

	*/

	function initDatePicker()
	{
		if($('.gdaib-datepicker').length)
		{
			var datePickers = $('.gdaib-datepicker');
			datePickers.each(function()
			{
				var dp = $(this);
				var placeholder = dp.data('placeholder');
				dp.val(placeholder);
				dp.datepicker();
			});
		}	
	}

	/* 

	5. Init Gallery

	*/

	function initGallery()
	{
		if($('.gdaib-gallery_slider').length)
		{
			var gallerySlider = $('.gdaib-gallery_slider');
			gallerySlider.owlCarousel(
			{
				items:4,
				loop:false,
				autoplay:false,
				dots:false,
				nav:false,
				smartSpeed:1200,
				responsive:
				{
					0:{items:1},
					576:{items:2},
					768:{items:3},
					992:{items:4}
				}
			});

			if($('.gdaib-colorbox').length)
			{
				$('.gdaib-colorbox').colorbox(
				{
					rel:'gdaib-colorbox',
					photo: true,
					maxWidth:'95%',
					maxHeight:'95%'
				});
			}
		}
	}

	/* 

	6. Init Testimonials Slider

	*/

	function initTestSlider()
	{
		if($('.gdaib-test_slider').length)
		{
			var testSlider = $('.gdaib-test_slider');
			testSlider.owlCarousel(
			{
				items:3,
				autoplay:true,
				loop:true,
				smartSpeed:1200,
				dots:false,
				nav:false,
				margin:30,
				autoplayHoverPause:true,
				responsive:
				{
					0:{items:1},
					768:{items:2},
					992:{items:3}
				}
			});
		}
	}

	/* 

	7. Init Booking Slider

	*/

	function initBookingSlider()
	{
		if($('.gdaib-booking_slider').length)
		{
			var bookingSlider = $('.gdaib-booking_slider');
			bookingSlider.owlCarousel(
			{
				items:3,
				autoplay:true,
				autoplayHoverPause:true,
				loop:true,
				smartSpeed:1200,
				dots:false,
				nav:false,
				margin:30,
				responsive:
				{
					0:{items:1},
					768:{items:2},
					992:{items:3}
				}
			});
		}
	}

	/* 

	8. Init Blog Slider

	*/

	function initBlogSlider()
	{
		if($('.gdaib-blog_slider').length)
		{
			var blogSlider = $('.gdaib-blog_slider');
			blogSlider.owlCarousel(
			{
				items:3,
				autoplay:true,
				loop:true,
				smartSpeed:1200,
				dots:false,
				nav:false,
				margin:2,
				responsive:
				{
					0:{items:1},
					768:{items:2},
					992:{items:3}
				}
			});
		}
	}

});