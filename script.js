const text = "Andy Yu";
const textElement = document.getElementById("text");
const cursor = document.getElementById("cursor");

// Custom delay for each character (in milliseconds)
const delays = [1500, 200, 200, 100, 500, 1200, 300, 1500];
let i = 0;

function type() {
    if (i < text.length + 2) {
        if (i > 0 && i <= text.length) {
            textElement.textContent += text.charAt(i - 1);
        }
        setTimeout(type, delays[i]);
        i++;
    } else {
        cursor.style.animation = "none";
        cursor.style.visibility = "hidden";
    }
}

type();
