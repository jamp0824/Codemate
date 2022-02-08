import style from "./Contents.module.css";
function Contents() {
  return (
    <div className={style.description}>
      <p>
        인스타그램(Instagram)은 메타에서 운영하고 있는 이미지 공유 중심의 미국의
        소셜 미디어이다. iOS, 안드로이드, 윈도우 10, 그리고 웹에서 서비스되고
        있다.
        <br />
        사진 촬영 후 자체 필터 등을 이용하여 이미지 편집이 가능하며, 이를
        페이스북, 트위터, 플리커와 같은 다른 소셜 미디어로 공유할 수 있다.
        <br />
        영어,스페인어, 프랑스어, 일본어, 한국어 등 25개의 언어를 지원한다.
      </p>
    </div>
  );
}
export default Contents;
