import React from "react";
import Slider from "react-slick";
import banner_1 from "../../images/banner_1.jpg";
import banner_2 from "../../images/banner_2.jpg";
const settings: {} = {
  dots: true,
  infinite: false,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
const Banner = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={banner_2} alt="" className="object-cover" />
        </div>
        <div>
          <img src={banner_2} alt="" />
        </div>
      </Slider>
    </div>
  );
};

function SampleNextArrow(props: any) {
  const { className, onClick } = props;
  return <div className={`${className} next_banner`} onClick={onClick} />;
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={`${className} prev_banner`} onClick={onClick} />;
}
export default Banner;
