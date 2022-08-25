import React, { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTick from "../assets/images/double-tick.png";
import notes from "../assets/images/notes.png";
import plus from "../assets/images/plus.png";
import { allCompleted, clearCompleted } from "../redux/todos/action";
import addTodo from "../redux/todos/thunk/addTodu";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const completeHandler = () => {
    dispatch(allCompleted());
  };

  const clearHandler = () => {
    dispatch(clearCompleted());
  };

  return (
    <main>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleFormSubmit}
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={inputHandler}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plus}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeHandler}>
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </main>
  );
};

export default Header;
