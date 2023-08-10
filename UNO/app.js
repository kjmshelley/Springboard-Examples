/*
Players = 2 - 7

Red, Blue, Yellow, Green
    Numbered cards (1-9) – Face value
    Draw Two (2) - 20 points each
    Skip (2) - 20 points each
    Reverse (2) – 20 points each

Wild (4) - 40 points each
Draw 4 (4) - 40 points each

{
    color: red/blue/yellow/green/blank
    code: [color]+(1-9)/d2/s/r/w/d4
    value: (1-9)/Draw Two/Skip/Reverse/Wild/Draw 4
    points: (1-9)/20/40
}
*/

const yourHand = document.querySelector("#hand");
const deckHand = document.querySelector(".deck-hand");

const players = 2;
let player1 = [];
let player2 = [];
const playerCardsTotal = 6; // actually it's 7 but because we are working with 0 index
const colors = ["red", "blue", "yellow", "green"];
const CARDS_NAMES = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    SKIP: "Skip",
    REVERSE: "Reverse",
    DRAW2: "Draw 2",
    WILD: "Wild",
    DRAW4: "Draw 4"
};

const cardsTemplate = [
    { value: "1", points: 1 },
    { value: "2", points: 2 },
    { value: "3", points: 3 },
    { value: "4", points: 4 },
    { value: "5", points: 5 },
    { value: "6", points: 6 },
    { value: "7", points: 7 },
    { value: "8", points: 8 },
    { value: "9", points: 9 },
    { value: "Skip", points: 20, total: 2 },
    { value: "Reverse", points: 20, total: 2 },
    { value: "Draw 2", points: 20, total: 2 },
    { value: "Wild", points: 40, total: 4 },
    { value: "Draw 4", points: 40, total: 4 },
];

let deck = [];

function getValueForSpecialCards(value) {
    switch (value) {
        case "Skip":
            return "s";
        case "Reverse":
            return "r";
        case "Draw 2":
            return "d2";
        case "Wild":
            return "w";
        case "Draw 4":
            return "d4";
        default:
            return value;
    }
}

function generateCards(color, templateCards) {
    const cards = [];
    for (let card of templateCards) {
        const { points, value } = card;
        
        for (let i = 1; i <= (card.total || 1); i++) {
            cards.push({
                color,
                points,
                value,
                //code: `${color}+${getValueForSpecialCards(value)}`
                code: getValueForSpecialCards(value)
            });
        }
    }
    return cards;
}

function shuffleCards(cards) {
    const newDeck = [...cards];
    for(let i = newDeck.length - 1; i > 0; i--) {
        let j = Math.floor((Math.random() * (i + 1)));
        [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    return newDeck;

    /*
        let temp = newDeck[i];
        newDeck[i] = newDeck[j];
        newDeck[j] = temp;
    */
}

function newGame() {
    let cards = [];
    for(let color of colors) {
        const c = generateCards(color, cardsTemplate.filter(c => ![CARDS_NAMES.WILD, CARDS_NAMES.DRAW4].includes(c.value)));
        cards = [...cards, ...c];
    }

    const specialCards = cardsTemplate.filter(c => [CARDS_NAMES.WILD, CARDS_NAMES.DRAW4].includes(c.value));
    const gc = generateCards("blank", specialCards);
    cards = [...cards, ...gc];
    return cards;
}

function deal(deck) {
    player1 = deck.splice(0, playerCardsTotal);
    player2 = deck.splice(0, playerCardsTotal);

    return [player1, player2];
}

function displayCards(cards) {
    yourHand.innerHTML = "";
    for(let card of cards) {
        console.log(card);
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", card.color);
        
        const cardValueDiv = document.createElement("div");
        cardValueDiv.classList.add("card-value");
        cardValueDiv.innerText = card.code.toUpperCase();

        cardDiv.appendChild(cardValueDiv);

        yourHand.appendChild(cardDiv);

        cardDiv.addEventListener("click", (evt) => {
            console.log(card);
        });
    }
}

deck = newGame();
deck = shuffleCards(deck);
[player1, player2] = deal(deck);

displayCards(player1);

deckHand.addEventListener("click", evt => {
    const newCard = deck.splice(0, 1);
    player1.push(newCard.at(0));
    displayCards(player1);
});
