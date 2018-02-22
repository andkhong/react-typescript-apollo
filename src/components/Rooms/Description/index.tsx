import * as React from 'react';

interface Props {
    city: string;
    country: string;
    title: string;
}

const Description = ({ city, country, title}: Props) => (
    <div>
        <h1>{title}</h1>
        {city}, {country}
    </div>
);

export default Description;