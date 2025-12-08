let addBookButton = document.getElementById("add-book-button");
let readCheckbox = document.getElementById("read");
let readCheckboxText = document.getElementById("checkbox-span");

readCheckbox.addEventListener("click", function() {
    if (readCheckbox.checked) {
        readCheckboxText.textContent = "Read";
    } else {
        readCheckboxText.textContent = "Not Read";
    }
})

// addBookButton.addEventListener("click", function() {

// })