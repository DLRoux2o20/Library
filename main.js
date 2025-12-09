let addBookButton = document.getElementById("add-book-button");
let form = document.querySelector("form");
let readCheckbox = document.getElementById("read");
let readCheckboxText = document.getElementById("checkbox-span");
let closeFormButton = document.getElementById("form-close-div");

readCheckbox.addEventListener("click", function () {
	if (readCheckbox.checked) {
		readCheckboxText.textContent = "Read";
	} else {
		readCheckboxText.textContent = "Not Read";
	}
});

closeFormButton.addEventListener("click", closeForm);

function closeForm() {
    form.style.display = "none";
}

addBookButton.addEventListener("click", function openForm() {
    form.style.display = "block";
});
