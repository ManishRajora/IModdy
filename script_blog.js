const home = document.querySelector('.home');
const help = document.querySelector('.help');

function back_to_home(){
    window.location.href = 'index.html';
}

function redirect_to_help(){
    window.location.href = "help.html";
}

home.addEventListener('click', back_to_home);
help.addEventListener('click', redirect_to_help);