import '@/scss/index.scss';
import { initHeaderFixer } from '@/scripts/headerFixer';
import { initChoices } from '@/scripts/choices';
import { initCart } from '@/scripts/cart';


const init = () => {
    initHeaderFixer();
    initChoices();
    initCart();

};

document.addEventListener('DOMContentLoaded', init);