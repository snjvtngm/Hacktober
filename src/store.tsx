import { createStore } from "redux";
import { notesReducer } from "./notesReducers";

export const store = createStore(notesReducer);
