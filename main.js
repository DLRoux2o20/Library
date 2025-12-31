let mainDiv = document.getElementById("main-div");

let addBookButton = document.getElementById("add-book-button");
let form = document.querySelector("form");
let closeFormButton = document.getElementById("form-close-button");
let formSubmitButton = document.getElementById("form-submit-button");

let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pagesInput = document.getElementById("pages");
let readCheckbox = document.getElementById("read");
let readCheckboxText = document.getElementById("checkbox-span");

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
	createBookCards();
}

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read ? "Read" : "Not Read";
		this.id = crypto.randomUUID();
	}

	switchReadStatus(cardOfObjToSwitch, readButton) {
		let objToSwitch =
			myLibrary[
				myLibrary.findIndex((book) => book.id === cardOfObjToSwitch.dataset.id)
			];

		if (objToSwitch.read === "Not Read") {
			objToSwitch.read = "Read";
			readButton.innerHTML = "<i class='fa-solid fa-check'></i> Read";
		} else {
			objToSwitch.read = "Not Read";
			readButton.innerHTML = "<i class='fa-solid fa-x'></i> Not Read";
		}
	}
}

function addBookToLibrary(title, author, pages, read) {
	let book = new Book(title, author, pages, read);
	myLibrary.push(book);
}

function deleteBook(event) {
	let cardToDelete = event.target.parentElement.parentElement;
	myLibrary.splice(
		myLibrary.findIndex((book) => book.id === cardToDelete.dataset.id),
		1
	);
	cardToDelete.remove();
}

function createBookCards() {
	let cardLineLeftArr = ["Title:", "Author:", "Pages:"];
	let obj = myLibrary[myLibrary.length - 1];

	let bookPropertiesArr = [obj.title, obj.author, obj.pages, obj.read];
	let card = document.createElement("div");
	card.classList.add("flex", "card");
	card.setAttribute("data-id", obj.id);
	mainDiv.insertBefore(card, addBookButton);

	for (let i = 0; i < 4; i++) {
		let cardLine = document.createElement("div");
		cardLine.classList.add("flex", "card-line");
		card.appendChild(cardLine);

		if (i === 3) {
			let readButton = document.createElement("button");
			readButton.setAttribute("type", "button");
			readButton.classList.add("card-button", "card-button-read");
			cardLine.appendChild(readButton);
			let readButtonIcon = document.createElement("i");
			readButtonIcon.classList.add(
				"fa-solid",
				obj.read === "Not Read" ? "fa-x" : "fa-check"
			);
			readButton.textContent = ` ${obj.read}`;
			readButton.prepend(readButtonIcon);
			readButton.addEventListener("click", function (event) {
				if (event.target.tagName === "I") {
					let readButton = event.target.parentElement;
				} else {
					let readButton = event.target;
				}

				let cardOfObj = readButton.parentElement.parentElement;
				myLibrary[
					myLibrary.findIndex((book) => book.id === cardOfObj.dataset.id)
				].switchReadStatus(cardOfObj, readButton);
			});

			let deleteButton = document.createElement("button");
			deleteButton.setAttribute("type", "button");
			deleteButton.classList.add("card-button", "card-button-delete");
			cardLine.appendChild(deleteButton);
			deleteButton.textContent = "Delete";
			deleteButton.addEventListener("click", deleteBook);
			break;
		}
		let cardLineLeft = document.createElement("span");
		cardLineLeft.textContent = cardLineLeftArr[i];
		cardLine.appendChild(cardLineLeft);
		let cardLineRight = document.createElement("span");
		cardLineRight.textContent = bookPropertiesArr[i];
		cardLineRight.classList.add("card-line-right");
		cardLine.appendChild(cardLineRight);
	}
}