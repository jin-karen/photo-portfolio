const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', toggleMode);


function toggleMode() {
    const body = document.body;
    body.classList.toggle('darkMode');
    const links = document.querySelectorAll('a');
    links.forEach((link) =>{
        link.classList.toggle('darkMode');
    })
    const insta = document.getElementById('insta');
    const label = document.getElementById('label');
    const ball = document.getElementById('ball');
    ball.classList.toggle('darkMode');
    coll.classList.toggle('darkMode');
    navLi.forEach((li) =>{
        li.classList.toggle("navLiDarkMode");
    });
    // can't toggle the two below - insta is img src change, label is opp background color change than darkMode
    if (insta.getAttribute('src') == 'img/insta-dark.png'){
        insta.setAttribute('src','img/insta-light.png');
        label.setAttribute('style','background-color:white');
        navContent.setAttribute('style','background-color:#38444F');
        // stores darkmode value for when changing pages
        sessionStorage.setItem('dark-mode', true);
    } else {
        insta.setAttribute('src','img/insta-dark.png');
        label.setAttribute('style','background-color:black');
        navContent.setAttribute('style','background-color:#ccc');
        // removes darkmode value for when changing pages
        sessionStorage.clear();
    }
    
}
//DOMcontentloaded makes dark mode appear slightly faster than load - still has slight delay
window.addEventListener("DOMContentLoaded", checkMode);
// sessionStorage not localStorage so value only applies for current browser
// checks local to see if darkmode is set to keep same mode for new page
function checkMode() {
    if (sessionStorage.getItem('dark-mode')) {
        document.getElementById("checkbox").checked = true;
        toggleMode();
    }
}

const coll = document.getElementById("collapsible");
const navContent = document.getElementById("navContent");
const navLi = document.querySelectorAll(".navLinks");

coll.addEventListener("click", function() {
    this.classList.toggle("active");
    if (navContent.style.display === "block") {
        navContent.style.display = "none";
    } else {
        navContent.style.display = "block";
    }
});
    
