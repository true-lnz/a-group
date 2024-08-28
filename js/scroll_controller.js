window.onload = function () {
	if (!productsSlider) {
		console.error("productsSlider не инициализирован");
		return;
	}

	let isEnd = false;
	let isBegin = false;
	let lockScroll = false;

	productsSlider.on('reachEnd', function () {
		isEnd = true;
	});

	productsSlider.on('reachBeginning', function () {
		isBegin = true;
	});

	productsSlider.on('fromEdge', function () {
		isEnd = false;
		isBegin = false;
	});

	let rect;

	function checkSliderPosition() {
		rect = productsSlider.$el[0].getBoundingClientRect();
		const viewportHeight = window.innerHeight;

		// Вычисляем центр блока и центр viewport
		const sliderCenter = rect.top + rect.height / 2;
		const viewportCenter = viewportHeight / 2;

		// Блокируем скролл, если центр блока находится близко к центру viewport
		if (Math.abs(sliderCenter - viewportCenter) < 0) {
			lockScroll = true;
		} else {
			lockScroll = false;
		}
	}

	window.addEventListener('scroll', checkSliderPosition);

	window.addEventListener('wheel', function (e) {
		checkSliderPosition();
		if (lockScroll && !isEnd) {
			let delta = e.deltaY;
			let currentTranslate = productsSlider.translate;
			let newTranslate = delta > 0
				? currentTranslate - 100
				: currentTranslate + 100;

			productsSlider.translateTo(newTranslate, 10);
			e.preventDefault();
		}
	}, { passive: false });

	const scrollThreshold = 1000; // Пороговая координата скролла

	window.addEventListener('scroll', function () {
		if (isEnd) {
			isEnd = true;
			return;
		}

		if (!isEnd && window.scrollY >= rect.top+600 + window.pageXOffset) {
			window.scrollTo({
				top: rect.top+700 + window.pageXOffset,
				behavior: "instant",
			});
		}
	});
};
