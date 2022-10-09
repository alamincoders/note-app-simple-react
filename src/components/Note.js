import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ note, handleDeleteNotes }) => {
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note_footer">
        <small>{note.date}</small>
        <button className="delete">
          {" "}
          <MdDeleteForever onClick={() => handleDeleteNotes(note.id)} className="delete_icon" size="1.3em" />
        </button>
      </div>
    </div>
  );
};

export default Note;
