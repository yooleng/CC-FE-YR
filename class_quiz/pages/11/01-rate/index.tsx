// ----------------------------------------------------------------------------------
// day 11 : ant-design - 1. 별점 라이브러리
// ----------------------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import { Rate } from "antd";

const desc = ["1", "2", "3", "4", "5"];

const App: React.FC = () => {
  const [value, setValue] = useState(3);

  useEffect(() => {
    alert(desc[value - 1]);
  }, [value]);

  return (
    <>
      <h3>별점 라이브러리</h3>
      <span>
        <Rate tooltips={desc} onChange={setValue} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      </span>
    </>
  );
};

export default App;
