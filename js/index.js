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
    }
	});

	const redirect = document.querySelector(".swiper-wrapper");
	redirect.addEventListener('click', function() {
		window.location.href = "http://stackoverflow.com";
})

	// Слайдер компаний
	const companiesSlider = new Swiper('.companies__slider', {
		// autoplay: true,
		// autoplay: {
		// 	delay: 4000,
		// 	disableOnInteraction: false,
		// },
		speed: 600,
		loop: true,
		spaceBetween: 2,
		slidesPerView: 2,
		slidesPerGroup: 1,

		navigation: {
			nextEl: '.companies__slider .swiper-button--next',
			prevEl: '.companies__slider .swiper-button--prev',
		},

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

