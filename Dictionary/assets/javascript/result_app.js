const entryHolder = document.querySelector(".entry");
const phoneticsHolder = document.querySelector(".phonetics");
const partsOfSpeechHolder = document.querySelector(".partsOfSpeech");
const definitionHolder = document.querySelector(".definition");
const etymologyHolder = document.querySelector(".etymology");
const synonymsHolder = document.querySelector(".synonyms");
const antonymsHolder = document.querySelector(".antonyms");

async function search() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("dict");

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`, options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
    });

    const results = await response.json();
    if (results.length == 0) return;
    
    const {
        word,
        phonetics,
        meanings,
    } = results.at(0);

    entryHolder.innerText = word;
    phoneticsHolder.innerHTML = phonetics.filter(p => p.text).map(p => `<div>${p.text}</div>`).join("");
    const meaning = meanings.at(0);
    definitionHolder.innerHTML = meaning.definitions.map((d, i) => `<div>${i + 1}. ${d.definition}</div>`).join("");

    partsOfSpeechHolder.innerHTML = meanings.map((m, i) => {
        if (i == 0) {
            return `<div class="phonetics-active">${m.partOfSpeech}</div>`;
        }
        return `<div>${m.partOfSpeech}</div>`;
    });

    synonymsHolder.innerHTML += "<ul>" + meaning.synonyms.map(s => `<li>${s}}</li>`) + "</ul>";
    antonymsHolder.innerHTML += "<ul>" + meaning.antonyms.map(s => `<li>${s}}</li>`) + "</ul>";
    etymologyHolder.innerHTML += meaning.etymology || "";
}
(async () => {
    await search();
})();