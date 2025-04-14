document.addEventListener("DOMContentLoaded", () => {
    // loading styles
    const fontAwesome = document.createElement("link")
    fontAwesome.rel = "stylesheet"
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
    document.head.appendChild(fontAwesome);

    const mainStyle = document.createElement("link")
    mainStyle.rel = "stylesheet"
    mainStyle.href = "style.css"
    document.head.appendChild(mainStyle);

    // loading scripts
    const marked = document.createElement("script")
    marked.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js"
    document.head.appendChild(marked);

    const mainScript = document.createElement("script")
    mainScript.src = "script.js"
    document.head.appendChild(mainScript);
})