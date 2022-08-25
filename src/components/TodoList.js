import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchTodos from "../redux/todos/thunk/fetchTodos";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, filters } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  const { status, colors } = filters;

  // filter By Status Change
  const filterByStatusChange = (todo) => {
    switch (status) {
      case "Complete":
        return todo.completed;

      case "Incomplete":
        return !todo.completed;
      default:
        return true;
    }
  };

  // filter By Colors Change
  const filterByColorsChange = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatusChange)
        .filter(filterByColorsChange)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default TodoList;
