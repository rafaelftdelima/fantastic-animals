import fetchAnimals from './modules/fetch-animals.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

import Accordion from './modules/accordion.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MobileMenu from './modules/mobile-menu.js';
import Modal from './modules/modal.js';
import ScrollAnimation from './modules/scroll-animation.js';
import SmoothScroll from './modules/smooth-scroll.js';
import StoreStatus from './modules/store-status.js';
import TabNav from './modules/tabnav.js';
import Tooltip from './modules/tooltip.js';

const accordion = new Accordion('[data-page="accordion"] dt');
const dropdownMenu = new DropdownMenu('[data-dropdown]');
const mobileMenu = new MobileMenu('[data-menu="button"]', '[data-menu="list"]');
const modal = new Modal(
    '[data-modal="open"]',
    '[data-modal="close"]',
    '[data-modal="container"]'
);
const scrollAnimation = new ScrollAnimation('[data-page="section"]');
const smoothScroll = new SmoothScroll('[data-page="navegation"] a[href^="#"]');
const storeStatus = new StoreStatus('[data-status]', 'actived');
const tabNav = new TabNav(
    '[data-page="menu"] li',
    '[data-tab="content"] section'
);
const tooltip = new Tooltip('[data-tooltip]');

accordion.init();
dropdownMenu.init();
mobileMenu.init();
modal.init();
scrollAnimation.init();
smoothScroll.init();
storeStatus.init();
tabNav.init();
tooltip.init();

fetchAnimals('../../animals-api.json', '.numbers-grid');
fetchBitcoin('https://blockchain.info/ticker', '[data-bitcoin]');
