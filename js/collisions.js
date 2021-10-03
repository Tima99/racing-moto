// collision function is call from roadAnim.js file

function collision(){
    
    vehicles.forEach((vehicle , index)=>{

        if( player.posY < (vehicle.enemyVehicle.posY + vehicle.enemyVehicle.height) &&
            (player.posY + player.height) > vehicle.enemyVehicle.posY &&
            player.posX < (vehicle.enemyVehicle.posX + vehicle.enemyVehicle.width - 42) &&
            (player.posX + player.width) > vehicle.enemyVehicle.posX + 42
          ){
           gameOver = true;
           bikeSound.pause();
           document.querySelector('.menu-container').style.display = 'flex';
           document.querySelector(".play").addEventListener("click" , ()=>{ window.location.reload() })
        }      

    })
}

export default collision;
