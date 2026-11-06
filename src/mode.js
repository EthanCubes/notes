/* Actually changing the CSS */
function change_mode() {
    if (!dark_mode) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    else {
        document.body.style.backgroundColor = "#111111";
        document.body.style.color = "white";
    }
}

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

change_mode();


/* Toggling the Mode */
const MODE_TOGGLE = document.getElementById("mode_toggle");

if (MODE_TOGGLE) {
    // Only run the code to toggle if there exists a toggle on the page
    MODE_TOGGLE.addEventListener("click", () => {
        if (dark_mode) {
            dark_mode = false;
        }
        else {
            dark_mode = true;
        }
        change_mode();
    });
}
