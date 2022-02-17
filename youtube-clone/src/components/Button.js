import React, { useState } from "react";
import styles from "./shared/Button.module.css";

function Button(props) {
  const [isCheck, setIsCheck] = useState(false);

  function changeCheck() {
    setIsCheck(!isCheck);
  }
  console.log("isCheck", isCheck);
  return (
    <div className={styles.layout}>
      {isCheck === true && <div className={styles.container}>True에용</div>}
      {isCheck === false && <div className={styles.container2}>False에용</div>}
      <button onClick={changeCheck}>색바꾸기!</button>
    </div>
  );
}

export default Button;
