import style from "../Contents.module.css";
function Button({ text, onClick }) {
  return (
    <button className={style.buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;
