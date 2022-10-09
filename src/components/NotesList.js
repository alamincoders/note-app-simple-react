import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, deleteNotes }) => {
  return (
    <div className="note_list">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => (
        <Note key={note.id} note={note} handleDeleteNotes={deleteNotes} />
      ))}
    </div>
  );
};

export default NotesList;
