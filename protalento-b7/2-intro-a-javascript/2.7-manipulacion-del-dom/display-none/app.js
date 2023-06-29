const loginButton = document.querySelector('.button');
const form = document.querySelector('form');
const accountDiv = document.querySelector('.account');
loginButton.addEventListener('click', function(){
    form.style.display = 'none';
    accountDiv.style.display = 'block';
})

// query params
// local storage y session storage