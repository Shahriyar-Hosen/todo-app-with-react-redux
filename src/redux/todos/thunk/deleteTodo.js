import { deleted } from "../action";

const deleteTodo = (todoId, color) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });

    //   dispatch
    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
