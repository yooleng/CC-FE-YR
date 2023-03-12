// ----------------------------------------------------------------------------------
//  23-06. function-with-return-function
// ----------------------------------------------------------------------------------

// 1. 함수를 리턴하는 함수
function aaa() {
  const apple = 10;

  return function bbb() {
    const banana = 20;
    console.log(banana);
    console.log(apple);
  };
}

aaa()();

// 실행 결과
// 5
// 6

// ----------------------------------------------------------------------------------

// 2. 함수를 리턴하는 함수 - 인자
// 위의 함수는 파라미터를 사용해 조금 더 간결하게 바꿀 수 있다.

// 함수 선언식
function bbb(apple) {
  return function bbb(banana) {
    console.log(banana);
    console.log(apple);
  };
}

bbb(10)(20);

// 실행 결과
// 2 => aaa에 넣은 인자값
// 3 => bbb에 넣은 인자값

// ----------------------------------------------------------------------------------

// 3. 함수를 리턴하는 함수 - 화살표함수

// 화살표 함수로 변경
const ccc = (apple) => {
  return (banana) => {
    console.log(apple);
    console.log(banana);
  };
};

ccc(10)(20);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// 중괄호와 리턴사이에 아무것도 없다면 중괄호를 생략

const ccc = (apple) => (banana) => {
  console.log(apple);
  console.log(banana);
};

ccc(10)(20);

// ----------------------------------------------------------------------------------

// 4. 함수를 리턴하는 함수 - 3개

const ddd = (apple) => (banana) => (tomato) => {
  console.log(banana);
  console.log(apple);
  console.log(tomato);
};

ddd(10)(20)(30);
