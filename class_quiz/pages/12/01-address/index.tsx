// ----------------------------------------------------------------------------------
// day 12 - 1. daum-postcode (주소검색 라이브러리)
// ----------------------------------------------------------------------------------

import DaumPostcodeEmbed from "react-daum-postcode";

const Postcode = () => {
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log("data", data);
    console.log(fullAddress);
  };

  return <DaumPostcodeEmbed onComplete={handleComplete} />;
};

export default Postcode;
