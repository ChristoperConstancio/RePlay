var leftButton = document.getElementById('b');
var rightButton = document.getElementById('a');
var games = document.getElementsByClassName('game');
var l = 0;

const responsive = () => {
    if (innerWidth < 640) {
        l = 0;
        rightButton.onclick = () => {
            l++;
            for (var i of games) {
                if (l == 0) { i.style.left = "0px"; }
                if (l == 1) { i.style.left = "-51%"; }
                if (l == 2) { i.style.left = "-104%"; }
                if (l == 3) { i.style.left = "-156%"; }
                if (l == 4) { i.style.left = "-209%"; }
                if (l == 5) { i.style.left = "-261%"; }
                if (l == 6) { i.style.left = "-315%"; }
                if (l == 7) { i.style.left = "-367%"; }
                if (l > 7) { l = 7; }
            }
        }

        leftButton.onclick = () => {
            l--;
            for (var i of games) {
                if (l == 0) { i.style.left = "0px"; }
                if (l == 1) { i.style.left = "-51%"; }
                if (l == 2) { i.style.left = "-104%"; }
                if (l == 3) { i.style.left = "-156%"; }
                if (l == 4) { i.style.left = "-209%"; }
                if (l == 5) { i.style.left = "-261%"; }
                if (l == 6) { i.style.left = "-315%"; }
                if (l < 0) { l = 0; }
            }
        }
    } else if (innerWidth >= 640 && innerWidth < 768) {
        l = 0;
        rightButton.onclick = () => {
            l++;
            for (var i of games) {
                if (l == 0) { i.style.left = "0px"; }
                if (l == 1) { i.style.left = "-34%"; }
                if (l == 2) { i.style.left = "-69%"; }
                if (l == 3) { i.style.left = "-104%"; }
                if (l == 4) { i.style.left = "-139%"; }
                if (l == 5) { i.style.left = "-174%"; }
                if (l == 6) { i.style.left = "-209%"; }
                if (l > 6) { l = 6; }
            }
        }

        leftButton.onclick = () => {
            l--;
            for (var i of games) {
                if (l == 0) { i.style.left = "0px"; }
                if (l == 1) { i.style.left = "-34%"; }
                if (l == 2) { i.style.left = "-69%"; }
                if (l == 3) { i.style.left = "-104%"; }
                if (l == 4) { i.style.left = "-139%"; }
                if (l == 5) { i.style.left = "-174%"; }
                if (l < 0) { l = 0; }
            }
        }
    }else if (innerWidth >= 768 && innerWidth < 1024) {
        l = 0;
        rightButton.onclick = () => {
            l++;
            for (var i of games) {
                if (l == 0) { i.style.left = "0px"; }
                if (l == 1) { i.style.left = "-26%"; }
                if (l == 2) { i.style.left = "-52%"; }
                if (l == 3) { i.style.left = "-78%"; }
                if (l == 4) { i.style.left = "-105%"; }
                if (l == 5) { i.style.left = "-131%"; }
                if (l > 5) { l = 5; }
            }
        }

        leftButton.onclick = () => {
            l--;
            for (var i of games) {
                if (l == 0) { i.style.left = "0px"; }
                if (l == 1) { i.style.left = "-26%"; }
                if (l == 2) { i.style.left = "-52%"; }
                if (l == 3) { i.style.left = "-78%"; }
                if (l == 4) { i.style.left = "-105%"; }
                if (l < 0) { l = 0; }
            }
        }
    }else{
        l = 0;
        rightButton.onclick = () => {
            l++;
            for (var i of games) {
                if (l == 0) { i.style.left = "0px"; }
                if (l == 1) { i.style.left = "-90%"; }
                if (l > 1) { l = 1; }
            }
        }

        leftButton.onclick = () => {
            l--;
            for (var i of games) {
                if (l == 0) { i.style.left = "0px"; }
                if (l < 0) { l = 0; }
            }
        }
    }
}

addEventListener('resize', responsive);
addEventListener('DOMContentLoaded', responsive)
