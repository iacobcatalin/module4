document.addEventListener("DOMContentLoaded", start);

var menuItem;
var difX;
var difY;
var body;
var timeout;
var requestAnimationFrame = window.requestAnimationFrame;
var mouseX; 
var mouseY; 
var animationFrame;

function start() {
    menuItem = document.getElementsByClassName("menuItem")[0];
    
    body = document.body;
    body.addEventListener("mouseleave", pageLeave);
    addEventListeners();
}

function addEventListeners() {
    menuItem.addEventListener("mousedown", menuItemMouseDown);

}
function menuItemMouseDown(e) {     
    timeout = setTimeout(()=> {
        body.addEventListener("mousemove", menuItemMouseMove);
        animationFrame = requestAnimationFrame(update);
    },10);

    body.addEventListener("mouseup", menuItemUpMove);
    difX = e.clientX - menuItem.offsetLeft;
    difY = e.clientY - menuItem.offsetTop;
}

function menuItemMouseMove(e) {
    console.log(e.clientX, e.clientY);
    mouseX = e.clientX;
    mouseY = e.clientY;
}

function update(e){
    menuItem.style.top = (mouseY - difY) + "px";
    menuItem.style.left = (mouseX - difX) + "px";
    animationFrame = requestAnimationFrame(update);
}
function menuItemUpMove(e) {
    clearTimeout(timeout);
    menuItem.style.top = (e.clientY - difY) + "px";
    menuItem.style.left = (e.clientX - difX) + "px";
    body.removeEventListener("mousemove", menuItemMouseMove);
    body.removeEventListener("mouseup", menuItemUpMove);
}

function pageLeave(){
    body.removeEventListener("mousemove", menuItemMouseMove);
    body.removeEventListener("mouseup", menuItemUpMove);
}
// e.target pentru 
// lista de patrate - x la numar
// drag and drop la ele
// hit test -  cand doua patrate se ating se fac galbene;
