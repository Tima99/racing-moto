let isMouseDown = false;
let moveY = 0,
    startY = 0,
    previousStartY = 0;

let  rotateLimit = 40,
  rotation = 0,
  rotationSpeed = 2;

function addControls(handle , vehicle) {
  const handles = handle.querySelectorAll(".handle-side");

  handles.forEach((handleOne, index) => {
    //for non-touch devices
    handleOne.addEventListener("mousedown", function (e) {
      previousStartY = e.clientY;
      isMouseDown = true;
    });

    handleOne.addEventListener("mousemove", function (e) {
      e.preventDefault()
      if (isMouseDown) {
        startY = e.clientY;
        moveY = previousStartY - startY;
        direction = moveY >= 0 ? "U" : "D";
        operator = index === 0 ? "+" : "-"; // index 0 is indicates left and 1 indicates right
        if(!handleRotate)
        handleRotate = ()=> rotateHandleAnim(handle, vehicle)
        moveBike = true;
        previousStartY = startY;
      }
    });

    handleOne.addEventListener("mouseup", function (e) {
      isMouseDown = false;
      moveBike = false;
      resetHandlePos(handle);
    });

    // for touch devices
    handleOne.addEventListener("touchstart", function (e) {
      previousStartY = e.changedTouches[0].clientY;
      isMouseDown = true;
    });

    handleOne.addEventListener("touchmove", function (e) {
      e.preventDefault();
      if (isMouseDown) {
        startY = Math.floor(e.changedTouches[0].clientY);
        moveY = previousStartY - startY;
        direction = moveY >= 0 ? "U" : "D";
        // console.log(direction)
        operator = index === 0 ? "+" : "-"; // index 0 is indicates left and 1 indicates right
        if(!handleRotate)
        handleRotate = ()=> rotateHandleAnim(handle, vehicle)
        moveBike = true;
        previousStartY = startY;
        
      }
    });

    handleOne.addEventListener("touchend", function (e) {
      isMouseDown = false;
      moveBike=false;
      resetHandlePos(handle);
    });
  });
}

function rotateHandleAnim(handle, vehicle) {
  if (direction === "U") {
    if (Math.abs(rotation) <= rotateLimit)
      rotation = eval(rotation + operator + rotationSpeed) ;
    handle.style.transform = `rotate(${rotation}deg)`;
  } else if(direction === 'D') {
    let operator2 = operator == "+" ? "-" : "+"; // revert operator if minus than add ,vice-versa

    const isRotate =
      operator2 === "-" ? rotation > -rotateLimit : rotation < rotateLimit;
    if (isRotate) rotation = eval(rotation + operator2 + rotationSpeed);
    handle.style.transform = `rotate(${rotation}deg)`;
  }
  rotateVehicle(vehicle);
}

function resetHandlePos(handle) {
  rotation = 0;
  handle.style.transform = "rotate(0deg)";
}

function rotateVehicle(vehicleObject ){
  if(gameOver) return;
  if(clampVehicle(vehicleObject)) return;
  moveY = moveY > 2 ? 2 : moveY; // clamp moveY value b/w - to +2
  let vehicleSpeed_wrt_handle = player.speed * Math.abs(moveY);
  // console.log(vehicleSpeed_wrt_handle);
  if(direction === 'U'){
    player.moveX =  eval(player.moveX + operator + vehicleSpeed_wrt_handle) ; // moveY is speed of handle rotation
    vehicleObject.style.left = `${player.moveX}px`;
  }
  else if(direction === 'D'){
    operator = operator == "+" ? "-" : "+"; // revert operator if minus than add ,vice-versa
    player.moveX = eval(player.moveX + operator + vehicleSpeed_wrt_handle) ;

    vehicleObject.style.left = `${player.moveX}px`;
  }
}

function clampVehicle(vehicleObject){
    const roadWidth = game_container.offsetWidth;
    player.posX  = vehicleObject.offsetLeft;

    if(player.posX < 0 ){
      player.moveX = player.moveX + player.offset;
      vehicleObject.style.left = `${player.moveX}px`;
      return true
    }
    if(player.posX + player.width > roadWidth){
      player.moveX = player.moveX - player.offset;
      vehicleObject.style.left = `${player.moveX}px`;
      return true
    }
}

export default addControls;
