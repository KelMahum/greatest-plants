// Импорт функционала ====================================================================================================================================================================================================================================================================================================
// Вспомогательные функции
import { isMobile, menuClose, getHash } from "../functions.js";
//==============================================================================================================================================================================================================================================================================================================================

// Модуль плавной проктутки к блоку

// Подключение дополнения для увеличения возможностей
// Документация: https://github.com/cferdinandi/smooth-scroll
// import SmoothScroll from 'smooth-scroll';

// Функция
export let gotoBlock = (targetBlock, noHeader = false, speed = 500, offset = 0) => {
	const targetBlockElement = document.querySelector(targetBlock);
	if (targetBlockElement) {
		let headerItem = '';
		let headerItemHeight = 0;
		//OffsetHeader
		if (noHeader) {
			headerItem = 'header.header';
			headerItemHeight = document.querySelector(headerItem).offsetHeight;
		}
		let options = {
			speedAsDuration: true,
			speed: speed,
			header: headerItem,
			offset: offset,
			easing: 'easeOutQuad',
		};
		// Закрываем меню, если оно открыто
		document.documentElement.classList.contains("menu-open") ? menuClose() : null;

		// Прокрутка с использованием дополнения
		// new SmoothScroll().animateScroll(targetBlockElement, '', options);

		// Прокрутка стандартными средствами
		window.scrollTo({
			top: headerItemHeight ? targetBlockElement.getBoundingClientRect().top - headerItemHeight : targetBlockElement.getBoundingClientRect().top,
			behavior: "smooth"
		});

	} else {
		console.log(`[gotoBlock]: Такого блока нет на странице: ${targetBlock}`);
	}
};