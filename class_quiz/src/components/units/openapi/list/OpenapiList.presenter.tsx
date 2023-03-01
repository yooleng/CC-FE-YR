// ----------------------------------------------------------------------------------
// day 16. 3-open-api - DOG API 9개 배열 - presenter
// ----------------------------------------------------------------------------------

import { DogImg, Wrapper } from "./OpenapiList.styles";
import { IOpenapiListUIProps } from "./OpenapiList.types";

export default function OpenapiListUI(props: IOpenapiListUIProps) {
  console.log(props.imgUrls);
  return (
    <Wrapper>
      <div>
        {props.imgUrls.map((el, index) => (
          <>
            <DogImg key={el} src={el} />
            {(index + 1) % 3 === 0 && <br />}
          </>
        ))}
      </div>
    </Wrapper>
  );
}
