var main_container , game_container;

let player = {
    moveX  : 0,
    speed  : 1,
    offset : 8, // vehicle away from road when collide with road
    posX   : 0,
    posY   : 0,
    width  : 0,
    height : 0,
}

let score = 0;

let gameOver = false;
let roadAnimFrame= null;
const bikeSound = new Audio("./assets/bike-sound.mp3");


let road ={
    moveY : 0,
    speed : 2,
}

const vehicles = []


function rand(max = 2 , min = 0){
    return Math.floor(Math.random()*(max - min) + min);
}

