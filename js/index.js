let productsSlider;

$(window).on('load', function () {
	const heroSlider = new Swiper('.hero-slider', {
    loop: true,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
	});

	productsSlider = new Swiper('.products-slider', {
		mousewheel: {
			invert: false,
		},
		spaceBetween: 60, 
		slidesPerView: 3, 
		slidesPerGroup: 1, 
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			// Настройки будут применяться только при достижении указанных разрешений
			320: {
				slidesPerView: 1.5,
				spaceBetween: 50,
				slidesOffsetAfter: 75, 
				slidesOffsetBefore: 45,
				centeredSlidesBounds: true
			},
			360: {
				slidesPerView: 1.5,
				spaceBetween: 140,
				slidesOffsetAfter: 145,
				slidesOffsetBefore: 15,
				centeredSlidesBounds: true
			},
			375: {
				slidesPerView: 1.5,
				spaceBetween: 140,
				slidesOffsetAfter: 145, 
				slidesOffsetBefore: 20,
				centeredSlidesBounds: true
			},
			390: {
				slidesPerView: 1.5,
				spaceBetween: 120,
				slidesOffsetAfter: 135, 
				slidesOffsetBefore: 28,
				centeredSlidesBounds: true
			},
			412: {
				slidesPerView: 1.5,
				spaceBetween: 100,
				slidesOffsetAfter: 123, 
				slidesOffsetBefore: 39,
				centeredSlidesBounds: true
			},
			414: {
				slidesPerView: 1.5,
				spaceBetween: 105,
				slidesOffsetAfter: 124, 
				slidesOffsetBefore: 45,
				centeredSlidesBounds: true
			},
			430: {
				slidesPerView: 1.5,
				spaceBetween: 80,
				slidesOffsetAfter: 115,
				slidesOffsetBefore: 48,
				centeredSlidesBounds: true
			},
			480: {
				slidesPerView: 1.5,
				spaceBetween: 60,
				slidesOffsetAfter: 100,
				slidesOffsetBefore: 70,
				centeredSlidesBounds: true
			},
			576: {
				slidesPerView: 1.5,
				spaceBetween: 10,
				slidesOffsetAfter: 70, 
				slidesOffsetBefore: 120,
				centeredSlidesBounds: true
			},
			640: {
				slidesPerView: 3,
				spaceBetween: 60,
				slidesOffsetAfter: 60, 
			}
		}
	});
});
