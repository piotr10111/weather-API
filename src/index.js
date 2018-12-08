/* eslint no-console: 0 */

import './scss/style.scss';

console.log(`I'm a silly entry point`);
const arr = [ 1, 2, 3 ];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

if( window.innerWidth <= 850 ) {
    const hide = function hide() {
        const ul = document.querySelector( '.nav__list' );
        ul.classList.toggle( 'nav__list--block' );

        const button = document.querySelector( '.header__button' );
        button.classList.toggle( 'header__button--close' );
    };

    const links = Array.from( document.querySelectorAll( '.clicked' ) );
    links.forEach( (link) => link.addEventListener( 'click', hide ) );
}