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

/* 	const redirect = document.querySelector(".swiper-wrapper");
	redirect.addEventListener('click', function() {
		openModal();
}) */

	// // Слайдер изделий
	// const productsSlider = new Swiper('.products-slider', {
	// 	freeMode: {
	// 		enabled: true,
	// 		sticky: true,
	// 	},
	// 	mousewheel: {
	// 		invert: false,
	// 	},
	// 	spaceBetween: 80,
	// 	slidesPerView: 2,
	// 	slidesPerGroup: 1,

	// 	breakpoints: {
	// 		320: {
	// 			slidesPerView: 2,
	// 		},

	// 		601: {
	// 			slidesPerView: 3,
	// 		},

	// 		768: {
	// 			slidesPerView: 4,
	// 		},

	// 		991: {
	// 			slidesPerView: 5,
	// 		},
	// 	}
	// });

	const productsSlider = new Swiper('.products-slider', {
    freeMode: {
        enabled: true,
    },
    mousewheel: {
        invert: false,
    },
    spaceBetween: 60,
    slidesPerView: 3
});

let isEndReached = false;
let lockScroll = false;

// Функции для обработки достижения конца и начала
productsSlider.on('reachEnd', function () {
    isEndReached = true;
});

productsSlider.on('reachBeginning', function () {
    isEndReached = true;
});

productsSlider.on('fromEdge', function () {
    isEndReached = false;
});

// Функция для проверки, находится ли центр блока в центре viewport
function checkSliderPosition() {
    const rect = document.querySelector('.products-slider').getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Вычисляем центр блока и центр viewport
    const sliderCenter = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;

    // Блокируем скролл, если центр блока находится близко к центру viewport
    if (Math.abs(sliderCenter - viewportCenter) < 0) { // Точность можно регулировать
        lockScroll = true;
				console.log("center");
    } else {
        lockScroll = false;
    }
}

// Обновляем состояние при скролле и изменении размера окна
// window.addEventListener('scroll', checkSliderPosition);

// Обработка скролла колесиком мыши
// window.addEventListener('wheel', function (e) {

// 	checkSliderPosition()

//     if (lockScroll && !isEndReached) {
//         // Определяем направление скролла
//         let delta = e.deltaY;

//         // Получаем текущее смещение
//         let currentTranslate = productsSlider.translate;

//         // Вычисляем новое значение смещения
//         let newTranslate = delta > 0
//             ? currentTranslate - 100
//             : currentTranslate + 100;

//         // Перемещаем слайдер к новому положению, используя swiper.translateTo
//         productsSlider.translateTo(newTranslate, 10);

//         // Предотвращаем вертикальный скролл
//         e.preventDefault();
//     }
// }, { passive: false });


const scrollThreshold = 1000; // Пороговая координата скролла

window.addEventListener('scroll', function () {

	if (isEndReached) {
		isEndReached = true;
		return;
	}

	// if (!isEndReached && window.scrollY >= 1100+window.pageXOffset) {
	// 	window.scrollTo({
	// 		top: 1100+window.pageXOffset,
	// 		behavior: "instant",
	// 	});
  //   }
	});
});