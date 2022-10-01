import { AddNoteAction } from "./actions";

export interface NotesState {
  notes: string[];
}

const initialState = {
  notes: []
};

export const notesReducer = (
  state: NotesState = initialState,
  action: AddNoteAction
) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
