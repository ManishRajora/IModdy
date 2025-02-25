const install_btn = document.querySelectorAll('.install_btn');
const install_window = document.getElementById('install_window');
const overlay = document.querySelector('.overlay');
const telegram = document.querySelector('.join_telegram');
const instagram = document.querySelector('.join_instagram');
const youtube = document.querySelector('.subscribe_youtube');
const download = document.querySelector('.download_app');
const progress_container = document.querySelector('.progress_container');
const progress_bar = document.querySelector('.progress_bar');

download.disabled = true;

let telegram_check = localStorage.getItem('telegram_check') === 'true';
let instagram_check = localStorage.getItem('instagram_check') === 'true';
let youtube_check = localStorage.getItem('youtube_check') === 'true';
let install_window_visible = localStorage.getItem('install_window_visible') === 'true';
let no_scroll = localStorage.getItem('no_scroll') === 'true';

if(telegram_check){
    telegram.style.backgroundColor = 'green';
    telegram.disabled = true;
}
if(instagram_check){
    instagram.style.backgroundColor = 'green';
    instagram.disabled = true;
}
if(youtube_check){
    youtube.style.backgroundColor = 'green';
    youtube.disabled = true;
}
if(install_window_visible){
    install_window.style.display = 'block';
    overlay.style.display = 'block';
}
if(no_scroll){
    document.body.classList.add('no-scroll');
}
check();

const show_install_window = function (){
    install_window.style.display = 'block';
    overlay.style.display = 'block';
    localStorage.setItem('install_window_visible', 'true');
    localStorage.setItem('no_scroll', 'true');
    document.body.classList.add('no-scroll');
    
    /* overlay and install window pop up on visible viewport */
    const scroll_Y = window.scrollY || window.pageYOffset;
    install_window.style.top = `calc(50% + ${scroll_Y}px)`;
    overlay.style.top = `${scroll_Y}px`;
}

const hide_install_window = function (){
    install_window.style.display = 'none';
    overlay.style.display = 'none';
    localStorage.setItem('install_window_visible', 'false');
    localStorage.setItem('no_scroll', 'false');
    document.body.classList.remove('no-scroll');
}

const redirect_to_telegram = function (){
    localStorage.setItem('telegram_check', 'true');
    telegram.style.backgroundColor = 'green';
    telegram_check = true;
    check();
    telegram.disabled = true;
    window.location.href = "https://www.telegram.com";
}

const redirect_to_instagram = function (){
    localStorage.setItem('instagram_check', 'true');
    instagram.style.backgroundColor = 'green';
    instagram_check = true;
    check();
    instagram.disabled = true;
    window.location.href = "https://www.instagram.com";
}

const redirect_to_youtube = function (){
    localStorage.setItem('youtube_check', 'true');
    youtube.style.backgroundColor = 'green';
    youtube_check = true;
    check();
    youtube.disabled = true;
    window.location.href = "https://www.youtube.com";
}

function check(){
    if(telegram_check && instagram_check && youtube_check){
        download.disabled = false;
    }else{
        download.disabled = true;
    }
}

for(let i = 0 ; i < install_btn.length ; i++){
    install_btn[i].addEventListener('click', show_install_window);
}
overlay.addEventListener('click', hide_install_window);

telegram.addEventListener('click', redirect_to_telegram);
instagram.addEventListener('click', redirect_to_instagram);
youtube.addEventListener('click', redirect_to_youtube);

download.addEventListener('click', function(){
    localStorage.removeItem('telegram_check');
    localStorage.removeItem('instagram_check');
    localStorage.removeItem('youtube_check');
    localStorage.removeItem('install_window_visible');
    localStorage.removeItem('no_scroll');

    telegram.style.backgroundColor = 'rgb(6, 147, 241)';
    instagram.style.backgroundColor = 'rgb(244, 58, 7)';
    youtube.style.backgroundColor = 'red';

    telegram.disabled = false;
    instagram.disabled = false;
    youtube.disabled = false;

    telegram_check = false;
    instagram_check = false;
    youtube_check = false;
    install_window_visible = false;
    no_scroll = false;

    download.disabled = true;
    
    progress_container.style.display = 'block';
    let progress = 0;
    const interval = setInterval(function (){
        progress += 1;
        progress_bar.style.width = progress + '%';
        if(progress == 120){
            clearInterval(interval);
            progress_container.style.display = 'none';
            hide_install_window();
            alert('Download Complete');
        }
    }, 50);
});