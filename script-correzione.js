//VEDO SE FUNZIONA:
console.log('JS OK');

//FUNZIONE PER GENERARE NUMERI RANDOM DIVERSI:
const generaNumeriCasuali = (min, max, tot) =>  {
    const numbers = [];

    while(numbers.length < tot){
        let randomNumber;
        do {
        randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    } while(numbers.includes(randomNumber));
    numbers.push(randomNumber);
    }
    return numbers;
}

//QUESTI SONO I NUMERI:
const randomNumbers = generaNumeriCasuali(1, 100, 5);
console.log(randomNumbers);


//FUNZIONE CHE CHIEDE ALL'UTENTE I NUMERI DIVERSI DA PROMPT:
const generaNumeriCasualiUtente = (min, max, tot) => {
    const numbers = [];
    while(numbers.length < tot){
        let userNumber;
        do {
            userNumber = parseInt(prompt(`Inserisci un numero da ${min} a ${max}`).trim());
        }  while(isNaN(userNumber) || userNumber < min || userNumber > max);
        if(!numbers.includes(userNumber)) numbers.push(userNumber);
    }
    return numbers;
}

//RECUPERIAMO GLI ELEMENTI CHE CI SERVONO:
const timer = document.getElementById('display');
const numberBox = document.getElementById('numbers');
const simonSays = document.getElementById('simonsays');
const form = document.getElementById('solutions-form');
const inputs = document.querySelectorAll('input');

//PREPARAZIONE:
const min = 1;
const max = 100;
const totalNumbers = 5;
let time = 5;

//GENERO NUMERI CASUALI:
const numbers = generaNumeriCasuali(min, max, totalNumbers);
console.log(numbers);

//PREPARO IL MESSAGGIO DEL GIOCO:
simonSays.innerText = 'Questi sono i numeri che devi memorizzare: ';

//PREPARO LA LISTA DEI NUMERI E MAN MANO LI AGGIUNGO:
let items = '';
for(let i = 0; i < totalNumbers; i++){
    items += `<li>${numbers[i]}</li>`;
}

//STAMPA IN PAGINA:
numberBox.innerHTML = items;

//CONTO ALLA ROVESCIA:
timer.innerText = time;
const interval = setInterval(() => {
    if (time === 0) {
        clearInterval(interval);
        timer.innerText = 'GIOCA!';
        simonSays.innerText = 'Indovina i numeri!';
        numberBox.innerText = '';
        //SPARO I CORIANDOLI:
        confetti ({particleCount: 1000, spread: 360})
        setTimeout(play, 200);
    } else {
        timer.innerText = --time;
    }
},1000);

//METTO IN ASCOLTO IL FORM:
form.addEventListener('submit', e => {
    e.preventDefault();
    //RECUPERO I VALORI:
    const userGuesses = [];

    for (let i=0; i<inputs.length; i++) {
        console.log(inputs[i]);
        const value = parseInt(inputs[i].value);
        if(!isNaN(value) >= min && value <=max && !userGuesses.includes(value)) {
            userGuesses.push(value);
        }
    }

    if(userGuesses.length !== totalNumbers) {
        alert('Sono stati inseriti valori non validi');
    }

    const correctAnswers = [];
    for (let i = 0; i < totalNumbers; i++) {
        if(numbers.includes(userGuesses[i])) correctAnswers.push(userGuesses[i]);
    }

    alert(`Hai indovinato ${correctAnswers.length} numeri (${correctAnswers})`);

    console.log(userGuesses);
})


//FUNZIONE PER GIOCARE:
const play = () => {
    //CHIEDO NUMERI ALL'UTENTE:
    const userGuesses = generaNumeriCasualiUtente(min, max, totalNumbers);

    const correctAnswers = [];
    for (let i = 0; i < totalNumbers; i++) {
        if(numbers.includes(userGuesses[i])) correctAnswers.push(userGuesses[i]);
    }

    alert(`Hai indovinato ${correctAnswers.length} numeri (${correctAnswers})`);
}

