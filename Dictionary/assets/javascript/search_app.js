const ENTER = "Enter";
const searchInput = document.querySelector("#searchInput");
const recentSearchList = document.querySelector(".recent-search-list");

function saveResult(value) {
    const ls = localStorage.getItem("DICT") || "[]";
    
    const dict = JSON.parse(ls);
    dict.push(value);

    localStorage.setItem("DICT", JSON.stringify(dict));
}

function loadResults() {
    const ls = localStorage.getItem("DICT") || "[]";

    const dict = JSON.parse(ls);
    const ul = document.createElement("ul");
    for (let entry of dict) {
        console.log(entry);
        const li = document.createElement("li");
        li.innerText = entry;

        ul.appendChild(li);
    }
    recentSearchList.append(ul);
}

searchInput.addEventListener("keyup", (evt) => {
    const value = evt.target.value;
    const key = evt.code;

    if (!value) return;

    if (key === ENTER) {
        saveResult(value);
        window.location.href = `/result.html?dict=${value}`;
    }
});


loadResults();