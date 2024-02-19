export const ADD_FIELD = "ADD_FIELD";
export const DELETE_FIELD = "DELETE_FIELD";
export const EDIT_FIELD = "EDIT_FIELD";
export const EDIT_FORM = "EDIT_FORM";
export const UNDO = "UNDO";
export const REDO = "REDO";

export const addField = (payload) => ({ type: ADD_FIELD, payload });
export const deleteField = (id) => ({ type: DELETE_FIELD, id });
export const editField = (id, payload) => ({ type: EDIT_FIELD, id, payload });
export const editForm = (payload) => ({ type: EDIT_FORM, payload });
export const undo = () => ({ type: UNDO });
export const redo = () => ({ type: REDO });

