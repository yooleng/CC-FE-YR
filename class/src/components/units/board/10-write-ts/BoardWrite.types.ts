// ----------------------------------------------------------------------------------
// 10. BoardWrite.types - page의 type(interfaces) 부분 - typescript
// ----------------------------------------------------------------------------------

import { ChangeEvent } from "react";

export interface IBoardWriteComponentProps {
  isEdit: boolean;
  data?: any;
}

export interface IBoardWriteComponentUIProps {
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  myColor: boolean;
  isEdit: boolean;
  data: any;
  // void: return이 없는 타입
  // data는 일단 any로 지정
}

export interface IMyvariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
  // 수정 시 writer, title, contents는 없을 수도 있으므로 ? 처리
}

export interface IBlueButtonProps {
  aaa: string;
  bbb: string;
  ccc: boolean; // {props.myColor}는 boolean type
  // onClick 은 해줘도 되고 안해줘도 됨 (선택)
}
