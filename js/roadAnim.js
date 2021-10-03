import collision from "./collisions.js"

let roadObject;
 
const roadAnim = (roadObj)=>{
    roadObject = roadObj; // road object
}

function moveRoad(){

    if(gameOver){
        cancelAnimationFrame(roadAnimFrame)
        return;
    }

    road.moveY += road.speed;
    roadObject.style.backgroundPosition = `0 ${road.moveY}px`;
    collision() // detect collsion player-vehicle with other vehicles

    requestAnimationFrame(moveRoad)
}

export default roadAnim;
export { moveRoad }



