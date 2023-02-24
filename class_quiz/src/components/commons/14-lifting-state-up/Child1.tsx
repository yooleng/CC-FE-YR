// ----------------------------------------------------------------------------------
// day 14. lifting-state-up - Child 1
// ----------------------------------------------------------------------------------

export default function Child1(props: any) {
  // 부모의 state 조작방법 2
  const onClick = () => [props.setCount((prev: number) => prev + 1)];
  return (
    <>
      <div>자식 1의 카운트: {props.count}</div>
      <button onClick={onClick}>카운트 올리기!</button>
    </>
  );
}
