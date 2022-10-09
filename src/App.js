import { nanoid } from "nanoid";
import React, { useState } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "10/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "16/04/2022",
    },
    {
      id: nanoid(),
      text: "This is my four note!",
      date: "19/04/2022",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNotes = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className="container">
      <Search />
      <NotesList notes={notes} handleAddNote={addNote} deleteNotes={deleteNotes} />
    </div>
  );
};

export default App;
