const home = document.querySelector('.home');
const blog = document.querySelector('.blog');

function back_to_home(){
    window.location.href = 'index.html';
}

function redirect_to_blog(){
    window.location.href = "blog.html";
}

home.addEventListener('click', back_to_home);
blog.addEventListener('click', redirect_to_blog);