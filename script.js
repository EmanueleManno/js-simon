//PROVO A VEDERE SE FUNZIONA
console.log('JS OK');

//RECUPERIAMO GLI ELEMENTI CHE CI SERVONO:
const timer = document.getElementById('display');
const numberBox = document.getElementById('numbers');
const simonSays = document.getElementById('simonsays');
const userInput = document.getElementById('userinput');
const wasNumbers = document.getElementById('wasnumbers');

//SETTO IL TIMER DEI SECONDI A 30:
let seconds = 5;

//PREPARO IL MESSAGGIO DEL GIOCO:
simonSays.innerText = 'Questi sono i numeri che devi memorizzare: ';

//STAMPO IN PAGINA IL TIMER:
timer.innerText = seconds;

//PREPARO UNA LISTA VUOTA PER GENERARE I NUMERI:
const numbers = [];

//PREPARO UNA LISTA VUOTA PER RACCOGLIERE I NUMERI INSERITI DALL'UTENTE:
const userListNumbers = [];

//CICLO FOR PER LA GENERAZIONE DEI NUMERI:
for (let i = 0; numbers.length < 5; i++) {

//GENERO UN NUMERO CASUALE:
const randomNumbers = Math.floor(Math.random() * 100) + 1;

if (!numbers.includes(randomNumbers)) 
//INSERISCO NELLA LISTA
numbers.push(randomNumbers);

//STAMPO IN CONSOLE:
console.log(randomNumbers);

//LI STAMPO NELLA PAGINA:
numberBox.innerText = numbers;
}

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
        simonSays.innerText = 'Indovina i numeri!';
        numberBox.innerText = '';
        //SPARO I CORIANDOLI:
        confetti ({particleCount: 1000, spread: 360})
    }
}, 1000)

//FUNZIONE PER L'INPUT
const inputCountdown = setInterval (() => {
    //DECREMENTO IL CONTATORE:
    if (seconds === -1) {
        //CHIEDERE ALL'UTENTE DI INSERIRE I NUMERI:
        const userNumberInput = parseInt(prompt('Inserisci i numeri che ti ricordi'));
        console.log(userNumberInput);
        userInput.innerText = 'I numeri da te inseriti sono: ' + userNumberInput;
        wasNumbers.innerText = 'I numeri che dovevi indovinare sono: ' + randomNumbers;
    }
}, 1000)



