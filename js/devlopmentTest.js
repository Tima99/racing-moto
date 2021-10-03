
function toggleCollidersView(){
    const colliderObject = document.querySelectorAll(".object");
    // console.log(colliderObject)
    colliderObject.forEach((object) => {
        object.classList.toggle("box-collider");
    })
}