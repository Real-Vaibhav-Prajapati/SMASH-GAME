let currBugTile;
let currCoinTile;
let score = 0;
let gameover = false;

window.onload = function() {
    setGame();
}

function setGame() {
    //set grid for game board
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setBug,900); //for 0.9 s
    setInterval(setCoin,900);
}

function getRandomTile() {
    //math random generates number btw 0 and 1
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setCoin() {
    if (gameover) {
        return;
    }

    if (currCoinTile){
        currCoinTile.innerHTML = ""; //it will clear previous bugs
    }
    let coin = document.createElement("img");
    coin.src = "./coin.png";
    let num = getRandomTile();
    if (currBugTile && currBugTile.id == num) {
        return;
    }
    currCoinTile = document.getElementById(num);
    currCoinTile.appendChild(coin);
}

function setBug() {
    if (gameover) {
        return;
    }
    if (currBugTile){
        currBugTile.innerHTML = "";
    }
    let bug = document.createElement("img");
    bug.src = "bug.png";
    let num = getRandomTile();
    if (currCoinTile && currCoinTile.id == num) {
        return;
    }
    currBugTile = document.getElementById(num);
    currBugTile.appendChild(bug);
}

function selectTile() {
    if (gameover) {
        return;
    }
    if (this == currCoinTile) {
        score +=50;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currBugTile) {
        document.getElementById("score").innerText ="GAMEOVER:" + score.toString();
        gameover = true;
    }
}