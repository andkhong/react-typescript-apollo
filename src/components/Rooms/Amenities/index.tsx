import * as React from 'react';

interface Props {
    amenities: string[];
}

const Amenities = ({ amenities }: Props) => (
  <div> 
    {amenities.map((item: string, index: number) => (
      <div key={index}> 
        {item} 
      </div>
    ))}
  </div>
);

export default Amenities;