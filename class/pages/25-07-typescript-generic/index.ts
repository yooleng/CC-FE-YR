// ----------------------------------------------------------------------------------------------------------------------------
//  25-07. typescript-generic
// ----------------------------------------------------------------------------------------------------------------------------

/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unused-vars */

// 1. 문자/숫자/불린(primitive) 타입

const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result1 = getPrimitive("철수", 123, true);

// ----------------------------------------------------------------------------------------------------------------------------

// 2. any 타입 => 그냥 자바스크립트랑 같음 (아무거나))

const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 + 1000); // any는 아무거나 다 됨
  return [arg3, arg2, arg1];
};
const result2 = getAny("철수", false, true);

// ----------------------------------------------------------------------------------------------------------------------------

// 3. unknown 타입 => any와 비슷하게 뭐든 넣을 수 있지만, 사용하려면 뭔지 정해놓아야 함
//                => any보다는 안전하다.

const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  //  console.log(arg1 + 1000); // any와 다르게 여기서 오류 발생
  if (typeof arg1 === "number") console.log(arg1 + 1000); // unknown은 사용할 때, 타입을 가정해여 사용해야 함
  return [arg3, arg2, arg1];
};
const result3 = getUnknown("철수", false, true);

// ----------------------------------------------------------------------------------------------------------------------------

// 4. generic 타입 - 1) 이름을 임의로 지정 가능

function getGeneric1<Mytype1, Mytype2, Mytype3>(arg1: Mytype1, arg2: Mytype2, arg3: Mytype3): [Mytype3, Mytype2, Mytype1] {
  return [arg3, arg2, arg1];
}
const result4 = getGeneric1(0, 123, true); // 타입 추론
const result5 = getGeneric1<string, number, boolean>("0", 123, true); // 타입 명시

// const [count, setCount] = useState(0) // 이것도 괄호 안에 숫자로 인해 자동으로 number로 타입이 추론됨

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 5. generic 타입 - 2) type 이름 간소화

function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result6 = getGeneric2(0, 123, true); // 타입 추론
const result7 = getGeneric2<string, number, boolean>("0", 123, true); // 타입 명시

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 6. generic 타입 - 3) type 이름 간소화2

function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result8 = getGeneric3(0, 123, true); // 타입 추론
const result9 = getGeneric3<string, number, boolean>("0", 123, true); // 타입 명시

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 7. generic 타입 - 4) 화살표함수로 바꾸기

const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result11 = getGeneric4<string, number, boolean>("0", 123, true);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
