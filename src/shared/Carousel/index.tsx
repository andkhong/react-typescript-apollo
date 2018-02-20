import * as React from 'react';
import Slider from 'react-slick';
import "./index.scss";
import "./index-theme.scss";

interface Props {
	initialPic: string;
}

const Carousel = ({ initialPic }: Props) => {
  if(initialPic) {}
  const images: string[] = [
    // initialPic,
    "https://s3-us-west-2.amazonaws.com/beenest-public/images/l2.jpg",
    "https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    "https://s3-us-west-2.amazonaws.com/beenest-public/images/l1.jpg"
  ];
  const isDots: boolean = images.length > 1;
	const settings = {
		dots: isDots,
		infinite: true,
    speed: 900,
    adaptiveHeight: true,
    draggable: true,
		slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Left />,
    nextArrow: <Right />
	};
	return (
    <SliderWrapper>
      <Slider {...settings}>
        {images.map((url: string, index: number) => <div key={index}><img src={url} /></div> )}
      </Slider>
    </SliderWrapper>
	);
}

const Left = ({ className, style, onClick, slideCount } : any) => (
  (slideCount < 2) 
  ? null
  : <button className={className} style={{...style, background: 'green'}} onClick={onClick} />
);

const Right = ({ className, style, onClick, slideCount } : any) => (
  (slideCount < 2) 
  ? null
  : <button className={className} style={{...style, background: 'green'}} onClick={onClick} />
);

export default Carousel;

import styled from 'styled-components';

const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 400px;

  div {
    height: 100%;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;


