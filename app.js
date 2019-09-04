// Play drum by keyboard press
document.addEventListener("keypress", (event)=>{
    if (event.key==="a"){
        new Audio("./sounds/clap.wav").play()
    }
    else if (event.key==="s"){
        new Audio("./sounds/hihat.wav").play()
    }
    else if (event.key==="d"){
        new Audio("./sounds/kick.wav").play()
    }
    else if (event.key==="f"){
        new Audio("./sounds/openhat.wav").play()
    }
    else if (event.key==="g"){
        new Audio("./sounds/boom.wav").play()
    }
    else if (event.key==="h"){
        new Audio("./sounds/ride.wav").play()
    }
    else if (event.key==="j"){
        new Audio("./sounds/snare.wav").play()
    }
    else if (event.key==="k"){
        new Audio("./sounds/tom.wav").play()
    }
    else if (event.key==="l"){
        new Audio("./sounds/tink.wav").play()
    }
})
// Play music by mouse click

const clap=document.getElementById("key-a");
const hihat=document.getElementById("key-s");
const kick=document.getElementById("key-d");
const openhat=document.getElementById("key-f");
const boom=document.getElementById("key-g");
const ride=document.getElementById("key-h");
const snare=document.getElementById("key-j");
const tom=document.getElementById("key-k");
const tink=document.getElementById("key-l");

clap.addEventListener("click", ()=>{
    new Audio("./sounds/clap.wav").play()
})

hihat.addEventListener("click", ()=>{
    new Audio("./sounds/hihat.wav").play()
})

kick.addEventListener("click", ()=>{
    new Audio("./sounds/kick.wav").play()
})

openhat.addEventListener("click", ()=>{
    new Audio("./sounds/openhat.wav").play()
})

boom.addEventListener("click", ()=>{
    new Audio("./sounds/boom.wav").play()
})

ride.addEventListener("click", ()=>{
    new Audio("./sounds/ride.wav").play()
})

snare.addEventListener("click", ()=>{
    new Audio("./sounds/snare.wav").play()
})

tom.addEventListener("click", ()=>{
    new Audio("./sounds/tom.wav").play()
})

tink.addEventListener("click", ()=>{
    new Audio("./sounds/tink.wav").play()
})
