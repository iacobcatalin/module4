document.addEventListener("DOMContentLoaded", start);

var menuItem;
var difX;
var difY;
var body;

function start() {
    menuItem = document.getElementsByClassName("menuItem")[0];
    
    body = document.body;
    body.addEventListener("mouseout", pageLeave);
    addEventListeners();
}

function addEventListeners() {
    menuItem.addEventListener("mousedown", menuItemMouseDown);

}
function menuItemMouseDown(e) {
    body.addEventListener("mousemove", menuItemMouseMove);
    body.addEventListener("mouseup", menuItemUpMove);
    difX = e.clientX - menuItem.offsetLeft;
    difY = e.clientY - menuItem.offsetTop;
}

function menuItemMouseMove(e) {
    console.log(e.clientX, e.clientY);
    menuItem.style.top = (e.clientY - difY) + "px";
    menuItem.style.left = (e.clientX - difX) + "px";

}
function menuItemUpMove(e) {
    menuItem.style.top = (e.clientY - difY) + "px";
    menuItem.style.left = (e.clientX - difX) + "px";
    body.removeEventListener("mousemove", menuItemMouseMove);
    body.removeEventListener("mouseup", menuItemUpMove);
}

function pageLeave(){
    body.removeEventListener("mousemove", menuItemMouseMove);
    body.removeEventListener("mouseup", menuItemUpMove);
}
