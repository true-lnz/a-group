document.addEventListener("DOMContentLoaded", function() {
	function initializeMobileView() {
		if (document.body.clientWidth <= 576) {
			const heroSlider_mobile = new Swiper('.hero-slider-mobile', {
				loop: true,
				autoplay: {
					delay: 4000,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});

			const clientsBlock = document.querySelector('#clients');
			clientsBlock.classList.add("mobile");
		}
	}

	initializeMobileView();
	window.addEventListener('resize', function() {
		initializeMobileView();
	});

	const burgerBtn = document.querySelector('.burger-btn');
	const header = document.querySelector('.header');
	const menuOverlay = document.querySelector('.menu-overlay');

	burgerBtn.addEventListener('click', function() {
			menuOverlay.classList.toggle('active');
			header.classList.toggle('mobile-shown');
			burgerBtn.classList.toggle('active');
	});
		menuOverlay.addEventListener('click', function() {
			menuOverlay.classList.remove('active');
			header.classList.remove('mobile-shown');
			burgerBtn.classList.remove('active');
		});
});

