// ----------------------------------------------------------------------------------
// day 13. Layout - banner - carousel
// ----------------------------------------------------------------------------------

import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      centerMode: true,
    };
    // ----------------------------------------------------------------------------------
    // setting 예시

    // const setting ={
    //   slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li
    //   infinite : true, 	//무한 반복 옵션
    //   slidesToShow : 4,		// 한 화면에 보여질 컨텐츠 개수
    //   slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
    //   speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    //   arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
    //   dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
    //   autoplay : true,			// 자동 스크롤 사용 여부
    //   autoplaySpeed : 10000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    //   pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    //   vertical : false,		// 세로 방향 슬라이드 옵션
    //   prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
    //   nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
    //   dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    //   draggable : true, 	//드래그 가능 여부

    // ----------------------------------------------------------------------------------

    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <div>
              <h3>1</h3>
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "#3535356e",
                }}
              ></div>
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#3535356e",
              }}
            ></div>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#3535356e",
              }}
            ></div>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
