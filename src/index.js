import "./styles/style.css";
import "./components/noteForm";
import "./components/notesContainer";
import "./components/noteCard";

const notesContainer = document.querySelector("notes-container");
const noteForm = document.querySelector("note-form");

noteForm.addEventListener("note-added", (event) => {
  notesContainer.loadNotes();
});

notesContainer.addEventListener("note-deleted", (event) => {
  notesContainer.loadNotes();
});

notesContainer.addEventListener("note-archived", (event) => {
  notesContainer.loadNotes();
});
