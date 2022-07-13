import React, { useState } from "react";

//create your first component
const Home = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = () => {
    setList([]);
  };

  return (
    <div className="text-center mt-3">
      <div className="container text-center p-1 m-1 hoja">
        <h1>Todo</h1>
        <input placeholder="Prueba"/>
        <ul className="list-group">
          {list}
        </ul>
      </div>
      <div className="hoja1"></div>
      <div className="hoja2"></div>
      <div className="hoja3"></div>
      <div className="hoja4"></div>
    </div>
  );
};

export default Home;
