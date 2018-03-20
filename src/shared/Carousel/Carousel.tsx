import * as React from 'react';
import Slider from 'react-slick';
import "./Carousel.style.scss";
import "./Carousel.theme.scss";
import CarouselWrapper from './Carousel.wrapper';

interface Props {
  initialPic: string;
  photos?: string[];
}

// class Carousel extends React.Component<Props, {}> {
//   componentDidMount() { 
//     setTimeout(() => {
//       window.dispatchEvent(new Event('resize')) 
//     }, 0); 
//   }
//   render() {
//     const { initialPic, photos } = this.props;
//     if (!initialPic) return null;
//     const images: string[] = photos ? [initialPic, ...photos] : [initialPic];
//     const settings = {
//       infinite: true,
//       speed: 900,
//       adaptiveHeight: false,
//       draggable: images.length > 1,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       prevArrow: <Left />,
//       nextArrow: <Right />
//     };
//     return (
//       <CarouselWrapper>
//         <Slider {...settings}>
//           {images.map((url: string, index: number) => (
//             <div key={index}>
//               <img src={url} />
//             </div>
//           ))}
//         </Slider>
//       </CarouselWrapper>
//     );
//   }
// }

const Carousel = ({ initialPic, photos }: Props) => {
  if (!initialPic) return null;
  // Weird hack for the pixel size
  setTimeout(() => {
    window.dispatchEvent(new Event('resize')) 
  }, 0); 
  // End Weird Hack
  const images: string[] = photos ? [initialPic, ...photos] : [initialPic];
  const settings = {
    infinite: true,
    speed: 900,
    adaptiveHeight: true,
    draggable: images.length > 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Left />,
    nextArrow: <Right />
  };
  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {images.map((url: string, index: number) => (
          <div key={index}>
            <img src={url} />
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
  );
}

const Left = ({ className, onClick, slideCount }: any) => (
  (slideCount > 2)
    ? <button className={className} style={{ background: 'green' }} onClick={onClick} />
    : null
);

const Right = ({ className, onClick, slideCount }: any) => (
  (slideCount > 2)
    ? <button className={className} style={{ background: 'green' }} onClick={onClick} />
    : null
);

export default Carousel;