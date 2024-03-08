import { useState } from "react";

function Square() {
  // value が state の現在値を格納し、setValue はその値を更新するために使う関数
  // null は、この state 変数の初期値
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
