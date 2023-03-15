// ----------------------------------------------------------------------------------
//  25-06. custom-hooks - useSearch
// ----------------------------------------------------------------------------------

import { useState } from "react";

export function useSearch() {
  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  return {
    keyword,
    onChangeKeyword,
  };
}
