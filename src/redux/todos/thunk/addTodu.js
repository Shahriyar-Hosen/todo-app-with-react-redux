import { added } from "../action";

const addTodo = (todoText) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await res.json();
    

    //   dispatch
    dispatch(added(todo.text));
  };
};

export default addTodo;
