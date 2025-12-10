let addBookButton = document.getElementById("add-book-button");
let form = document.querySelector("form");
let closeFormButton = document.getElementById("form-close-button");
let formSubmitButton = document.getElementById("form-submit-button");

let readCheckbox = document.getElementById("read");
let readCheckboxText = document.getElementById("checkbox-span");
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");

const myLibrary = [];

readCheckbox.addEventListener("click", function () {
	if (readCheckbox.checked) {
		readCheckboxText.textContent = "Read";
	} else {
		readCheckboxText.textContent = "Not Read";
	}
});

closeFormButton.addEventListener("click", closeForm);

function closeForm() {
	form.classList.add("hidden");
	titleInput.value = "";
	authorInput.value = "";
	pagesInput.value = "";
	readCheckbox.checked = false;
	readCheckboxText.textContent = "Not Read";
}

addBookButton.addEventListener("click", function openForm() {
	form.classList.remove("hidden");
});

form.addEventListener("submit", submitForm);

function submitForm(event) {
	event.preventDefault();
	let title = titleInput.value;
	let author = authorInput.value;
	let pages = pagesInput.value;
	let read = readCheckbox.checked;
	addBookToLibrary(title, author, pages, read);
	closeForm();
}

function Book(title, author, pages, read) {
	if (!new.target) {
		throw Error ("Must use 'new' operator to call constructor");
	}
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
	let book = new Book(title, author, pages, read);
	myLibrary.push(book);
	console.log(myLibrary);
}