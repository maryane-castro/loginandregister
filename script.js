const capa = document.querySelector('.capa');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');






registerLink.addEventListener('click', register) 


function register(){
    capa.classList.remove('active');
}