

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

/*let test = document.querySelectorAll(".name--container > label");
console.log(test);*/


/*
* Add to homescreen
* */

// Register service worker to control making site work offline

if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function() { console.log('Service Worker Registered'); });
}


let deferredPrompt;
const addBtn = document.querySelector('.install-homescreen > .add-button');
const addBtnBG = document.querySelector('.install-homescreen--container');
addBtn.style.display = 'none';
addBtnBG.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';
    addBtnBG.style.display = 'block';

    addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        addBtnBG.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});

window.addEventListener('appinstalled', (evt) => {
    console.log('a2hs installed');
});