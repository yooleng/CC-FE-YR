// ----------------------------------------------------------------------------------
//  21-02. map-el
// ----------------------------------------------------------------------------------

export default function MapElPage() {
  // 1. 기본방법
  console.log("---------- 1. 기본 방법 --------------");
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });

  // 2. 매개변수를 변경한 방법
  console.log("---------- 2. 매개변수 변경 -----------");
  ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
    console.log("el: ", asdf);
    console.log("index: ", qwer);
  });

  // 3. 함수선언식 방법
  console.log("---------- 3. 함수선언식 -------------");
  ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
    console.log("el: ", asdf);
    console.log("index: ", qwer);
  });

  // 4. el과 index 바꾸기 (변수만 바꾼 것)
  console.log("---------- 4. el과 index 바꾸기 ------");
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el: ", index);
    console.log("index: ", el);
  });

  return <></>;
}
