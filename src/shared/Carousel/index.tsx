import * as React from 'react';
import Slider from 'react-slick';
import "./index.scss";
import "./index-theme.scss";

interface Props {
	listingPicUrl: string;
}

const Carousel = ({ listingPicUrl }: Props) => {
  const images: string[] = [
    listingPicUrl,
    listingPicUrl
  ];
	const settings = {
		dots: (images.length > 1),
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

const Left = ({ className, style, onClick, slideCount } : any) => {
  if (slideCount < 2) return null;
  return (
    <button 
      className={className}
      style={{...style, background: 'green'}}
      onClick={onClick}
    >
      Left
    </button>
  );
};

const Right = ({ className, style, onClick, slideCount } : any) => {
  if (slideCount < 2) return null;
  return (
    <button 
      className={className}
      style={{...style, background: 'green'}}
      onClick={onClick}
    >
      Right
    </button>
  );
};

export default Carousel;

import styled from 'styled-components';

const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 1100px;
  height: 400px;

  div {
    height: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;


