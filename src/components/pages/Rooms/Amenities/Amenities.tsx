import * as React from 'react';
import AmenitiesWrapper from './Amenities.wrapper';

interface Props {
    amenities: string[];
}

const Amenities = ({ amenities }: Props) => {
  if (!amenities) return null;
  return (
    <AmenitiesWrapper>
      <h1> Amenities </h1>
        {amenities.map((item: string, index: number) => (
          <div key={index}> 
            {item} 
          </div>
        ))}
    </AmenitiesWrapper>
  )
}

export default Amenities;