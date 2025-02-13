// ----------------------------------------------------------------------------------
//  day 21. global-state
//  01. props, data, prev의 실체 파악하기 - 03
// ----------------------------------------------------------------------------------

// 3. 아래의 코드가 정상적으로 작동하지 않습니다. 제대로 작동하도록 만들어 보세요.
// path : http://localhost:3000/21-global-state/1/03

// ["철수", "영희", "훈이", "맹구"].map((index) => {
// 	console.log(`영희는 ${index}번째 칸에 들어있습니다.`)
// })

export default function Page03() {
  ["철수", "영희", "훈이", "맹구"].map((el, index) => {
    console.log(`${el}는 ${index + 1}번째 칸에 들어있습니다.`);
  });

  return <></>;
}
