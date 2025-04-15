document.addEventListener("DOMContentLoaded", () => {
    // loading styles
    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css";
    document.head.appendChild(fontAwesome);

    const mainStyle = document.createElement("link");
    mainStyle.rel = "stylesheet";
    mainStyle.href = "assets/css/style.css";
    document.head.appendChild(mainStyle);

    // adding favicon
    const faviconIcon = document.createElement("link");
    faviconIcon.rel = "icon";
    faviconIcon.href = "../images/favicon.png";
    document.head.appendChild(faviconIcon);

    // loading marked.js
    const markedScript = document.createElement("script");
    markedScript.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
    markedScript.onload = () => {
        // Once marked.js is loaded, load the main script (script.js)
        const mainScript = document.createElement("script");
        mainScript.src = "assets/js/script.js";
        document.head.appendChild(mainScript);
    };

    // Append marked.js script first
    document.head.appendChild(markedScript);
});
