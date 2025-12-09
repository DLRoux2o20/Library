let addBookButton = document.getElementById("add-book-button");
let form = document.querySelector("form");
let closeFormButton = document.getElementById("form-close-button");
let formSubmitButton = document.getElementById("form-submit-button");

let readCheckbox = document.getElementById("read");
let readCheckboxText = document.getElementById("checkbox-span");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");

readCheckbox.addEventListener("click", function () {
	if (readCheckbox.checked) {
		readCheckboxText.textContent = "Read";
	} else {
		readCheckboxText.textContent = "Not Read";
	}
});

closeFormButton.addEventListener("click", closeForm);

function closeForm() {
	form.classList.toggle("hidden");
}

addBookButton.addEventListener("click", function openForm() {
	form.classList.toggle("hidden");
});

form.addEventListener("submit", submitForm);

function submitForm(event) {
	event.preventDefault();
    titleInput.textContent = "";
    authorInput.textContent = "";
    pagesInput.textContent = "";
	closeForm();
}
