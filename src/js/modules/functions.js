/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
    // Проверка поддержки webp
    function testWebP(callback) {
        let webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    // Добавление класса _webp или _no-webp для HTML
    testWebP(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

// ======================  Меню бургер  =========================

const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', e => {
		menu.classList.toggle('active')
		menuBtn.classList.toggle('active')
		body.classList.toggle('lock')
	})

	menu.addEventListener('click', e => {
		if (e.target.classList.contains('menu__body')) {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		}
	})

	menu.querySelectorAll('.menu__link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('active')
			menuBtn.classList.remove('active')
			body.classList.remove('lock')
		})
	})
}

/*==================  Плавная прокрутка при клике  =================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', event => {
		event.preventDefault();

		const blockID = anchor.getAttribute('href').substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
});

//==================  Табы (вкладки)  =========================

console.log( 'test' );

const tabs = document.querySelectorAll( '.tab' );
const flotations = document.querySelectorAll( '.attachment' );

for( let i=0; i < tabs.length; i++ ) {
	tabs[i].addEventListener( 'click', ( event ) => {
		
		// Удаляем класс
		let tabsCurrent = event.target.parentElement.children;
		for( let t=0; t < tabsCurrent.length; t++ ) {
			tabsCurrent[t].classList.remove( 'tab__active' );
		}

		// Добавляем класс текущий
		event.target.classList.add( 'tab__active' );

		// Удаляем класс
		let flotationsCurrent = event.target.parentElement.nextElementSibling.children;
		for( let c=0; c < flotationsCurrent.length; c++ ) {
			flotationsCurrent[c].classList.remove( 'attachment__active' );
		}
		
		// Добавляем класс текущий
		flotations[i].classList.add( 'attachment__active' );
	});
}

//=================  Фильтр  ===================

document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.filter__name');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const content = self.querySelector('.filter__choose');
			const rotate = self.querySelector('.filter__block');

			content.classList.toggle('filter__choose_active');
			rotate.classList.toggle('filter__block_active');
		});
	});
});