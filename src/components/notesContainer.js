import { fetchNotes, fetchArchivedNotes } from "../api/notesAPI.js";
import "../loadingIndicator.js";
import anime from "animejs";

class NotesContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._notesData = [];
    this._archivedNotesData = [];
    this.loadingIndicator = document.createElement("loading-indicator");
  }

  connectedCallback() {
    this.loadNotes();
  }

  async loadNotes() {
    this.showLoading();
    try {
      this._notesData = await fetchNotes();
      this._archivedNotesData = await fetchArchivedNotes();
      this.render();
    } catch (error) {
      console.error("Failed to load notes:", error);
      alert("Failed to load notes.");
    } finally {
      this.hideLoading();
    }
  }

  showLoading() {
    this.shadowRoot.appendChild(this.loadingIndicator);
  }

  hideLoading() {
    if (this.loadingIndicator.parentNode) {
      this.shadowRoot.removeChild(this.loadingIndicator);
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <h2>Active Notes</h2>
      <div id="activeNotesContainer"></div>
      <h2>Archived Notes</h2>
      <div id="archivedNotesContainer"></div>
      <style>
        h2 {
          margin: 20px 20px 10px;
          color: #fffff;
          border-bottom: 2px solid #ffad60;
        }
        #activeNotesContainer, #archivedNotesContainer {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          padding: 10px;
        }
      </style>
    `;

    const activeNotesContainer = this.shadowRoot.getElementById(
      "activeNotesContainer"
    );
    const archivedNotesContainer = this.shadowRoot.getElementById(
      "archivedNotesContainer"
    );

    activeNotesContainer.innerHTML = "";
    archivedNotesContainer.innerHTML = "";

    this.activeNotes.forEach((note) => {
      const noteCard = document.createElement("note-card");
      noteCard.noteData = note;
      noteCard.addEventListener("note-updated", () => this.loadNotes());
      noteCard.addEventListener("note-deleted", () => this.loadNotes());
      activeNotesContainer.appendChild(noteCard);
      this.animateCard(noteCard);
    });

    this.archivedNotes.forEach((note) => {
      const noteCard = document.createElement("note-card");
      noteCard.noteData = note;
      noteCard.addEventListener("note-updated", () => this.loadNotes());
      noteCard.addEventListener("note-deleted", () => this.loadNotes());
      archivedNotesContainer.appendChild(noteCard);
      this.animateCard(noteCard);
    });
  }

  animateCard(card) {
    anime({
      targets: card,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 500,
      easing: "easeOutExpo",
    });
  }

  get archivedNotes() {
    return this._archivedNotesData;
  }

  get activeNotes() {
    return this._notesData.filter((note) => !note.archived);
  }
}

customElements.define("notes-container", NotesContainer);
