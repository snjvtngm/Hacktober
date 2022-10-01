export type Action = {
    type: "ADD_NOTE";
    payload: string;
  };
  
  export const addNote = (note: string): Action => ({
    type: "ADD_NOTE",
    payload: note
  });
  

  export type Action = {
    type: "UPDATE_NOTE";
    payload: string;
  };
  
  export const updateNote = (note: string): Action => ({
    type: "UPDATE_NOTE",
    payload: note
  });
  