// Общий для всего проекта JS-код

$(window).on('load', function () {
	// Слайдер
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

	const redirect = document.querySelector(".swiper-wrapper");
	redirect.addEventListener('click', function() {
		window.location.href = "http://stackoverflow.com";
})

	// Слайдер изделий
	const productsSlider = new Swiper('.products-slider', {
		freeMode: {
			enabled: true,
			sticky: true,
		},
		mousewheel: {
			invert: false,
		},
		spaceBetween: 80,
		slidesPerView: 2,
		slidesPerGroup: 1,

		breakpoints: {
			320: {
				slidesPerView: 2,
			},

			601: {
				slidesPerView: 3,
			},

			768: {
				slidesPerView: 4,
			},

			991: {
				slidesPerView: 5,
			},
		}
	});
});

