import React from "react";

const noArea = {
  width: "400px",
  backgroundColor: "brown",
  color: "white",
  fontWeight: "600",
  minHeight: "200px",
  padding: "1rem",
  margin: "10px"
};

const noItem = {
  display: "flex",
  alignItems: "center",
  paddingBottom: "10px"
};

export const NocomTodo = (props) => {
  const { todos, onClickCom, onClickRemove } = props;
  return (
    <div style={noArea}>
      <p>未完了リスト</p>
      <ul>
        {todos.map((Todo, index) => {
          return (
            <div key={Todo} style={noItem}>
              <li>{Todo}</li>
              <button onClick={() => onClickCom(index)}>完了</button>
              <button onClick={() => onClickRemove(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
