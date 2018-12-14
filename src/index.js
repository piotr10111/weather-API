/* eslint no-console: 0 */
import './scss/style.scss';

const api = `http://api.openweathermap.org/data/2.5/weather?q=`;
const apiKey = `&APPID=254f5cfa909ce84a6c0a52b555b0ce5c`;
const units = `&units=metric`;

const loadWeather = () => {
  const input = document.querySelector('.search__input').value;
  const url = `${api}${input}${units}${apiKey}`;
  console.log(input);

  fetch(url)
    .then(res => {
      res.json();

      if (!res.ok) {
        throw Error(res.statusText);
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};

const setup = () => {
  const button = document.getElementById('search__button');
  if (button) {
    button.addEventListener('click', event => {
      event.preventDefault();
      loadWeather();
      
    });
  }
};

setup();
