function loadNavBar() {
    fetch("navBar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data
    })
}

document.addEventListener("DOMContentLoaded", loadNavBar)