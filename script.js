const install_btn = document.querySelectorAll('.install_btn');
const install_window = document.getElementById('install_window');
const overlay = document.querySelector('.overlay');
const telegram = document.querySelector('.join_telegram');
const instagram = document.querySelector('.join_instagram');
const youtube = document.querySelector('.subscribe_youtube');

let download = document.querySelector('.download_app').disabled = true;
let telegram_check = false;
let instagram_check = false;
let youtube_check = false;

const show_install_window = function (){
    install_window.style.display = 'block';
    overlay.style.display = 'block';
}

const hide_install_window = function (){
    install_window.style.display = 'none';
    overlay.style.display = 'none';
}

const redirect_to_telegram = function (){
    window.location.href = "https://www.telegram.com";
    telegram.style.backgroundColor = 'green';
    telegram_check = true;
}

const redirect_to_instagram = function (){
    window.location.href = "https://www.instagram.com";
    instagram.style.backgroundColor = 'green';
    instagram_check = true;
}

const redirect_to_youtube = function (){
    window.location.href = "https://www.youtube.com";
    youtube.style.backgroundColor = 'green';
    youtube_check = true;
}

function check(){
    if(telegram_check && instagram_check && youtube_check){
        download = document.querySelector('.download_app').disabled = false;
    }
    else{
        alert('Join all the platforms to download the app');
    }
}

for(let i = 0 ; i < install_btn.length ; i++){
    install_btn[i].addEventListener('click', show_install_window);
}
overlay.addEventListener('click', hide_install_window);

telegram.addEventListener('click', redirect_to_telegram);
instagram.addEventListener('click', redirect_to_instagram);
youtube.addEventListener('click', redirect_to_youtube);
check();
