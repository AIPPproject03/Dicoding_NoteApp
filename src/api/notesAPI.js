const API_URL = "https://notes-api.dicoding.dev/v2";

export async function addNote(newNote) {
  try {
    const response = await fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: String(newNote.title),
        body: String(newNote.body),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error response from API:", data);
      throw new Error(`Failed to add note: ${data.message}`);
    }

    console.log("Note added successfully:", data);
    return data.data;
  } catch (error) {
    console.error("Error adding note:", error);
    throw error;
  }
}

export async function fetchNotes() {
  try {
    const response = await fetch(`${API_URL}/notes`);
    const data = await response.json();

    if (!response.ok) {
      console.error("Error response from API:", data);
      throw new Error(`Failed to fetch notes: ${data.message}`);
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
}

export async function fetchArchivedNotes() {
  try {
    const response = await fetch(`${API_URL}/notes/archived`);
    const data = await response.json();

    if (!response.ok) {
      console.error("Error response from API:", data);
      throw new Error(`Failed to fetch archived notes: ${data.message}`);
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching archived notes:", error);
    throw error;
  }
}

export async function updateNote(noteId, action) {
  try {
    const response = await fetch(`${API_URL}/notes/${noteId}/${action}`, {
      method: "POST",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error response from API:", data);
      throw new Error(`Failed to update note: ${data.message}`);
    }

    console.log("Note updated successfully:", data);
    return data;
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
}

export async function deleteNote(noteId) {
  try {
    const response = await fetch(`${API_URL}/notes/${noteId}`, {
      method: "DELETE",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error response from API:", data);
      throw new Error(`Failed to delete note: ${data.message}`);
    }

    console.log("Note deleted successfully:", data);
    return data;
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
}
