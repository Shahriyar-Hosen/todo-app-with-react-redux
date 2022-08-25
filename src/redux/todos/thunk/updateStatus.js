import { toggled } from "../action";

const updateStatus = (todoId, status) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !status,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await res.json();
    console.log(todo);

    //   dispatch
    dispatch(toggled(todo.id));
  };
};

export default updateStatus;
