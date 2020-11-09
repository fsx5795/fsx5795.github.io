function bodyOnload() {
    var title = document.getElementById("title");
    title.style.height = window.screen.availHeight + "px";
    console.log(window.screen.availHeight);
}
function selectChanged() {
    var sel = document.getElementById("theme");
    var index = sel.selectedIndex;
    if (index === 0) {
        sel.className = "selDark";
    } else {
        sel.className = "selLight";
    }
}
function searchEnter() {
    var search = document.getElementById("btn").getAttribute("class");
    search = search.replace("search", "search_hover");
    document.getElementById("btn").setAttribute("class", search);
}
function searchLeave() {
    var search = document.getElementById("btn").getAttribute("class");
    search = search.replace("search_hover", "search");
    document.getElementById("btn").setAttribute("class", search);
}