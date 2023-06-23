const randomNumber = Math.trunc(Math.random() * 20);
const secretNumberContainer = document.getElementById('secret-number');
secretNumberContainer.textContent = randomNumber;

const checkBtn = document.querySelector('#check-btn');
const reloadBtn = document.querySelector('#reload-btn');

const message = document.querySelector('#hint')

const messages = ['Correcto! 🥳', 'Intenta un numero más grande 📈', 'Intenta un numero más pequeño 📉']

function updateMessage(index) {
    message.textContent = messages[index];
}

let score = 20;
const scoreContainer = document.querySelector('#score');

checkBtn.addEventListener('click', function() {
    const input = document.querySelector('#floatingInput');
    const response = input.value;

    if(response == randomNumber) {
        updateMessage(0);
        // message.textContent = 'Correcto! 🥳';
        message.classList = 'alert alert-success';
        // message.classList.add('otra-clase');
        // message.style.backgroundColor = '#7749CF'; background-color:
    } else if(response < randomNumber){
        updateMessage(1);
        // message.textContent = 'Intenta un numero más grande 📈';
        message.classList = 'alert alert-danger';
        score = score -1;
        scoreContainer.textContent = score;
    } else if(response > randomNumber){
        updateMessage(2);
        // message.textContent = 'Intenta un numero más pequeño 📉';
        message.classList = 'alert alert-danger';
        score = score -1;
        scoreContainer.textContent = score;
    }

    if(score == 0) {
        message.textContent = 'Perdiste 😔';
        message.classList = 'alert alert-warning';
        checkBtn.disabled = true;
        // setTimeout(() => {
        //     location.reload();
        // }, 2000);
        checkBtn.style.display = 'none';
        reloadBtn.style.display = 'inline-block';
        reloadBtn.addEventListener('click', function () {
            location.reload();
        })
    }
})