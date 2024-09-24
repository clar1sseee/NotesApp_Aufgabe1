const form = document.getElementById("noteForm");
const titleInput = document.getElementById("title");
const notesInput = document.getElementById("notes");
const notesList = document.getElementById("list");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const noteTitle = titleInput.value.trim();
    const noteContent = notesInput.value.trim();

    if (noteTitle && noteContent) {
        const listItem = document.createElement("li");
        const titleElement = document.createElement("h3");
        const contentElement = document.createElement("p");
        const deleteButton = document.createElement("button");

        titleElement.textContent = noteTitle;
        contentElement.textContent = noteContent;
        deleteButton.textContent = "delete";

        deleteButton.addEventListener("click", function() {
            notesList.removeChild(listItem);
        });

        listItem.appendChild(titleElement);
        listItem.appendChild(contentElement);
        listItem.appendChild(deleteButton);

        notesList.appendChild(listItem);

        titleInput.value = "";
        notesInput.value = "";
    }
});