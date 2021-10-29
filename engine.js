up = 0;
down = 0;
left = 0;
right = 0;

t = 0;
l = 0;

player = document.createElement("div");
player.setAttribute("id", "player");
document.body.insertBefore(player, document.getElementById("map"));

addMapListeners();

function move(event) {
    var code = event.code;

    down = code == "ArrowDown" ? 5 : down;
    up = code == "ArrowUp" ? -5 : up;
    left = code == "ArrowLeft" ? -5 : left;
    right = code == "ArrowRight" ? 5 : right;

    if (code == "KeyE") {
        openMenu();
    }

    t += down + up;
    l += left + right;

    player.style.top = t + "px";
    player.style.left = l + "px";
}

function stop(event) {
    var code = event.code;

    down = code == "ArrowDown" ? 0 : down;
    up = code == "ArrowUp" ? 0 : up;
    left = code == "ArrowLeft" ? 0 : left;
    right = code == "ArrowRight" ? 0 : right;
}

function menuSelect(event) {
    var code = event.code;

    if (code == "Escape") {
        removeMenuListeners();
        document.getElementById('grey').style.visibility = "hidden";
        document.getElementById('menu').style.visibility = "hidden";
        addMapListeners();
    }
}

function addMapListeners() {
    document.addEventListener('keydown', move, false);
    document.addEventListener('keyup', stop, false);
}

function removeMapListeners() {
    document.removeEventListener('keydown', move, false);
    document.removeEventListener('keyup', stop, false);
}

function addMenuListeners() {
    document.addEventListener('keydown', menuSelect, false)
}

function removeMenuListeners() {
    document.removeEventListener('keydown', menuSelect, false);
}

function openMenu() {
    removeMapListeners();
    addMenuListeners()

    document.getElementById('grey').style.visibility = "visible";
    document.getElementById('menu').style.visibility = "visible";
}