import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const entry = localStorage.getItem('entry');
let result = '';

 if (entry) {
     result = entry;
 }

const save = document.querySelector('.save--js');
const load = document.querySelector('.load--js');
const textArea = document.querySelector('.form__area--js');
textArea.value = result;

save.addEventListener('click', () => {
    localStorage.setItem('entry', textArea.value);
} )

load.addEventListener('click', () => {
    localStorage.getItem('entry', textArea.value);
    textArea.value = entry;
})