// ----------------------------------------------------------------------------------
// globalStyles (CSS 설정) : 모든 페이지에 적용
// ----------------------------------------------------------------------------------

// globalStyles는 최상위 부모이다. 자식에서 별도로 설정하면 그게 우선적용된다.

import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 15px;
    font-family: "myfont2";
  }

  @font-face {
    font-family: "myfont1";
    src: url("/fonts/scifibit.ttf");
  }

  @font-face {
    font-family: "myfont2";
    src: url("/fonts/FriendlyComics.otf");
  }
`;
