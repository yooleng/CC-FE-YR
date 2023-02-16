// ----------------------------------------------------------------------------------
// 09-02-typescript
// ----------------------------------------------------------------------------------

export default function typescriptPage() {
  // 타입 추론 : type을 지정해주지 않으면, 처음에 들어온 데이터의 타입을 보고 타입을 자동으로 생성한다.
  let aaa = " 안녕하세요";
  // aaa = 3
  // 'number' 형식은 'string' 형식에 할당할 수 없습니다. : aaa는 string 같은데 왜 number를 넣어? 에러!

  // 타입 명시
  let bbb: string = "반갑습니다";

  // 문자 타입(선언과 할당 분리) - (선언: 상자 만들기, 할당: 상자 안에 값을 넣기)
  let ccc: string; // 선언
  ccc = "반가워요!!"; // 할당
  // ccc = 3

  // 숫자 타입
  let ddd: number = 10;
  // ddd= "철수"

  // boolean 타입
  let eee: boolean = true;
  eee = false;
  // eee = "false"; // 주의!
  // 문자열 안에 값이 있으므로 true로 작동, 자바스크립트에서는 에러가 발생하지 않음
  // 그러나 타입스크립트에서는 'string' 형식을 'boolean' 형식에 할당할 수 없다고 에러

  // 배열 타입
  let fff: number[] = [1, 2, 3, 4, 5]; // 숫자만 들어갈 수 있는 배열
  let ggg: string[] = ["철수", "영희", "훈이"]; // 문자열만 들어갈 수 있는 배열
  let hhh: (string | number)[] = ["철수", "영희", "훈이", 10]; // 문자열 또는 숫자가 들어가는 배열
  // 타입을 모르겠을 땐, 타입을 미리 지정하지 않고 타입스크립트가 추론하도록 하는게 좋음

  // 객체 타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }
  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐 초등학교",
  };
  profile.age = "8살";

  // 함수 타입
  // 타입 추론이 안되는 이유? : 함수는 어디서 몇번이든 호출할 수 있으므로 미리 타입을 추론할 수 없음.
  // 따라서 반드시 미리 타입을 명시해주어야 한다.
  const add = (number1: number, number2: number, unit: string) => {
    return number1 + number2 + unit;
  };
  const result = add(1000, 2000, "원");
  // result의 타입은 지정해주지 않아도 알아서 실행결과를 바탕으로 추론함.
  // 즉, 결과의 리턴 타입도 예측 가능!

  // return type을 지정해주고 싶다면?
  const add1 = (number1: number, number2: number, unit: string): string => {
    return number1 + number2 + unit;
  };

  // any 타입
  let jjj: any = "철수"; // 자바스크립트와 동일 (타입이 없는 것)
  jjj = 123;
  jjj = true;

  return <div></div>;
}
