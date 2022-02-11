import styles from "./css/Layout.module.css";
function Layout({ children }) {
  console.log("children :", children);
  return <div className={styles.container}>{children}</div>;
}
export default Layout;
