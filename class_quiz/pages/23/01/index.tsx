// ----------------------------------------------------------------------------------
//  day 23-01. - HOF (Higher Order Function)
// ----------------------------------------------------------------------------------

// 방법 1

const MyButton = () => {
  const onClickButton = (num: number) => {
    console.log(num);
  };

  return <button onClick={() => onClickButton(123)}>버튼</button>;
};

export default MyButton;

// ----------------------------------------------------------------------------------

// 방법 2

// const MyButton = () => {
//   const onClickButton = (num: number) => () => {
//     console.log(num);
//   };
//   return <button onClick={onClickButton(123)}>버튼</button>;
// };
// export default MyButton;

// ----------------------------------------------------------------------------------

// 3. 콘솔에 찍은 내용 렌더링하기

// import { useState } from "react";

// const MyButton = () => {
//   const [number, setNumber] = useState("");

//   const onClickButton = (num: number) => {
//     const log = `${num}`;
//     setNumber(log);
//     console.log(log);
//   };

//   return (
//     <div>
//       <button onClick={() => onClickButton(123)}>버튼</button>
//       <p>{number}</p>
//     </div>
//   );
// };

// export default MyButton;

// ----------------------------------------------------------------------------------
