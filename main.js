let currMoleTile; 
let currPlantTile;
let score  = 0 ; 
let gameOver = false ; 

window.onload = function() {
    setGame(); 
}

function setGame() {
    // set up the grid for the game board in html 

    for (let i=0; i < 9 ; i++ ) { // i is going from 0 to 8 & stops at nine 
        // <div id="0-8"></div>
        let tile = document.createElement("div")
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole , 1000); // 1000 milliseconds = 2 seconds 
    setInterval(setPlant, 2000) ; /// 2000 milliseconds =  3 seconds 
}

function getRandomTile() {
    // math.random -- > 0 - 1 * 9 = 0-9 round == integers
    let num = Math.floor(Math.random() * 9); 
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return ; 
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "" ; 
    }

    let mole = document.createElement("img")
    mole.src = "./images/monty-mole.png"

    let num = getRandomTile(); 
    if (currMoleTile && currMoleTile.id == num) {
        return; 
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole); 
}

function setPlant() {
    if (gameOver) {
        return; 
    }
    if (currPlantTile) {
        currPlantTile.innerHTML = "" ; 
    }

    let plant = document.createElement("img"); 
    plant.src = "./images/piranha-plant.png"; 

    let num = getRandomTile() ;  
    if (currMoleTile && currMoleTile.id == num) {
        return ; 
    }
    currPlantTile = document.getElementById(num); 
    currPlantTile.appendChild(plant); 
}

function selectTile () {
    if (gameOver) {
        return 
    }
    if (this == currMoleTile) {
        score += 10; 
        document.getElementById("score").innerText = score.toString(); // update score 
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText =  "GAME OVER: " + score.toString(); 
        gameOver = true ;
    }
}