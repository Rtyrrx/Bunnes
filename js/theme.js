let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "style/main-light.css")  {
        theme.href = "style/main-dark.css";
    } else {
        theme.href = "style/main-light.css";
    }
}
