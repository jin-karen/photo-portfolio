let txt = '';
let txtList = ['a passion project!','a foodie!','an explorer!','a fun hobby!','a traveler!'];
let speed = 80; // The speed/duration of the effect in milliseconds 
let pause = 1500;
let i = 0; // increment counter for typing char in txt string
let x = 0; // increment counter for deleting char in txt string
let y = 0; // increment counter for length of txtList array

// function for typewriter effect in typeDynamic DOM
function typeWriter() {
    if (i == txt.length) {
        x = txt.length;
        setTimeout(typeDeleter, pause);
    } else if (i <= txt.length) {
        document.getElementById("typeDynamic").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
};

// function for deleting text effect in typeDynamic DOM
function typeDeleter() {
    if (x == 0) {
        // move onto next text and restart typewriter effect
        if (y < txtList.length - 1) {
            y++;
            i=0;
            x=0;
        } 
        // loop through text list again when completed
        else{
            i=0;
            x=0;
            y=0;
        }
        startTypeLoop(y);
    } 
    // delete characters in current text until finished
    else if (x >= 0) {
        const typeDynamic = document.getElementById("typeDynamic");
        typeDynamic.innerHTML = typeDynamic.innerHTML.substring(0, (typeDynamic.innerHTML.length)-2);
        x--
        setTimeout(typeDeleter, speed);
    }
}

// start typewriter and deleting loop
function startTypeLoop(elem) {
    txt = txtList[elem];
    typeWriter();
}

startTypeLoop(y);

