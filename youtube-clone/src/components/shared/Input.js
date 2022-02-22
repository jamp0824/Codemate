import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  function onClick() {
    console.log(value);
    setValue("");
  }

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <input onChange={onChange} value={value} />
      <button onClick={onClick}>출력</button>
      <div>입력된 값 : {value}</div>
    </div>
  );
}

export default Input;
