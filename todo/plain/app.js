const searchInput = document.querySelector(".search-input");
const results = document.querySelector(".results");

const data = [
    { value: "Go to the store", isDone: false },
    { value: "Fix car", isDone: false },
    { value: "Get haircut", isDone: false },
    { value: "Repair pc", isDone: false },
    { value: "Clean house", isDone: false },
    { value: "Pay bills", isDone: false },
    { value: "Prepare dinner", isDone: false },
];

function loadData(data) {
    results.innerHTML = "";
    for (let d of data) {
        const li = document.createElement("li");
        li.innerText = d.value;
        results.append(li);
    }
}

loadData(data);
searchInput.addEventListener("keyup", evt => {
    const found = data.filter(d => d.value.toLowerCase().indexOf(evt.target.value.toLowerCase()) > -1);
    loadData(found);
});
