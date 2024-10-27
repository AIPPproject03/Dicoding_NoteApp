import { addNote } from "../api/notesAPI.js";
import Swal from "sweetalert2";

class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <form id="noteForm">
        <input type="text" id="noteTitle" placeholder="Note Title" required>
        <textarea id="noteBody" placeholder="Note Body" required></textarea>
        <button type="submit">Add Note</button>
      </form>
      <style>
        form {
          display: flex;
          flex-direction: column;
          max-width: 500px;
          width: 80%;
          margin: 0 auto 40px auto;
          animation: fadeIn 1s ease-in-out;
        }
        input, textarea {
          padding: 10px;
          font-size: 1.1rem;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }
        input:focus, textarea:focus {
          border-color: #FFAD60;
        }
        button {
          padding: 10px 20px;
          font-size: 1.1rem;
          background-color: #FFAD60;
          color: black;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #D2FF72;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
    `;

    const form = this.shadowRoot.getElementById("noteForm");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const title = this.shadowRoot.getElementById("noteTitle").value;
      const body = this.shadowRoot.getElementById("noteBody").value;

      if (title.trim().length <= 3) {
        Swal.fire({
          icon: "error",
          title: "Invalid Title",
          text: "Title must be more than 3 characters.",
        });
        return;
      }

      if (body.trim().length <= 10) {
        Swal.fire({
          icon: "error",
          title: "Invalid Body",
          text: "Body must be more than 10 characters.",
        });
        return;
      }

      const newNote = {
        title: title,
        body: body,
        createdAt: new Date().toISOString(),
        archived: false,
      };

      const submitButton = form.querySelector("button");
      submitButton.textContent = "Adding...";
      submitButton.disabled = true;

      try {
        const addedNote = await addNote(newNote);

        this.dispatchEvent(
          new CustomEvent("note-added", { detail: addedNote, bubbles: true })
        );
        form.reset();
        Swal.fire({
          icon: "success",
          title: "Note Added",
          text: "Your note has been successfully added!",
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (error) {
        console.error("Failed to add note:", error);
        Swal.fire({
          icon: "error",
          title: "Failed to Add Note",
          text: "An error occurred. Please try again.",
        });
      } finally {
        submitButton.textContent = "Add Note";
        submitButton.disabled = false;
      }
    });
  }
}

customElements.define("note-form", NoteForm);
