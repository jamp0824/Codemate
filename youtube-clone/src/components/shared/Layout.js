import Header from "./Header";
import Menu from "./Menu";
import styles from "./Layout.module.css";
import { useState } from "react";
// Layout 컴포넌트
// ...

function Layout({ children, activeMenu }) {
  const [click, setClick] = useState(true);

  function onClickMenu() {
    setClick((click) => !click);
    console.log(click);
  }
  return (
    <div className={styles.container}>
      <Header onClickMenu={onClickMenu} />
      <div className={styles.layout}>
        {click ? <Menu activeMenu={activeMenu} /> : <div></div>}
        <div className={click ? styles.contents : styles.onClickMenu}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
