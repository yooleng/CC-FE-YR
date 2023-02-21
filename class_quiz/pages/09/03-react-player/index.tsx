// ----------------------------------------------------------------------------------
// day 11 : ant-design, daum-postcode (라이브러리)
// ----------------------------------------------------------------------------------
// 3. 유튜브 라이브러리 (react-player)
// ----------------------------------------------------------------------------------

import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=r_E_-FRiyKc"
        width="800px"
        height="600px"
        controls={true}
        muted={true}
        playing={true}
      />
    </div>
  );
}

export default VideoPlayer;
