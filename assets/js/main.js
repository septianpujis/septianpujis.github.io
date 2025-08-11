; (function () {

	'use strict';

	// iPad and iPod detection	
	var isiPad = function () {
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function () {
		return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	};



	// Carousel Feature Slide
	var testimonialCarousel = function () {

		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			animateOut: 'fadeOut',
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: false
		});
	};

	var sliderMain = function () {

		$('#qbootstrap-slider-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function () {
				setTimeout(function () {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function () {
				setTimeout(function () {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

		});

	};



	// animate-box
	var contentWayPoint = function () {

		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this).hasClass('animated')) {

				$(this.element).addClass('fadeInUp animated');

			}

		}, { offset: '75%' });

	};


	// Burger Menu
	var burgerMenu = function () {

		$('body').on('click', '.js-qbootstrap-nav-toggle', function (event) {

			if ($('#navbar').is(':visible')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}

			event.preventDefault();

		});

	};


	// Parallax
	var parallax = function () {
		if (!isiPad() || !isiPhone()) {
			$(window).stellar();
		}
	};



	// Page Nav
	var clickMenu = function () {

		$('a:not([class="external"])').click(function (event) {
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');
			$('html, body').animate({
				scrollTop: $('[data-section="' + section + '"]').offset().top
			}, 500);

			if (navbar.is(':visible')) {
				navbar.removeClass('in');
				navbar.attr('aria-expanded', 'false');
				$('.js-qbootstrap-nav-toggle').removeClass('active');
			}

			event.preventDefault();
			return false;
		});

	};

	// Reflect scrolling in navigation
	var navActive = function (section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function () {
			$(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
		});

	};
	var navigationSection = function () {

		var $section = $('div[data-section]');

		$section.waypoint(function (direction) {
			if (direction === 'down') {
				navActive($(this.element).data('section'));

			}
		}, {
			offset: '150px'
		});

		$section.waypoint(function (direction) {
			if (direction === 'up') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: function () { return -$(this.element).height() + 155; }
		});

	};


	// Window Scroll
	var windowScroll = function () {
		var lastScrollTop = 0;

		$(window).scroll(function (event) {

			var header = $('#qbootstrap-header'),
				scrlTop = $(this).scrollTop();

			if (scrlTop > 500 && scrlTop <= 2000) {
				header.addClass('navbar-fixed-top qbootstrap-animated slideInDown');
			} else if (scrlTop <= 500) {
				if (header.hasClass('navbar-fixed-top')) {
					header.addClass('navbar-fixed-top qbootstrap-animated slideOutUp');
					setTimeout(function () {
						header.removeClass('navbar-fixed-top qbootstrap-animated slideInDown slideOutUp');
					}, 100);
				}
			}

		});
	};



	// Animations
	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 50);

			}

		}, { offset: '85%' });
	};


	var inlineSVG = function () {
		$('img.svg').each(function () {
			var $img = $(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			$.get(imgURL, function (data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');

				// Add replaced image's ID to the new SVG
				if (typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

		});
	};


	// Set the date we're counting down to
	var countDownDate = new Date("Oct 05, 2025 09:00:00").getTime();

	// Update the count down every 1 second
	var x = setInterval(function () {

		// Get todays date and time
		var now = new Date().getTime();

		// Find the distance between now an the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result in an element with id="demo"
		// document.getElementById("demo").innerHTML = days + "Days " + hours + "Hours "
		// + minutes + "Minutes " + seconds + "Seconds ";

		// Display the result in an element with id="demo"
		document.getElementById("days").innerHTML = days + " <small>days</small>";
		document.getElementById("hours").innerHTML = hours + " <small>hours</small> ";
		document.getElementById("minutes").innerHTML = minutes + " <small>minutes</small> ";
		document.getElementById("seconds").innerHTML = seconds + " <small>seconds</small> ";

		// If the count down is finished, write some text 
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("demo").innerHTML = "The Wedding Ceremony is Over";
		}
	}, 1000);


	var bgVideo = function () {
		$('.player').mb_YTPlayer();
	};


	// Floating Music Player functionality
	var floatingMusicPlayer = function () {
		var musicPlayer = $('#floating-music-player');
		var musicToggleBtn = $('#music-toggle-btn');
		var musicIcon = $('#music-icon');
		var backgroundMusic = $('#background-music')[0];
		var isPlaying = false;

		// Function to play music
		function playMusic() {
			if (!backgroundMusic) return;

			// Unmute the audio first
			backgroundMusic.muted = false;

			backgroundMusic.play().then(function () {
				isPlaying = true;
				musicToggleBtn.addClass('playing');
				musicIcon.removeClass('fa-play').addClass('fa-pause');
				console.log('Music started playing');
			}).catch(function (error) {
				console.log('Audio playback failed:', error);
				isPlaying = false;
				musicIcon.removeClass('fa-pause').addClass('fa-play');
				// Show user-friendly message if autoplay fails
				if (error.name === 'NotAllowedError') {
					console.log('Autoplay blocked by browser. User needs to interact first.');
				}
			});
		}

		// Make playMusic function globally accessible
		window.playMusic = playMusic;

		// Function to pause music
		function pauseMusic() {
			if (!backgroundMusic) return;

			backgroundMusic.pause();
			isPlaying = false;
			musicToggleBtn.removeClass('playing');
			musicIcon.removeClass('fa-pause').addClass('fa-play');
			console.log('Music paused');
		}

		// Function to toggle music
		function toggleMusic() {
			console.log('Toggle music called, isPlaying:', isPlaying);
			if (isPlaying) {
				pauseMusic();
			} else {
				playMusic();
			}
		}



		// Event listener for music toggle button
		musicToggleBtn.on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();
			console.log('Music button clicked');
			toggleMusic();
		});

		// Handle audio ended event
		if (backgroundMusic) {
			backgroundMusic.addEventListener('ended', function () {
				// If loop is not working, restart the audio
				if (isPlaying) {
					backgroundMusic.currentTime = 0;
					backgroundMusic.play();
				}
			});

			// Handle audio error
			backgroundMusic.addEventListener('error', function (e) {
				console.log('Audio error:', e);
				// Hide the player if audio file is not found
				musicPlayer.hide();
			});

			// Handle audio canplay event
			backgroundMusic.addEventListener('canplay', function () {
				console.log('Audio can play');
			});

			// Handle audio loadstart event
			backgroundMusic.addEventListener('loadstart', function () {
				console.log('Audio loading started');
			});

			// Handle audio loadeddata event
			backgroundMusic.addEventListener('loadeddata', function () {
				console.log('Audio data loaded');
			});

			// Handle loadedmetadata event
			backgroundMusic.addEventListener('loadedmetadata', function () {
				console.log('Audio metadata loaded');
			});

			// Handle canplaythrough event (audio is fully loaded and can play)
			backgroundMusic.addEventListener('canplaythrough', function () {
				console.log('Audio can play through');
			});
		}

		// Handle page visibility change (pause when page is hidden)
		document.addEventListener('visibilitychange', function () {
			if (document.hidden && isPlaying) {
				pauseMusic();
			}
		});

		// Initialize music player
		$(document).ready(function () {
			if (backgroundMusic) {
				// Set volume to a reasonable level
				backgroundMusic.volume = 0.5;

				// Set initial icon to play (since autoplay is blocked)
				musicIcon.removeClass('fa-pause fa-music').addClass('fa-play');

				// Don't auto-play music - wait for user interaction via scroll button
				console.log('Music player initialized - waiting for user interaction');
			}
		});

		// Remove automatic music playing - wait for user interaction via scroll button
	};


	// Document on load.
	$(function () {

		burgerMenu();
		testimonialCarousel();
		sliderMain();
		clickMenu();
		parallax();
		// windowScroll();
		navigationSection();
		contentWayPoint();
		inlineSVG();
		bgVideo();
		floatingMusicPlayer();
	});


}());