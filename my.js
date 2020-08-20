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