import { colorSelected } from "../action";

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await res.json();
    console.log(todo);

    //   dispatch
    dispatch(colorSelected(todo.id, color));
  };
};

export default updateColor;
