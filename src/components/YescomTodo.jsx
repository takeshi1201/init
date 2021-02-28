import React from "react";

const yesArea = {
  width: "400px",
  backgroundColor: "rgb(191, 206, 55)",
  color: "white",
  fontWeight: "600",
  minHeight: "200px",
  padding: "1rem",
  margin: "10px"
};

const yesItem = {
  display: "flex",
  alignItems: "center",
  paddingBottom: "10px"
};

export const YescomTodo = (props) => {
  const { YesTodo, onClickBack } = props;
  return (
    <div style={yesArea}>
      <p>完了リスト</p>
      <ul>
        {YesTodo.map((Todo, index) => {
          return (
            <div key={Todo} style={yesItem}>
              <li>{Todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
