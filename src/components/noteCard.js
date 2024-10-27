import { updateNote, deleteNote } from "../api/notesAPI.js";
import Swal from "sweetalert2";

class NoteCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set noteData(data) {
    this.render(data);
  }

  render(note) {
    this.shadowRoot.innerHTML = `
      <div class="note-card">
        <h3>${note.title}</h3>
        <p>${note.body}</p>
        <time>${new Date(note.createdAt).toLocaleString()}</time><br>
        <button class="archive-button">${
          note.archived ? "Unarchive" : "Archive"
        }</button>
        <button class="delete-button">Delete</button>
      </div>
      <style>
        .note-card {
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s ease, opacity 0.3s ease;
          min-height: 200px;
          max-height: 300px;
          opacity: 1;
          margin-left: 10px;
        }
        .note-card:hover {
          transform: translateY(-5px);
        }
        h3 {
          margin: 0 0 5px;
        }
        p {
          margin: 0 0 10px;
        }
        time {
          font-size: 0.8rem;
          color: #666;
        }
        button {
          padding: 8px 15px;
          font-size: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 5px;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0056b3;
        }
        button.archive-button {
          background-color: #28a745;
        }
        button.archive-button:hover {
          background-color: #218838;
        }
        button.delete-button {
          background-color: #dc3545;
        }
        button.delete-button:hover {
          background-color: #c82333;
        }
        /* Animations for note removal */
        .fade-out {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
      </style>
    `;

    const archiveButton = this.shadowRoot.querySelector(".archive-button");
    const deleteButton = this.shadowRoot.querySelector(".delete-button");

    archiveButton.addEventListener("click", async () => {
      try {
        const card = this.shadowRoot.querySelector(".note-card");
        card.classList.add("fade-out");

        await new Promise((resolve) => setTimeout(resolve, 300));

        note.archived = !note.archived;
        const action = note.archived ? "archive" : "unarchive";
        await updateNote(note.id, action);

        this.render(note);

        Swal.fire({
          icon: "success",
          title: note.archived ? "Note Archived" : "Note Unarchived",
          text: `The note has been successfully ${
            note.archived ? "archived" : "unarchived"
          }.`,
          timer: 1500,
          showConfirmButton: false,
        });

        this.dispatchEvent(
          new CustomEvent("note-updated", { detail: note, bubbles: true })
        );
      } catch (error) {
        console.error("Failed to update note:", error);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Failed to archive/unarchive the note. Please try again.",
        });
      }
    });

    deleteButton.addEventListener("click", async () => {
      try {
        const card = this.shadowRoot.querySelector(".note-card");
        card.classList.add("fade-out");

        await new Promise((resolve) => setTimeout(resolve, 300));

        await deleteNote(note.id);

        Swal.fire({
          icon: "success",
          title: "Note Deleted",
          text: "The note has been successfully deleted.",
          timer: 1500,
          showConfirmButton: false,
        });

        this.dispatchEvent(
          new CustomEvent("note-deleted", { detail: note.id, bubbles: true })
        );
      } catch (error) {
        console.error("Failed to delete note:", error);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Failed to delete the note. Please try again.",
        });
      }
    });
  }
}

customElements.define("note-card", NoteCard);
