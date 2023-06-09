//PROVO A VEDERE SE FUNZIONA
console.log('JS OK');

//RECUPERIAMO GLI ELEMENTI CHE CI SERVONO:
const timer = document.getElementById('display');
const numberBox = document.getElementById('numbers');
const simonSays = document.getElementById('simonsays');

//SETTO IL TIMER DEI SECONDI A 30:
let seconds = 5;

//FUNZIONE PER IL TIMER:
const countdown = setInterval (() => {
    //DECREMENTO IL CONTATORE:
    timer.innerText = --seconds;
    //QUANDO ARRIVA A ZERO:
    if (seconds === 0) {
        //FAI USCIRE IL MESSAGGIO GIOCA:
        timer.innerText = 'GIOCA!';
        //STOPPATI A ZERO E NON FUNZIONARE PIU':
        clearInterval(countdown);
        //FAI SPARIRE LA SCRITTA DEI NUMERI E DI SIMON SAYS:
        simonSays.innerText = '';
        numberBox.innerText = '';
        //SPARO I CORIANDOLI:
        confetti ({particleCount: 1000, spread: 360})
    }
}, 1000)