const addTicketModal = document.querySelector("#addTicketModel");
const overlay = document.querySelector(".overlay");

const makeSupportRequestButton = document.querySelector("#makeSupportRequestButton");

makeSupportRequestButton.addEventListener("click", (evt) => {
    overlay.classList.toggle("display");
    addTicketModal.classList.toggle("display");
});