// Para el numero secreto:
const secretNumber = document.getElementById('secret-number');
const randomNumber = Math.trunc(Math.random() * 20);

// secretNumber.textContent = randomNumber;

const checkBtn = document.querySelector('#check-btn');
const message = document.querySelector('#message');

let score = 20;
const scoreSpan = document.querySelector('#score-number');


checkBtn.addEventListener('click', function() {
    const input = document.querySelector('#floatingInput');
    const response = Number(input.value);
    score--;
    scoreSpan.textContent = score;

    if(randomNumber === response) {
        message.textContent ='Correcto! 🥳';
        // message.style.backgroundColor= '#e8e8e8';
        message.classList= 'alert alert-success';
        checkBtn.disabled = true;
    } else if(randomNumber > response) {
        message.textContent ='Intenta con un numero más grande 📈';
        message.classList= 'alert alert-danger';
        
    } else if(randomNumber < response) {
        message.textContent ='Intenta con un numero más pequeño 📉';
        message.classList= 'alert alert-danger';
    }

    if(score === 0) {
        message.textContent ='GAME OVER! 😔';
        message.classList= 'alert alert-warning';
        checkBtn.disabled = true;
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
})