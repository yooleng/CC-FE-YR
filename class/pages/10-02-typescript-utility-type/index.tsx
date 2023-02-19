// ----------------------------------------------------------------------------------
// 10-02. typescript-utility-type
// ----------------------------------------------------------------------------------

import { type } from "os";

//  utility type

export default function TypescriptUtilityPage() {
  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string;
  }

  // type IProfile2 = {
  //   name: string;
  //   age: number;
  //   school: string;
  //   hobby?: string;
  // };

  // utility type의 종류
  // utility type : 기존에 있는 타입을 사용자가 조작해서 사용

  // 1. Pick type
  // : 기존의 타입에서 필요한 요소들만 골라서 다시 새로운 타입을 만드는 것
  type aaa = Pick<IProfile, "name" | "age">;

  // 2. Omit type
  // : 기존의 타입에서 제외하고 싶은 요소를 빼고 새로운 타입을 만드는 것
  type bbb = Omit<IProfile, "school">;

  // 3. Partial type
  // : 기존 타입의 요소들을 모두 있어도 되고 없어도 되는 형태로 만드는 것 (?가 붙음)
  type ccc = Partial<IProfile>;

  // 4. Required type
  // : 기존 타입의 요소들을 모두 필수로 만드는 것
  type ddd = Required<IProfile>;

  // 5. Record type
  // : 기존 타입의 요소들을 분리해서 타입과 매칭하여 새로운 타입을 만드는 것

  type eee = "철수" | "영희" | "훈이"; // union type
  let child: eee;
  child = "철수"; // child 안에는 철수, 영희, 훈이만 들어갈 수 있다.

  type fff = Record<eee, IProfile>; // Record type
  // eee 안의 요소들(철수, 영희, 훈이)이 key, IProfile이 value가 된다.

  // ----------------------------------------------------------------------------------

  // type vs interface 차이 : 선언병합

  // interface는 위에서 선언했어도 다시 선언이 가능하다. 알아서 하나로 합쳐짐
  interface IProfile {
    candy: number;
  }

  let profile: Partial<IProfile> = {};
  profile.candy = 10;
  profile.age = 20;
}
