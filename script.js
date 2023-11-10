const btn = document.getElementById('button');
let index = 0;
const colors = ['yellow', 'green', 'red'];

function changeButtonColor() {
    btn.style.backgroundColor = colors[index];
    ++index;
    if (index == colors.length) {
        index = 0;
    }
};
setInterval(changeButtonColor, 10000);
