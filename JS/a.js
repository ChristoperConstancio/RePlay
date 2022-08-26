var buttonUp = document.getElementById("up");
var buttonDown = document.getElementById("down");
var listImages = document.getElementsByClassName('thumbnail');
var l = 0;

buttonUp.onmouseenter = () => {
    l--;
    for (var i of listImages) {
        if (l == 0) { i.style.top = "0px"; }
        if (l == 1) { i.style.top = "-300px"; }
        if (l == 2) { i.style.top = "-600px"; }
        if (l == 3) { i.style.top = "-900px"; }
        if (l < 0) { l = 0; }
    }
}

buttonDown.onmouseenter = () => {
    l++;
    for (var i of listImages) {
        if (l == 0) { i.style.top = "0px"; }
        if (l == 1) { i.style.top = "-300px"; }
        if (l == 2) { i.style.top = "-600px"; }
        if (l == 3) { i.style.top = "-900px"; }
        if (l > 3) { l = 3; }
    }
}