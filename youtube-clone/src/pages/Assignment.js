import styles from "./Assignment.module.css";
import React, { useState } from "react";


function Assignment() {
    const [isCheck, setIsCheck] = useState(false);


    function changeCheck() {
        setIsCheck(!isCheck);
      }

  return (
   <>
    {isCheck === true && <div className={styles.container}>True에용</div>}
    {isCheck === false && <div className={styles.container2}>False에용</div>}
    <div>   <button onClick={changeCheck}>색바꾸기!</button>
  </div>
  </>
  );
}
export default Assignment;
