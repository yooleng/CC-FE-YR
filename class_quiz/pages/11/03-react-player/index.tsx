// ----------------------------------------------------------------------------------
// day 11 : react-player - 3. 유튜브 라이브러리
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
