let bar = document.querySelector(".bar");
let bullet = document.querySelector(".bullets");
let boxes = document.querySelectorAll(".box");
let movingCompos = document.querySelector(".moving-compos");



let count = 0, blockX = 0, blockY = 10;


boxes.forEach((box) => {
    if (count % 16 == 0) {
        blockX = 0;
        blockY += 34;
    }
    box.style.position = "absolute";
    box.style.left = `${blockX}px`;
    box.style.top = `${blockY}px`;
    blockX += 85;
    count++;
})





let h2Begin = document.createElement("h2");
let h2End = document.createElement("h2");
let para = document.createElement("p");
let bullets = [];

h2Begin.innerText = "Press 'Enter' or 'Click' anywhere to start";

let body = document.querySelector("body");

h2End.innerText = "";
body.appendChild(h2End);
h2End.style.zIndex = "100";
h2End.style.fontWeight = "400";
h2End.style.position = "absolute";
h2End.style.top = "50%";
h2End.style.left = "41.5%";
h2End.style.color = "#fff";


body.appendChild(h2Begin);
h2Begin.style.zIndex = "100";
h2Begin.style.fontWeight = "400";
h2Begin.style.position = "absolute";
h2Begin.style.top = "42%";
h2Begin.style.left = "31.5%";
h2Begin.style.color = "#fff";


para.innerHTML = "<p><b>Instructions:</b></br>1. Hold The Bar And Move The Mouse To Move </br>2.  Refresh To Play Again   </br>3. Do Not Play This On A Phone  </p>";
body.appendChild(para);
para.style.zIndex = "100";
para.style.textAlign = "start";
para.style.fontWeight = "400";
para.style.position = "absolute";
para.style.top = "52%";
para.style.left = "31.5%";
para.style.color = "#fff";





let barPosition = bar.getBoundingClientRect().left;
let gameStarted = false;

document.addEventListener("keyup", (event) => {

    if (event.key === "Enter" && !gameStarted) {
        gameStarted = true;
        h2Begin.innerText = "";
        para.innerText = "";
        gamePlay();

    };
})
document.addEventListener("click", (event) => {

    if (!gameStarted) {
        gameStarted = true;
        h2Begin.innerText = "";
        para.innerText = "";
        gamePlay();
    }

})

document.addEventListener("keyup", (event) => {
    if (gameStarted) {
        if (event.key === "ArrowRight") {
            barPosition += 45;
            bar.style.left = `${barPosition}px`;
        }
        if (event.key === "ArrowLeft") {

            barPosition -= 45;
            bar.style.left = `${barPosition}px`;
        }
    }
})

bar.addEventListener("mousedown", mouseDownHandler);

function mouseDownHandler(e) {
    offsetX = e.clientX - bar.getBoundingClientRect().left;
    offsetY = e.clientY - bar.getBoundingClientRect().top;


    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mouseup", mouseUpHandler);
}

function mouseUpHandler(e) {
    window.removeEventListener("mousemove", mouseMoveHandler);
    window.removeEventListener("mouseup", mouseUpHandler);
}

var barLeft;

function mouseMoveHandler(e) {
    if (e.clientX - offsetX > "1300" || e.clientX - offsetX < "6" || !gameStarted) return;
    bar.style.left = `${e.clientX - offsetX}px`;
    barLeft = bar.style.left;
}




const gamePlay = () => {
    if (gameStarted) {
    setInterval(() => {
        createBullet();
    }, 200);

    }
}

const createBullet = () => {
    let newBullet = document.createElement("div");
    newBullet.style.left = `${bar.getBoundingClientRect().left+24.5}px`;
    newBullet.classList.add("bullets");
    console.log(bar.style.left);
    movingCompos.appendChild(newBullet);
    throwBullet(newBullet);
}

const throwBullet = (newBullet) => {
    let bulletY = 60.8;

    setInterval(() => {
        newBullet.style.bottom = `${bulletY}px`;
        bulletY += 2;

        checkCollision();
    }, 4);
}




const checkCollision = () =>{
    
}