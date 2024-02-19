import { ADD_FIELD, DELETE_FIELD, EDIT_FIELD, EDIT_FORM } from "./actions";

const initialState = {
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
};

export default function fieldReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FIELD:
      return {
        ...state,
        fields: [
          ...state.fields,
          {
            id:
              state.fields.reduce(
                (maxId, field) => Math.max(field.id, maxId),
                -1
              ) + 1,
            ...action.payload,
          },
        ],
      };

    case DELETE_FIELD:
      return {
        ...state,
        fields: state.fields.filter((field) => field.id !== action.id),
      };

    case EDIT_FIELD:
      return {
        ...state,
        fields: state.fields.map((field) =>
          field.id === action.id ? { ...field, ...action.payload } : field
        ),
      };
    case EDIT_FORM:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
