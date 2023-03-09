// ----------------------------------------------------------------------------------
//  day 21. global-state
//  01. props, data, prev의 실체 파악하기 - 02.presenter
// ----------------------------------------------------------------------------------

// 2) 함수형 컴포넌트 불러오는 방식을 함수 자체를 불러오는 방식으로 변경해 보세요.

export default function Presenter(props: any) {
  return (
    <div>
      {props.child}는 {props.age}살 입니다.
    </div>
  );
}
