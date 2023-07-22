let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "../style/catalog-light.css") {
        theme.href = "../style/catalog-dark.css";
    } else {
        theme.href = "../style/catalog-light.css";
    }
}