
class GameObject{

    constructor(){
        
    }

    object(imgSrc , objectName){
        const view = document.createElement("img");
        view.classList.add(`${objectName}-view` , "view");
        view.src = imgSrc;

        const object = document.createElement("div");
        object.classList.add("object");
        object.id = `${objectName}`;

        object.append(view);
        return object
    }

    road(){
        const object = document.createElement("div");
        object.classList.add("road-object" , "object");

        return object;
    }

    vehicle(objectName = "car"){
        const carObject = this.object("./assets/car1.png" , objectName);
        carObject.classList.add("car-object")
        return carObject;
    }

    bike(){
        const bikeObject = this.object("./assets/bike-blue.png" , "bike");
        bikeObject.classList.add("bike-object")
        return bikeObject;
    }

    handle(){
        let handleObject = document.createElement("div");
        let left = document.createElement("div")
        let right = document.createElement("div")

        handleObject.appendChild(left)
        handleObject.appendChild(right)

        handleObject.classList.add("handle-object" , "object" , "flex" , "left-center" , "abs-bottom");
        left.classList.add("handle-left",   "handle-side");
        right.classList.add("handle-right", "handle-side");

        return handleObject;

    }
}

export default GameObject;
