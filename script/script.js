const listContainer = document.querySelector("#list-container");
const li = document.querySelector(".li");
const div = document.createElement("div");

// function addListItem() {
//     console.log("addListItem executed");
//     listContainer.append(li);
// }

function createDiv() {
    console.log("createDiv executed");
    listContainer.append(div);
}
// **********************************************
// Some DOM manipulation to create li as required
// **********************************************
createDiv();
// addListItem();