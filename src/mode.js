// This file will eventually manage light and dark mode

let mode;

try {
    mode = localStorage.getItem("mode");
}
catch {
    mode = "light";
    localStorage.setItem("mode", "light");
}

switch (mode) {
    case "light":
        dark_mode = false;
        break;
    case "dark":
        dark_mode = true;
        break;
    default:
        dark_mode = false;
        localStorage.setItem("mode", "light");
        break;
}

if (!dark_mode) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
else {
    document.body.style.backgroundColor = "#111111";
    document.body.style.color = "white";
}
