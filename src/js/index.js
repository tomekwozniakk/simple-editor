import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


const save = document.querySelector('.save--js');
const load = document.querySelector('.load--js');
const textArea = document.querySelector('.form__area--js');

const currentValue = localStorage.getItem('entry');

if(currentValue) {
    document.querySelector('.info--js').innerHTML = 'ℹ️';
}

save.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('entry', textArea.value);
    if(textArea.value) {
        document.querySelector('.info--js').innerHTML = 'ℹ️';
    } else {
        document.querySelector('.info--js').innerHTML = '';
    }
} )

load.addEventListener('click', (e) => {
    e.preventDefault();
    textArea.value = localStorage.getItem('entry', textArea.value);
})