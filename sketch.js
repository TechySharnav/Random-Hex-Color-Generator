const span = document.getElementById("Color");
const body = document.querySelector("body")

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f']

function generateHex() {
    var count = 0;
    var color = '#'
    while (count < 6) {
        color = color + arr[Math.floor(Math.random() * arr.length)];
        count++;
    }

    span.innerHTML = color;
    body.style.background = color;
}