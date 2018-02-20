import * as React from 'react';
import Slider from 'react-slick';
// import "./index.scss";
// import "./index-theme.scss";
const Cooper = require('assets/img/cooper.jpg');
const Dog = require('assets/img/dog.jpg');

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<div>
			<Slider {...settings}>
				<div>
          <img src={Cooper} />
        </div>
        <div>
  				<img src={Dog} />
        </div>
			</Slider>
		</div>
	);

}

export default Carousel;

