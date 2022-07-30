  let leftPos = 400;
    let topPos = 100;
    let xMove = 100;
    let yMove = 100;
    function moveUp() { 
    let div = document.getElementById("div1");
    topPos -= yMove;
    div.style.left = leftPos + "px";
    div.style.top = topPos + "px";
}
    function moveDown() {
    let div = document.getElementById("div1");
    topPos += yMove;
    div.style.left = leftPos + "px";
    div.style.top = topPos + "px";
}
    function moveRight() {
    let div = document.getElementById("div1");
    leftPos += xMove;
    div.style.left = leftPos + "px";
    div.style.top = topPos + "px";
}
    function moveLeft() {
    let div = document.getElementById("div1");
    leftPos -= xMove;
    div.style.left = leftPos + "px";
    div.style.top = topPos + "px";
}
document.getElementById("top").onclick = moveUp;
document.getElementById("right").onclick = moveRight;
document.getElementById("bottom").onclick = moveDown;
document.getElementById("left").onclick = moveLeft;