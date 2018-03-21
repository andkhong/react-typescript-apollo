import * as React from 'react';
import DescriptionWrapper from './Description.wrapper';

interface Props {
    city: string;
    country: string;
    title: string;
}

const Description = ({ city, country, title}: Props) => (
  <DescriptionWrapper>
    <h1>{title}</h1>
    <span className="city">{city},&nbsp;</span>
    <span className="country">{country}</span>
  </DescriptionWrapper>
);

export default Description;