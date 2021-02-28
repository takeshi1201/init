import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { NocomTodo } from "./components/NocomTodo";
import { YescomTodo } from "./components/YescomTodo";

export const App = () => {
  const [TodoText, setTodoText] = useState("");
  const [NoTodo, setTodo] = useState([]);
  const [YesTodo, setComTodo] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (TodoText === "") return;
    const newTodo = [...NoTodo, TodoText];
    setTodo(newTodo);
    setTodoText("");
  };

  const onClickRemove = (index) => {
    const newTodo = [...NoTodo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  const onClickCom = (index) => {
    const newTodo = [...NoTodo];
    newTodo.splice(index, 1);

    const comTodo = [...YesTodo, NoTodo[index]];
    setComTodo(comTodo);
    setTodo(newTodo);
  };

  const onClickBack = (index) => {
    const backTodo = [...YesTodo];
    backTodo.splice(index, 1);

    const newTodo = [...NoTodo, YesTodo[index]];
    setTodo(newTodo);
    setComTodo(backTodo);
  };

  return (
    <>
      <InputTodo
        inputTodo={TodoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      <NocomTodo
        todos={NoTodo}
        onClickCom={onClickCom}
        onClickRemove={onClickRemove}
      />
      <YescomTodo YesTodo={YesTodo} onClickBack={onClickBack} />
    </>
  );
};
