let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "../style/shipping-light.css") {
        theme.href = "../style/shipping-dark.css";
    } else {
        theme.href = "../style/shipping-light.css";
    }
}