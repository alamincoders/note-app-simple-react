import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my Default note!",
      date: "22/09/2022",
    },
  ]);
  const [searchTxt, setSearchTxt] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem("react_notes_data");
    const LatestNotes = JSON.parse(savedNotes);
    if (LatestNotes) {
      setNotes(LatestNotes);
    }
  }, []);

  useEffect(() => {
    // storing notes
    localStorage.setItem("react_notes_data", JSON.stringify(notes));
  }, [notes]);

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
    <div className={`${darkMode && "dark_mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchTxt} />
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchTxt))} handleAddNote={addNote} deleteNotes={deleteNotes} />
      </div>
    </div>
  );
};

export default App;
