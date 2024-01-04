let index = 0, interval = 1000;

const colors = ["#a10100", "#f33c04", "#ffc11f"] 

const rand = (min, max) =>{

        return Math.floor(Math.random() *(max-min +1)) + min;
}

const animate = (fire) => {
    fire.style.setProperty("--fire-left", `${rand(-10,100)}%`);
    fire.style.setProperty("--fire-top", `${rand(-40,80)}%`);
    path = fire.children[0].children[0];
    console.log(path)
    path.style.setProperty("--fire-color", colors[Math.floor(Math.random()*colors.length)]);

    fire.style.animation = "none";
    fire.offsetHeight;
    fire.style.animation = "";

}

for(const fire of document.getElementsByClassName("magic-fire")){
    setTimeout( ()=>{
        animate(fire);
        setInterval( ()=>{animate(fire)}, 1000);
    }, index++ * (interval/3));

}