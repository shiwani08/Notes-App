function loadNavBar() {
    fetch("assets/navBar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data
    })
    .catch(error => console.error("Error in loading the navBar: ", error));
}

document.addEventListener("DOMContentLoaded", loadNavBar)