import {
  ADDED,
  ALLCOMPLETE,
  CLEARCOMPLETE,
  COLORSELECTED,
  DELETED,
  LOADED,
  TOGGLED,
} from "./actionTypes";
import initialState from "./initialState";

const nextId = (state) => {
  const maxId = state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;
      
    case ADDED:
      return [
        ...state,
        {
          id: nextId(state),
          text: action.payload,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      });

    case COLORSELECTED:
      const { todoId, color } = action.payload;

      return state.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            color: color,
          };
        }

        return todo;
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETE:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETE:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
}; 

export default todoReducer;
