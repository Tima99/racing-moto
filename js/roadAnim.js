import collision from "./collisions.js"

let roadObject;
 
const roadAnim = (roadObj)=>{
    roadObject = roadObj; // road object
}

let progress = 0 , start = null;
function moveRoad(timestamp){
    if( start == null) start = timestamp
    progress = Math.floor((timestamp - start)/2);
    start = timestamp;
    
    if(gameOver){
        cancelAnimationFrame(roadAnimFrame)
        return;
    }

    road.moveY += road.speed * progress;
    roadObject.style.backgroundPosition = `0 ${road.moveY}px`;
    collision() // detect collsion player-vehicle with other vehicles
    if(moveBike)
    handleRotate();

    roadAnimFrame = requestAnimationFrame(moveRoad)
}

export default roadAnim;
export { moveRoad }



