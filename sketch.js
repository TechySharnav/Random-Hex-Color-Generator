const span = document.getElementById("Color");
const body = document.querySelector("body");
const btn = document.getElementById("btn");
const hexC = document.getElementById("hexC");

function generateHex() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f']
    var count = 0;
    var color = '#'
    while (count < 6) {
        color = color + arr[Math.floor(Math.random() * arr.length)];
        count++;
    }

    span.innerHTML = color;
    body.style.background = color;

    var Color = tinycolor(color);
    hsl = Color.toHsl();

    if (hsl["l"] > 0.5) {
        span.style.color = "black";
        btn.style.color = "black";
        hexC.style.textDecorationColor = "black";
        btn.style.borderColor = "black";
    } else {
        span.style.color = "white";
        btn.style.color = "white";
        hexC.style.textDecorationColor = "white";
        btn.style.borderColor = "white"
    }
}