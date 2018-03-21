import * as React from 'react';

interface Props {
    amenities: string[];
}

const Amenities = ({ amenities }: Props) => {
  if (!amenities) return null;
  return (
    <div>
      <h1> Amenities </h1>
        {amenities.map((item: string, index: number) => (
          <div key={index}> 
            {item} 
          </div>
        ))}
    </div>
  )
}

export default Amenities;