import GameObject from "./game-objects.js"


let carNumber = 0;
const vehicleAI = function(){

    this.car = null;
    this.enemyVehicle = {
        moveY : -200,
        speed : 3,
        posX  : 15 * 16,
        posY  : 0,
        width : 0,
        height: 0,
        frameHold : null,
        pushAnother : 0,
       
    }
    this.move = null;

    this.create = function () {
        const random = rand();
        this.enemyVehicle.posX = random ? rand(15 , 13) * 16 : 4 * 16;
        this.enemyVehicle.pushAnother = vehicles.length < 2 ? random : this.enemyVehicle.pushAnother;
        
        const game_object = new GameObject()
        this.car = game_object.vehicle(`car${carNumber++}`)
        game_container.appendChild(this.car);
        this.car.style.left = `${this.enemyVehicle.posX}px`;

        this.enemyVehicle.width = this.car.offsetWidth;  //sets width and height to variable for detect in collision
        this.enemyVehicle.height = this.car.offsetHeight;

        // when create than move
        vehicles[vehicles.length - 1].enemyVehicle.frameHold = requestAnimationFrame(()=>{vehicles[vehicles.length-1].move()});

    }

    this.move = function(){
        const isOffside = this.checkVehicleOffsideScreen()
        if(isOffside) return;
        this.enemyVehicle.moveY += this.enemyVehicle.speed;
        this.car.style.top = `${this.enemyVehicle.moveY}px`

        // sets its values
        this.enemyVehicle.posY  = this.enemyVehicle.moveY;
        

        // if push another is true
        if(this.enemyVehicle.pushAnother && this.enemyVehicle.moveY > game_container.offsetHeight / 2){
            this.enemyVehicle.pushAnother = 0
            this.pushAnotherVehicle();
        }

        requestAnimationFrame(()=> { this.move() })
    }

    this.checkVehicleOffsideScreen =  function(){
        if(gameOver) {
            cancelAnimationFrame(this.enemyVehicle.frameHold)
            return true;
        };
        if(this.enemyVehicle.moveY > game_container.offsetHeight){
            cancelAnimationFrame(this.enemyVehicle.frameHold)
            // remove passed car from screen
            const passedCar = vehicles.shift();
            game_container.removeChild(passedCar.car);
            score += 5;
            document.querySelector(".score-box").innerHTML = `Score : ${score}`;
            // add new vehicle
            this.pushAnotherVehicle();
            return true;
        }
    
        return false;
    }

    this.pushAnotherVehicle = function(){
        vehicles.push(new vehicleAI);
        vehicles[vehicles.length - 1].create();

    }
}

export default vehicleAI;