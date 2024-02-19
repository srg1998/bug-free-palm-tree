import {
  ADD_FIELD,
  DELETE_FIELD,
  EDIT_FIELD,
  EDIT_FORM,
  UNDO,
  REDO,
} from "./actions";

const initialState = {
  past: [],
  present: {
    name: "New Form",
    selectedField: 1,
    fields: [
      {
        questionText: "New Question",
        type: "text",
        options: [],
        id: 1,
      },
    ],
  },
  future: [],
};

export default function fieldReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FIELD:
      return {
        ...state,
        past: [...state.past, state.present],
        present: {
          ...state.present,
          fields: [
            ...state.present.fields,
            {
              id:
                state.present.fields.reduce(
                  (maxId, field) => Math.max(field.id, maxId),
                  -1
                ) + 1,
              ...action.payload,
            },
          ],
        },
        future: [],
      };

    case DELETE_FIELD:
      return {
        ...state,
        past: [...(state.past || []), state.present],
        present: {
          ...(state.present || []),
          fields: state.present.fields.filter(
            (field) => field.id !== action.id
          ),
        },
        future: [],
      };

    case EDIT_FIELD:
      return {
        ...state,
        past: [...state.past, state.present],
        present: {
          ...state.present,
          fields: state.present.fields.map((field) =>
            field.id === action.id ? { ...field, ...action.payload } : field
          ),
        },
        future: [],
      };
    case EDIT_FORM:
      return {
        ...state,
        past: [...state.past, state.present],
        present: {
          ...state.present,
          ...action.payload,
        },
        future: [],
      };
    case UNDO:
      if (state.past.length === 0) {
        return state;
      }
      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, -1);
      return {
        ...state,
        past: newPast,
        present: previous,
        future: [state.present, ...state.future],
      };
    case REDO:
      if (state.future.length === 0) {
        return state;
      }
      const next = state.future[0];
      const newFuture = state.future.slice(1);
      return {
        ...state,
        past: [...state.past, state.present],
        present: next,
        future: newFuture,
      };
    default:
      return state;
  }
}
