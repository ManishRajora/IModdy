const install_btn = document.querySelectorAll('.install_btn');
const install_window = document.getElementById('install_window');
const overlay = document.querySelector('.overlay');
const instagram_1 = document.querySelector('.join_instagram_1');
const instagram_2 = document.querySelector('.join_instagram_2');
const youtube = document.querySelector('.subscribe_youtube');
const download = document.querySelector('.download_app');
const progress_container = document.querySelector('.progress_container');
const progress_bar = document.querySelector('.progress_bar');
const help = document.querySelector('.help');
const blog = document.querySelector('.blog');
const top_btn = document.querySelector('.back_to_top');

download.disabled = true;

let instagram_1_check = localStorage.getItem('instagram_1_check') === 'true';
let instagram_2_check = localStorage.getItem('instagram_2_check') === 'true';
let youtube_check = localStorage.getItem('youtube_check') === 'true';
let install_window_visible = localStorage.getItem('install_window_visible') === 'true';
let no_scroll = localStorage.getItem('no_scroll') === 'true';

if(instagram_1_check){
    instagram_1.style.backgroundColor = 'green';
    instagram_1.disabled = true;
}
if(instagram_2_check){
    instagram_2.style.backgroundColor = 'green';
    instagram_2.disabled = true;
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

const redirect_to_instagram_1 = function (){
    localStorage.setItem('instagram_1_check', 'true');
    instagram_1.style.backgroundColor = 'green';
    instagram_1_check = true;
    check();
    instagram_1.disabled = true;
    window.location.href = "https://www.instagram.com/iyournavya?igsh=em5hODJyaTNqYWVi";
}

const redirect_to_instagram_2 = function (){
    localStorage.setItem('instagram_2_check', 'true');
    instagram_1.style.backgroundColor = 'green';
    instagram_2_check = true;
    check();
    instagram_2.disabled = true;
    window.location.href = "https://www.instagram.com/a7allgame?igsh=MWR0Mnduc250NTdpOQ==";
}

const redirect_to_youtube = function (){
    localStorage.setItem('youtube_check', 'true');
    youtube.style.backgroundColor = 'green';
    youtube_check = true;
    check();
    youtube.disabled = true;
    window.location.href = "https://youtube.com/@a7allgame?feature=shared";
}

function check(){
    if(instagram_1_check && instagram_2_check && youtube_check){
        download.disabled = false;
    }else{
        download.disabled = true;
    }
}

function redirect_to_help(){
    window.location.href = "Help.html";
}
help.addEventListener('click', redirect_to_help);

function redirect_to_blog(){
    window.location.href = "blog.html";
}
blog.addEventListener('click', redirect_to_blog);


for(let i = 0 ; i < install_btn.length ; i++){
    install_btn[i].addEventListener('click', show_install_window);
}
overlay.addEventListener('click', hide_install_window);

instagram_1.addEventListener('click', redirect_to_instagram_1);
instagram_2.addEventListener('click', redirect_to_instagram_2);
youtube.addEventListener('click', redirect_to_youtube);

download.addEventListener('click', function(){
    localStorage.removeItem('instagram_1_check');
    localStorage.removeItem('instagram_2_check');
    localStorage.removeItem('youtube_check');
    localStorage.removeItem('install_window_visible');
    localStorage.removeItem('no_scroll');

    instagram_1.style.backgroundColor = 'rgb(244, 58, 7)';
    instagram_2.style.backgroundColor = 'rgb(244, 58, 7)';
    youtube.style.backgroundColor = 'red';

    instagram_1.disabled = false;
    instagram_2.disabled = false;
    youtube.disabled = false;

    instagram_1_check = false;
    instagram_2_check = false;
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

top_btn.addEventListener('click', function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})
