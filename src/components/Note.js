import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ note }) => {
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note_footer">
        <small>{note.date}</small>
        <MdDeleteForever className="delete_icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
