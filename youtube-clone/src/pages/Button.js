import React, { useState } from "react";
import styles from "./Button.module.css";
import Layout from "../components/shared/Layout";
function Button(props) {
  const [isCheck, setIsCheck] = useState(false);

  function changeCheck() {
    setIsCheck(!isCheck);
  }
  console.log("isCheck", isCheck);
  return (
    <Layout>
   
      {isCheck === true && <div className={styles.container}>True에용</div>}
      {isCheck === false && <div className={styles.container2}>False에용</div>}
      <div>   <button onClick={changeCheck}>색바꾸기!</button>
    </div>
    </Layout>
  );
}

export default Button;
