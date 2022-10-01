import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./notesReducers";
import { addNote } from "./actions";
import NewNoteInput from "./newInputNote";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <div className="App">
      <h1>React Redux Typescript Notes</h1>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ol>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
