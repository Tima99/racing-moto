import GameObject from "./game-objects.js"
import addControls from "./bike-controls.js"
import roadAnim , {moveRoad} from "./roadAnim.js"

import vehicleAI from "./vehicleAI.js"

MainContainer : {
    main_container = document.createElement("div")
    document.body.appendChild(main_container)
    main_container.classList.add("full" ,"flex-center" ,"abs");
}

GameContainer : {
    game_container = document.createElement("div")
    main_container.appendChild(game_container)
    game_container.classList.add("game-container");

}

const gameObject = new GameObject();

const road = gameObject.road();
game_container.appendChild(road);

const bike = gameObject.bike();
game_container.appendChild(bike);
player.moveX = bike.offsetLeft
player.posX  = player.moveX
player.posY  = bike.offsetTop;
player.width = bike.offsetWidth;
player.height = bike.offsetHeight;

const car = gameObject.vehicle("car");

const handle = gameObject.handle();
game_container.appendChild(handle);




roadAnim(road); // set road object

document.querySelector(".play").addEventListener("click" , start)
function start(){

        // make the element go to full-screen mode
        document.body.requestFullscreen()
        .then(function() {
        })
        .catch(function(error) {
            console.log(error);
        });

    document.querySelector(".play").style.borderLeftColor = 'red';
    document.querySelector(".menu-container").style.display = 'none';
    roadAnimFrame = requestAnimationFrame(moveRoad) // animate road
    // push vehicles
    vehicles.push(new vehicleAI);
    vehicles[0].create();

    // add controls to handles
    addControls(handle , bike)
    bikeSound.load()
    bikeSound.play();
    document.querySelector(".play").removeEventListener("click" , start)
}
