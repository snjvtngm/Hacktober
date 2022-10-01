export type AddNoteAction = {
    type: "ADD_NOTE";
    payload: string;
  };
  
  export const addNote = (note: string): AddNoteAction => ({
    type: "ADD_NOTE",
    payload: note
  });
  

  export type UpdateNoteAction = {
    type: "UPDATE_NOTE";
    payload: string;
  };
  
  export const updateNote = (note: string): UpdateNoteAction => ({
    type: "UPDATE_NOTE",
    payload: note
  });
  