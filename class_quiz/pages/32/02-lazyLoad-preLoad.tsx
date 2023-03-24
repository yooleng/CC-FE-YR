// ----------------------------------------------------------------------------------
//  day 32-02.  LazyLoad 와 PreLoad 적용하기
// ----------------------------------------------------------------------------------

import { useState } from "react";
import LazyLoad from "react-lazy-load";

const PRELOAD_IMAGES = [
  "https://i.pinimg.com/474x/52/f8/63/52f863367490d1f467a23910d12e5c39.jpg",
  "https://i.pinimg.com/564x/64/eb/f8/64ebf80906f97d7a28ac74c17c12472c.jpg",
  "https://i.pinimg.com/564x/96/d4/43/96d443c92059f2b3a240a7ff74692bbf.jpg",
  "https://i.pinimg.com/474x/22/63/d0/2263d0b3bd6819ccd043d8e262917d4d.jpg",
  "https://i.pinimg.com/474x/81/ff/6c/81ff6c430ab9c945e9a823da22f25368.jpg",
  "https://i.pinimg.com/474x/f0/82/3c/f0823c54bb92aec76f2959d88a0c42a5.jpg",
  "https://i.pinimg.com/474x/81/3d/39/813d3997687c5b5d13a5e3421df8101b.jpg",
  "https://i.pinimg.com/474x/84/17/de/8417de4c34a17daf297dd8979e33245f.jpg",
  "https://i.pinimg.com/474x/f9/29/06/f929065db7638c2a6e8c4e87fa8cca26.jpg",
  "https://i.pinimg.com/474x/fc/d2/e7/fcd2e7012ee09614ab6c9ee1d7bab7a6.jpg",
];

export default function ImagePreloadPage() {
  const [showImages, setShowImages] = useState(false);

  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const onImageLoad = (imageUrl: string) => {
    setLoadedImages((prevLoadedImages) => [...prevLoadedImages, imageUrl]);
  };

  const onClickPreloadShow = () => {
    setShowImages(true);
  };

  return (
    <>
      <div style={{ height: "5000px" }}></div>
      {PRELOAD_IMAGES.map((imageUrl) => (
        // <LazyLoad key={imageUrl} height={500} offsetVertical={500}>
        //   <img
        //     style={{ width: "500px", height: "500px" }}
        //     src={loadedImages.includes(imageUrl) ? imageUrl : ""}
        //     onLoad={() => onImageLoad(imageUrl)}
        //     loading="lazy"
        //   />
        // </LazyLoad>
        <LazyLoad key={imageUrl} height={500} offsetVertical={100}>
          <img
            style={{ width: "500px", height: "500px" }}
            src={showImages ? imageUrl : ""}
            loading="lazy"
          />
        </LazyLoad>
      ))}

      <button onClick={onClickPreloadShow}>이미지 보여주기</button>
    </>
  );
}

// ------
// 아악

// import { useEffect } from "react";
// // import { preloadImage } from "../../src/commons/libraries/preloadImage";

// const PRELOAD_IMAGES = [
//   "https://i.pinimg.com/474x/52/f8/63/52f863367490d1f467a23910d12e5c39.jpg",
//   "https://i.pinimg.com/564x/64/eb/f8/64ebf80906f97d7a28ac74c17c12472c.jpg",
//   "https://i.pinimg.com/564x/96/d4/43/96d443c92059f2b3a240a7ff74692bbf.jpg",
//   "https://i.pinimg.com/474x/22/63/d0/2263d0b3bd6819ccd043d8e262917d4d.jpg",
//   "https://i.pinimg.com/474x/81/ff/6c/81ff6c430ab9c945e9a823da22f25368.jpg",
//   "https://i.pinimg.com/474x/f0/82/3c/f0823c54bb92aec76f2959d88a0c42a5.jpg",
//   "https://i.pinimg.com/474x/81/3d/39/813d3997687c5b5d13a5e3421df8101b.jpg",
//   "https://i.pinimg.com/474x/84/17/de/8417de4c34a17daf297dd8979e33245f.jpg",
//   "https://i.pinimg.com/474x/f9/29/06/f929065db7638c2a6e8c4e87fa8cca26.jpg",
//   "https://i.pinimg.com/474x/fc/d2/e7/fcd2e7012ee09614ab6c9ee1d7bab7a6.jpg",
// ];

// const PRELOADED_IMAGES: HTMLImageElement[] = [];

// export default function ImagePreloadPage() {
//   const onClickPreloadShow = () => {
//     useEffect(() => {
//       const preloadImage = (images: string[]) => {
//         images.forEach((el) => {
//           const img = new Image();
//           img.src = el;
//           img.onload = () => PRELOADED_IMAGES.push(img);
//         });
//       };
//       preloadImage(PRELOAD_IMAGES);
//     }, []);
//   };

//   // prettier-ignore
//   return (
//     <>
//       <div></div>
//       <img style={{ width: "500px", height: "500px" }} src="" />
//       <img style={{ width: "500px", height: "500px" }} src="" />
//       <img style={{ width: "500px", height: "500px" }} src="" />
//       <img style={{ width: "500px", height: "500px" }} src="" />
//       <img style={{ width: "500px", height: "500px" }} src="" />
//       <img style={{ width: "500px", height: "500px" }} src="" />
//       <img style={{ width: "500px", height: "500px" }} src="" />
//       <img style={{ width: "500px", height: "500px" }} src="" />
//       <img style={{ width: "500px", height: "500px" }} src="" />
//       <img style={{ width: "500px", height: "500px" }} src="" />
//       <button onClick={onClickPreloadShow}>이미지 보여주기</button>
//     </>
//   );
// }

// import { useState } from "react";
// import LazyLoad from "react-lazy-load";

// const PRELOAD_IMAGES = [
//   "https://i.pinimg.com/474x/52/f8/63/52f863367490d1f467a23910d12e5c39.jpg",
//   "https://i.pinimg.com/564x/64/eb/f8/64ebf80906f97d7a28ac74c17c12472c.jpg",
//   "https://i.pinimg.com/564x/96/d4/43/96d443c92059f2b3a240a7ff74692bbf.jpg",
//   "https://i.pinimg.com/474x/22/63/d0/2263d0b3bd6819ccd043d8e262917d4d.jpg",
//   "https://i.pinimg.com/474x/81/ff/6c/81ff6c430ab9c945e9a823da22f25368.jpg",
//   "https://i.pinimg.com/474x/f0/82/3c/f0823c54bb92aec76f2959d88a0c42a5.jpg",
//   "https://i.pinimg.com/474x/81/3d/39/813d3997687c5b5d13a5e3421df8101b.jpg",
//   "https://i.pinimg.com/474x/84/17/de/8417de4c34a17daf297dd8979e33245f.jpg",
//   "https://i.pinimg.com/474x/f9/29/06/f929065db7638c2a6e8c4e87fa8cca26.jpg",
//   "https://i.pinimg.com/474x/fc/d2/e7/fcd2e7012ee09614ab6c9ee1d7bab7a6.jpg",
// ];

// export default function ImagePreloadPage() {
//   const [showImages, setShowImages] = useState(false);
//   const onClickPreloadShow = () => {
//     setShowImages(true);
//   };

//   return (
//     <>
//       <div style={{ height: "5000px" }}></div>
//       {PRELOAD_IMAGES.map((imageUrl) => (
//         <img
//           key={imageUrl}
//           style={{ width: "500px", height: "500px" }}
//           src={showImages ? imageUrl : ""}
//           loading="lazy"
//         />
//       ))}
//       <button onClick={onClickPreloadShow}>이미지 보여주기</button>
//     </>
//   );
// }
