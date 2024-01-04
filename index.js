let index = 0, interval = 1000;

const rand = (min, max) =>{

        return Math.floor(Math.random() *(max-min +1)) + min;
}

for(const fire of document.getElementsByClassName("magic-fire")){
    setInterval( ()=>{
        fire.style.setProperty("--fire-left", `${rand(-10,100)}`);
        fire.style.setProperty("--fire-top", `${rand(-40,80)}`);


        fire.style.animation = "none";
        fire.offsetHeight;
        fire.style.animation = "";

    }, 1000)
}