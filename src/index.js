/* eslint no-console: 0 */
import './scss/style.scss';

const api = `http://api.openweathermap.org/data/2.5/weather?q=`;
const apiKey = `&APPID=e406ba4d8d643764cc64a2f082a84602`;
const units = `&units=metric`;

const loadWeather = () => {
    const input = document.querySelector( '.search__input' );
    const url = `${api}${input.value}${units}${apiKey}`;

    fetch( url )
        .then( res => res.json() )
        .then( data => {
            console.log( data );
        } )
}

const setup = () => {
    const button = document.getElementById( 'search__button' );
    button.addEventListener( 'click', loadWeather );
}

setup();
