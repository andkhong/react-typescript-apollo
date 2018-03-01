import * as React from 'react';
import Slider from 'react-slick';
import "./index.scss";
import "./index-theme.scss";

interface Props {
  initialPic: string;
  photos?: string[];
}

const Carousel = ({ initialPic, photos }: Props) => {
  if (!initialPic) return null;
  const images: string[] = photos ? [initialPic, ...photos] : [initialPic];
  const isDots: boolean = images.length > 1;
	const settings = {
		dots: isDots,
		infinite: true,
    speed: 900,
    adaptiveHeight: true,
    draggable: isDots,
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

const Left = ({ className, onClick, slideCount } : any) => (
  (slideCount > 2) 
  ? <button className={className} style={{ background: 'green' }} onClick={onClick} />
  : null
);

const Right = ({ className, onClick, slideCount } : any) => (
  (slideCount < 2) 
  ? <button className={className} style={{ background: 'green' }} onClick={onClick} />
  : null
);

export default Carousel;

import styled from 'styled-components';

const SliderWrapper = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;

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

  .rawr {
    height: 200px;
    width: 200px;
  }

  .slick-list {
    height: 100%;
    width: 100%;
  }

`;


