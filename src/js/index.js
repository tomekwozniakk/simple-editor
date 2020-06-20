import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


const save = document.querySelector('.save--js');
const load = document.querySelector('.load--js');
const textArea = document.querySelector('.form__area--js');

save.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('entry', textArea.value);
} )

load.addEventListener('click', (e) => {
    e.preventDefault();
    textArea.value = localStorage.getItem('entry', textArea.value);
})