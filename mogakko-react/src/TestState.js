import { useState } from "react";
import style from "./Contents.module.css";

function TestState() {
  const [number, setNumber] = useState(0);

  function plusOne() {
    setNumber(number + 1);
  }

  function minusOne() {
    setNumber(number - 1);
  }

  function multipleTwo() {
    setNumber(number * 2);
  }
  console.log(number);
  return (
    <>
      <div>값{number}</div>
      <button className={style.buttonStyle} onClick={plusOne}>
        +1
      </button>
      <button className={style.buttonStyle} onClick={minusOne}>
        -1
      </button>
      <button className={style.buttonStyle} onClick={multipleTwo}>
        *2
      </button>
    </>
  );
}
export default TestState;
