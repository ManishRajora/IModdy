const install_btn = document.querySelectorAll('.install_btn');
const install_window = document.getElementById('install_window');
const overlay = document.querySelector('.overlay');

const show_install_window = function (){
    install_window.style.display = 'block';
    overlay.style.display = 'block';
}

const hide_install_window = function (){
    install_window.style.display = 'none';
    overlay.style.display = 'none';
}

function redirect_to_telegram(){
    window.location.href = "https://www.telegram.com";
}

function redirect_to_instagram(){
    window.location.href = "https://www.instagram.com";
}

function redirect_to_youtube(){
    window.location.href = "https://www.youtube.com";
}

for(let i = 0 ; i < install_btn.length ; i++){
    install_btn[i].addEventListener('click', show_install_window);
}
overlay.addEventListener('click', hide_install_window);