

/*
* Toglle mobile hamburger menu to close x
* */
var navtoggle = document.getElementById('navtoggle');
var navtoggle_text = document.getElementById('navtoggle_text');

navtoggle.addEventListener('change', (event) => {
    if (event.target.checked) {
        navtoggle_text.innerHTML= '×';
        navtoggle_text.style.fontSize = '40px';
    } else {
        navtoggle_text.innerHTML = '|||';
        navtoggle_text.style.fontSize = '24px';
    }
});

//nav stick to top on scroll fonction
window.onscroll = function(){myFunction()};
var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;
function myFunction(){
    if (window.pageYOffset>=sticky) {
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}


/*
* Gallery
*/

const images = document.getElementsByClassName('image--container');
const image_left = document.getElementsByClassName('image-left');
const image_right = document.getElementsByClassName('image-right');

let count = 0;
const length = images.length-1;

image_left[0].addEventListener('click', ()=>{
    count--;
    images[count+1].classList.add('gallery-invisible');
    images[count+1].classList.remove('gallery-visible');
    if (count === 0) {
        image_left[0].classList.add('invisible');
        image_left[0].classList.remove('visible');
    } else {
        image_right[0].classList.add('visible');
        image_right[0].classList.remove('invisible');
    }
    console.log(count);
});
image_right[0].addEventListener('click',()=>{
    count++;
    images[count].classList.add('gallery-visible');
    images[count].classList.remove('gallery-invisible');
    if (count === length) {
        image_right[0].classList.add('invisible');
        image_right[0].classList.remove('visible');
        images[count].classList.add('gallery-visible');
        images[count].classList.remove('gallery-invisible');
} else {
    image_left[0].classList.add('visible');
    image_left[0].classList.remove('invisible');
}
console.log(count);
});


let quote_image = document.querySelectorAll('.profile-quotes--container .profile-quotes .profile-quotes-quotes-image--container > img:hover');
console.log(quote_image);