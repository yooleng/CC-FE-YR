// ----------------------------------------------------------------------------------
// 07-02. map-fruits - 목록 보기
// ----------------------------------------------------------------------------------

// 백엔드에서 받아온 데이터라고 가정
// 컴포넌트 위에 만든 이유?
// -> state가 바뀌어서 리렌더링 된다고 해도, 함수 밖에 있는 내용은 리렌더링과 무관하기 때문에
//    컴포넌트 리렌더링이 되어도 다시 안만들어짐 (효율적)
// 따라서 일반적으로 변하진 않는 상수 같은 것들은 함수 밖에 써준다.

const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

export default function MapFruitsPage() {
  // 1. 가장 기본 예제
  // const aaa = [ <div>1 레드향</div>, <div>2 샤인머스캣</div>, <div>3 산청딸기</div> ];

  // 2. 실무 백엔드 데이터 예제 (aaa와 결과 똑같음)
  const bbb = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
  ].map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  // 3. 실무 백엔드 데이터 예제 (모든 데이터 포함) - 더 간단한 방법
  const ccc = FRUITS.map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  // 근데 파일분리로 렌더링 되는 부분을 presenter로 빼게 되면 위와 같은 코드는 알아보기 힘듦
  // 그래서 변수로 따로 빼지 않고, 바로 리턴에 넣어서 presenter에서 바로 뿌려주는 것이 좋다.
  return (
    <>
      {FRUITS.map((el) => (
        <div>
          {el.number} {el.title}
        </div>
      ))}
    </>
  );
}
