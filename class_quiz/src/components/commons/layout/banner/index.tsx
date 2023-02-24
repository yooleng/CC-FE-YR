// ----------------------------------------------------------------------------------
// day 13. Layout - banner
// ----------------------------------------------------------------------------------

import styled from "@emotion/styled";
import Carousel from "../../carousel";
import CarouselAntd from "../../carousel-antd";

const Wrapper = styled.div`
  height: 300px;
  background-color: pink;
`;

export default function LayoutBanner(): JSX.Element {
  return (
    <>
      <Wrapper>
        배너영역
        <Carousel />
        {/* <CarouselAntd /> */}
      </Wrapper>
    </>
  );
}
